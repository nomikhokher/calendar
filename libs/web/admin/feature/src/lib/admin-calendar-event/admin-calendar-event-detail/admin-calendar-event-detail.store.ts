
import { Injectable } from '@angular/core'
import { ActivatedRoute,Router } from '@angular/router'
import { ComponentStore,tapResponse } from '@ngrx/component-store'
import { WebCoreDataAccessService,CalendarEvent } from '@calendar/web/core/data-access'
import { pluck,switchMap, tap } from 'rxjs/operators'

export interface CalendarEventDetailState {
  errors ?: any
  loading?: boolean
  item?: CalendarEvent
}

@Injectable()
export class AdminCalendarEventDetailStore extends ComponentStore<CalendarEventDetailState> {
  constructor(private readonly data: WebCoreDataAccessService, private readonly router: Router, private readonly route: ActivatedRoute) {
    super({ loading: false })
    this.loadCalendarEventEffect(route.params.pipe(pluck('calendarEventId')))
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly item$ = this.select((s) => s.item)
  readonly vm$ = this.select(this.errors$, this.loading$, this.item$, (errors, loading, item) => ({
    errors,
    loading,
    item: { ...item },
  }))

  readonly loadCalendarEventEffect = this.effect<string>((calendarEventId$) =>
    calendarEventId$.pipe(
      tap(() => this.setState({ loading: true })),
      switchMap((calendarEventId) =>
        this.data.adminCalendarEvent({ calendarEventId }).pipe(
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

  readonly deleteCalendarEventEffect = this.effect<CalendarEvent>(
    (calendarEvent$) =>
      calendarEvent$.pipe(
        switchMap((calendarEvent) =>
          this.data
            .adminDeleteCalendarEvent({
              calendarEventId: calendarEvent.id,
            })
            .pipe(
              tapResponse(
                (res) => this.router.navigate(['/admin/calendar-events']),
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

