
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { AdminCreateCalendarEventInput, WebCoreDataAccessService, CalendarEvent, Calendar } from '@calendar/web/core/data-access'
import { ComponentStore,tapResponse } from '@ngrx/component-store'
import { switchMap,tap } from 'rxjs/operators'

export interface CalendarEventCreateState {
  errors?: any
  loading?: boolean
  item?: CalendarEvent,
 calendars?: Calendar[]
  searchTerm?: string
}

@Injectable()
export class AdminCalendarEventCreateStore extends ComponentStore<CalendarEventCreateState> {
  constructor(private readonly data: WebCoreDataAccessService, private readonly router: Router) {
    super({ loading: false })
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly item$ = this.select((s) => s.item)
  readonly calendars$ = this.select((s) => s.calendars)
  readonly vm$ = this.select(this.errors$, this.loading$, this.item$, 
this.calendars$,
    (errors, loading, item, calendars ) => ({
    errors,
    loading,
    item,
calendars
  }))



  readonly filterCalendars = this.effect<string>((filter$) => 
    filter$.pipe(
      switchMap((term) =>
        this.data.adminCalendars({input: { name: term}}).pipe(
          tapResponse(
            (res: any) => {
              let calendars = res.data.items;
              return this.patchState({ calendars: calendars })
            },
            (errors: any) =>
              this.patchState({
                errors: errors.graphQLErrors ? errors.graphQLErrors : errors,
              }),
          ),
        ),
      ),
    )
  )


    

  readonly createCalendarEventEffect = this.effect<AdminCreateCalendarEventInput>((input$) =>
    input$.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap((input) =>
        this.data.adminCreateCalendarEvent({ input }).pipe(
          tapResponse(
            (res) => {
              this.patchState({ item: res.data.created, errors: res.errors, loading: false })
              return this.router.navigate(['/admin/calendar-events', res.data?.created?.id])
            },
            (errors: any) =>
              this.patchState({
                loading: false,
                errors: errors.graphQLErrors ? errors.graphQLErrors : errors,
              }),
          ),
        ),
      ),
    ),
  )
}


