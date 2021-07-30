import { Injectable } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { WebCoreDataAccessService, Calendar } from '@calendar/web/core/data-access'
import { pluck, switchMap, tap } from 'rxjs/operators'

export interface CalendarDetailState {
  errors?: any
  loading?: boolean
  item?: Calendar
}

@Injectable()
export class CalendarDetailStore extends ComponentStore<CalendarDetailState> {
  constructor(
    private readonly data: WebCoreDataAccessService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {
    super({ loading: false })
    this.loadCalendarEffect(route.params.pipe(pluck('calendarId')))
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly item$ = this.select((s) => s.item)
  readonly vm$ = this.select(this.errors$, this.loading$, this.item$, (errors, loading, item) => ({
    errors,
    loading,
    item: { ...item },
  }))

  readonly loadCalendarEffect = this.effect<string>((calendarId$) =>
    calendarId$.pipe(
      tap(() => this.setState({ loading: true })),
      switchMap((calendarId) =>
        this.data.userCalendar({ calendarId }).pipe(
          tapResponse(
            (res) => this.patchState({ item: res.data.item, errors: res.errors, loading: false }),
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

  readonly deleteCalendarEffect = this.effect<Calendar>((calendar$) =>
    calendar$.pipe(
      switchMap((calendar) =>
        this.data.userUserCalendars().pipe(
          tapResponse(
            (userCalendars) => {
              const { id } = userCalendars.data.items.find(
                (userCalendarId) => userCalendarId.calendarId === calendar.id,
              )
              this.data.userDeleteUserCalendar({ userCalendarId: id }).subscribe(() => {
                this.data.userDeleteCalendar({ calendarId: calendar.id }).subscribe((calendar) => calendar)
              })
              this.router.navigate(['/calendars'])
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
