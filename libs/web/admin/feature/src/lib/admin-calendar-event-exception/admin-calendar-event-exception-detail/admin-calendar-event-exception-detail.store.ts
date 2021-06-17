
import { Injectable } from '@angular/core'
import { ActivatedRoute,Router } from '@angular/router'
import { ComponentStore,tapResponse } from '@ngrx/component-store'
import { WebCoreDataAccessService,CalendarEventException } from '@calendar/web/core/data-access'
import { pluck,switchMap, tap } from 'rxjs/operators'

export interface CalendarEventExceptionDetailState {
  errors ?: any
  loading?: boolean
  item?: CalendarEventException
}

@Injectable()
export class AdminCalendarEventExceptionDetailStore extends ComponentStore<CalendarEventExceptionDetailState> {
  constructor(private readonly data: WebCoreDataAccessService, private readonly router: Router, private readonly route: ActivatedRoute) {
    super({ loading: false })
    this.loadCalendarEventExceptionEffect(route.params.pipe(pluck('calendarEventExceptionId')))
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly item$ = this.select((s) => s.item)
  readonly vm$ = this.select(this.errors$, this.loading$, this.item$, (errors, loading, item) => ({
    errors,
    loading,
    item: { ...item },
  }))

  readonly loadCalendarEventExceptionEffect = this.effect<string>((calendarEventExceptionId$) =>
    calendarEventExceptionId$.pipe(
      tap(() => this.setState({ loading: true })),
      switchMap((calendarEventExceptionId) =>
        this.data.adminCalendarEventException({ calendarEventExceptionId }).pipe(
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

  readonly deleteCalendarEventExceptionEffect = this.effect<CalendarEventException>(
    (calendarEventException$) =>
      calendarEventException$.pipe(
        switchMap((calendarEventException) =>
          this.data
            .adminDeleteCalendarEventException({
              calendarEventExceptionId: calendarEventException.id,
            })
            .pipe(
              tapResponse(
                (res) => this.router.navigate(['/admin/calendar-event-exceptions']),
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

