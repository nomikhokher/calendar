import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { AdminCreateCalendarInput, WebCoreDataAccessService, Calendar } from '@calendar/web/core/data-access'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { switchMap, tap } from 'rxjs/operators'
export interface CalendarCreateState {
  errors?: any
  loading?: boolean
  item?: Calendar
  searchTerm?: string
}
@Injectable()
export class CalendarCreateStore extends ComponentStore<CalendarCreateState> {
  constructor(private readonly data: WebCoreDataAccessService, private readonly router: Router) {
    super({ loading: false })
  }
  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly item$ = this.select((s) => s.item)
  readonly vm$ = this.select(this.errors$, this.loading$, this.item$, (errors, loading, item) => ({
    errors,
    loading,
    item,
  }))

  // this.CalendarService.accountProfile({}, { fetchPolicy: 'no-cache' }).subscribe((user) => {
  //   this.CalendarService.userCreateCalendar(input).subscribe((calendar) => {
  //     const input = {
  //       userId: user.data.accountProfile.id,
  //       name: user.data.accountProfile.name,
  //       calendarId: calendar.data.created.id,
  //     }
  //     this.CalendarService.userCreateUserCalendar({ input }).subscribe((res) => {
  //       this.getCalendarInServserSide()
  //       this.getEventInServserSide()
  //     })
  //   })
  // })

  readonly createCalendarEffect = this.effect<AdminCreateCalendarInput>((input$) =>
    input$.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap((input) =>
        this.data.accountProfile({}, { fetchPolicy: 'no-cache' }).pipe(
          tapResponse(
            (user) => {
              this.data.userCreateCalendar({ input }).subscribe((calendar) => {
                const input = {
                  userId: user.data.accountProfile.id,
                  name: user.data.accountProfile.name,
                  calendarId: calendar.data.created.id,
                }
                this.data.userCreateUserCalendar({ input }).subscribe((res) => res)
                this.patchState({ item: calendar.data.created, errors: calendar.errors, loading: false })
                return this.router.navigate(['/calendars', calendar.data?.created?.id])
              })
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
