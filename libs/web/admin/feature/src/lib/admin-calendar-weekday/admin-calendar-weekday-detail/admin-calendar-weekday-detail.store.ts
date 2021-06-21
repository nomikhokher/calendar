import { Injectable } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { WebCoreDataAccessService, CalendarWeekday } from '@calendar/web/core/data-access'
import { pluck, switchMap, tap } from 'rxjs/operators'

export interface CalendarWeekdayDetailState {
  errors?: any
  loading?: boolean
  item?: CalendarWeekday
}

@Injectable()
export class AdminCalendarWeekdayDetailStore extends ComponentStore<CalendarWeekdayDetailState> {
  constructor(
    private readonly data: WebCoreDataAccessService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {
    super({ loading: false })
    this.loadCalendarWeekdayEffect(route.params.pipe(pluck('calendarWeekdayId')))
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly item$ = this.select((s) => s.item)
  readonly vm$ = this.select(this.errors$, this.loading$, this.item$, (errors, loading, item) => ({
    errors,
    loading,
    item: { ...item },
  }))

  readonly loadCalendarWeekdayEffect = this.effect<string>((calendarWeekdayId$) =>
    calendarWeekdayId$.pipe(
      tap(() => this.setState({ loading: true })),
      switchMap((calendarWeekdayId) =>
        this.data.adminCalendarWeekday({ calendarWeekdayId }).pipe(
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

  readonly deleteCalendarWeekdayEffect = this.effect<CalendarWeekday>((calendarWeekday$) =>
    calendarWeekday$.pipe(
      switchMap((calendarWeekday) =>
        this.data
          .adminDeleteCalendarWeekday({
            calendarWeekdayId: calendarWeekday.id,
          })
          .pipe(
            tapResponse(
              (res) => this.router.navigate(['/admin/calendar-weekdays']),
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
