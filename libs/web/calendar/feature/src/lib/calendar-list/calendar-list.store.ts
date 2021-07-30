import { Injectable } from '@angular/core'
import { WebCoreDataAccessService, AdminListCalendarInput, Calendar } from '@calendar/web/core/data-access'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { Subject, timer } from 'rxjs'
import { switchMap, takeUntil, tap, withLatestFrom } from 'rxjs/operators'

export interface CalendarListState {
  input: AdminListCalendarInput
  errors?: any
  loading?: boolean
  items?: Calendar[]
}

@Injectable()
export class CalendarListStore extends ComponentStore<CalendarListState> {
  constructor(private readonly data: WebCoreDataAccessService) {
    super({ input: { skip: 0, limit: 10 } })
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly input$ = this.select((s) => s.input)
  readonly items$ = this.select((s) => s.items)
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

  public calendars: any[] = []
  public calendarsData: any[]
  readonly timeSubject = new Subject()

  readonly loadCalendarsEffect = this.effect(($) =>
    $.pipe(
      tap(() => this.patchState({ loading: true })),
      withLatestFrom(this.input$),
      switchMap(([_, input]) =>
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
                  return this.patchState({ items: this.calendarsData, errors: res.errors, loading: false })
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
}
