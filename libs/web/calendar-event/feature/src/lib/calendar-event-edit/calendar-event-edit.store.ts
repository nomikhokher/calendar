import { Injectable } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import {
  AdminUpdateCalendarEventInput,
  WebCoreDataAccessService,
  CalendarEvent,
  Calendar,
} from '@calendar/web/core/data-access'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { Subject, timer } from 'rxjs'
import { switchMap, tap, withLatestFrom, pluck, takeUntil } from 'rxjs/operators'

export interface CalendarEventUpdateState {
  errors?: any
  loading?: boolean
  item?: CalendarEvent
  calendars?: Calendar[]
  searchTerm?: string
}

@Injectable()
export class CalendarEventEditStore extends ComponentStore<CalendarEventUpdateState> {
  constructor(
    private readonly data: WebCoreDataAccessService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {
    super({ loading: false })

    this.loadCalendarEventEffect(route.params.pipe(pluck('calendarEventId')))
  }
  readonly timeSubject = new Subject()
  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly item$ = this.select((s) => s.item)
  readonly calendars$ = this.select((s) => s.calendars)
  readonly vm$ = this.select(
    this.errors$,
    this.loading$,
    this.item$,
    this.calendars$,
    (errors, loading, item, calendars) => ({
      errors,
      loading,
      item,
      calendars,
    }),
  )
  public calendars: any[] = []
  public calendarsData: any[]

  readonly filterCalendars = this.effect<string>((filter$) =>
    filter$.pipe(
      switchMap((term) =>
        this.data.userUserCalendars().pipe(
          tapResponse(
            (res: any) => {
              this.calendars = []
              this.calendarsData = []
              res.data.items.forEach((calendarId) => {
                this.data
                  .userCalendar({ calendarId: calendarId.calendarId })
                  .subscribe((res) => this.calendars.push(res.data.item))
              })
              timer(500)
                .pipe(takeUntil(this.timeSubject))
                .subscribe((data) => {
                  this.calendarsData = this.calendars.map((calendar) => {
                    calendar.name = calendar.title
                    return calendar
                  })
                  return this.patchState({ calendars: this.calendarsData })
                })
            },
            (errors: any) =>
              this.patchState({
                errors: errors.graphQLErrors ? errors.graphQLErrors : errors,
              }),
          ),
        ),
      ),
    ),
  )

  readonly loadCalendarEventEffect = this.effect<string>((calendarEventId$) =>
    calendarEventId$.pipe(
      tap(() => this.setState({ loading: true })),
      switchMap((calendarEventId) =>
        this.data.userCalendarEvent({ calendarEventId }).pipe(
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

  readonly updateCalendarEventEffect = this.effect<AdminUpdateCalendarEventInput>((input$) =>
    input$.pipe(
      tap(() => this.patchState({ loading: true })),
      withLatestFrom(this.item$),
      switchMap(([input, item]) =>
        this.data.userUpdateCalendarEvent({ input, calendarEventId: item.id }).pipe(
          tapResponse(
            (res) => {
              this.patchState({ item: res.data.updated, errors: res.errors, loading: false })
              return this.router.navigate(['/calendar-events', res.data?.updated?.id])
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
