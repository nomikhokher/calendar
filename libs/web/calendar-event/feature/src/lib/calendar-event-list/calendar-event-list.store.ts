import { Injectable } from '@angular/core'
import { WebCoreDataAccessService, AdminListCalendarEventInput, CalendarEvent } from '@calendar/web/core/data-access'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { Subject, timer } from 'rxjs'
import { switchMap, takeUntil, tap, withLatestFrom } from 'rxjs/operators'

export interface CalendarEventListState {
  input: AdminListCalendarEventInput
  errors?: any
  loading?: boolean
  items?: CalendarEvent[]
}

@Injectable()
export class CalendarEventListStore extends ComponentStore<CalendarEventListState> {
  constructor(private readonly data: WebCoreDataAccessService) {
    super({ input: { skip: 0, limit: 10 } })
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly input$ = this.select((s) => s.input)
  readonly items$ = this.select((s) => s.items)
  public calendars: any[] = []
  public calendarsData: any[]
  readonly timeSubject = new Subject()

  readonly vm$ = this.select(
    this.errors$,
    this.loading$,
    this.input$,
    this.items$,
    (errors, loading, input, items) => ({
      errors,
      loading,
      input,
      items,
    }),
  )

  readonly loadCalendarEventsEffect = this.effect(($) =>
    $.pipe(
      tap(() => this.patchState({ loading: true })),
      withLatestFrom(this.input$),
      switchMap(([_, input]) =>
        this.data.userUserCalendars({ input }).pipe(
          tapResponse(
            (res) => {
              this.calendarsData = []
              res.data.items.forEach((calendarId) => {
                this.data.userCalendar({ calendarId: calendarId.calendarId }).subscribe((calendar) => {
                  this.data.userCalendarEvents({ input: { calendarId: calendar.data.item.id } }).subscribe((event) => {
                    event.data.items.forEach((data) => {
                      this.calendarsData.push(data)
                    })
                  })
                })
              })
              timer(500)
                .pipe(takeUntil(this.timeSubject))
                .subscribe((data) => {
                  this.patchState({ items: this.calendarsData, errors: res.errors, loading: false })
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
