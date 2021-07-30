import { Component } from '@angular/core'
import { WebCoreDataAccessService } from '@calendar/web/core/data-access'
import { Subject, timer } from 'rxjs'
import { map, takeUntil } from 'rxjs/operators'

@Component({
  template: `
    <ui-page headerTitle="Full Calendar">
      <div class="dark:bg-gray-800 px-6 py-4 mb-3 md:mb-6">
        <ng-container *ngIf="settings$ | async as fetchSettings; else elseBlok">
          <ui-calendar
            [fetchEvent]="fetchEvent"
            [calendars]="getClendars"
            [fetchSettings]="fetchSettings"
            [weekdays]="weekdays"
            (addEventInServserSide)="addEventInServserSide($event)"
            (removeEventInServserSide)="removeEventInServserSide($event)"
            (updateEventInServserSide)="updateEventInServserSide($event)"
            (addCalendarInServserSide)="addCalendarInServserSide($event)"
            (updateCalendarInServserSide)="updateCalendarInServserSide($event)"
            (updateCalendarVisibleInServserSide)="updateCalendarVisibleInServserSide($event)"
            (deleteCalendarInServserSide)="deleteCalendarInServserSide($event)"
            (settingsUpdateCalendarInServserSide)="settingsUpdateCalendarInServserSide($event)"
          ></ui-calendar>
        </ng-container>
      </div>
      <ng-template #elseBlok><p>Loading...</p></ng-template>
    </ui-page>
  `,
})
export class WebFullCalendarFeatureComponent {
  fetchEvent: any
  getClendars: any
  calendarItems: any[] = []
  settings$: any
  calenders: any
  weekdays: any
  EventSourceObject$ = []
  private timeSubject = new Subject<any>()
  eventSourceObject: any[] = []

  constructor(private readonly CalendarService: WebCoreDataAccessService) {}

  ngOnInit(): void {
    this.getEventInServserSide()
    this.getCalendarInServserSide()
    this.settingsCalendarInServserSide()
    this.getadminCalendarWeekdays()
  }

  // Api call get event in server side
  getEventInServserSide(): void {
    this.CalendarService.accountProfile({}, { fetchPolicy: 'no-cache' }).subscribe(() => {
      this.CalendarService.userUserCalendars().subscribe((userCalendars) => {
        userCalendars.data.items.forEach((calendarId) => {
          this.CalendarService.userCalendar({ calendarId: calendarId.calendarId }).subscribe((calendar) => {
            this.eventSourceObject = []
            this.CalendarService.userCalendarEvents({ input: { calendarId: calendar.data.item.id } })
              .pipe(
                map((events) => {
                  let events_filtered = events.data.items
                    .filter((event) => event.calendarId === calendar.data.item.id)
                    .map((res) => {
                      if (res.recurrence === null) {
                        return res
                      }

                      if (!res.recurrence.includes('FREQ')) {
                        return { ...res, recurrence: null }
                      }

                      return { ...res, rrule: res.recurrence }
                    })

                  let EventSourceObject = {
                    id: calendar.data.item.id,
                    title: calendar.data.item.title,
                    events: events_filtered,
                    color: calendar.data.item.color,
                    display: calendar.data.item.visible ? 'block' : 'none',
                  }
                  this.eventSourceObject.push(EventSourceObject)
                  return this.eventSourceObject
                }),
              )
              .subscribe((res) => {
                timer(1000)
                  .pipe(takeUntil(this.timeSubject))
                  .subscribe((data) => {
                    this.fetchEvent = res
                  })
              })
          })
        })
      })
    })
  }

  // Api call add event in server side
  addEventInServserSide(input): void {
    this.CalendarService.userCreateCalendarEvent(input).subscribe((res) => res)
    this.getEventInServserSide()
  }

  // Api call delete event in server side
  removeEventInServserSide(input): void {
    this.CalendarService.userDeleteCalendarEvent({ calendarEventId: input }).subscribe((res) => res)
    this.getEventInServserSide()
  }

  // Api call update event in server side
  updateEventInServserSide(input): void {
    this.CalendarService.userUpdateCalendarEvent(input).subscribe((res) => res)
    this.getEventInServserSide()
  }

  // Api call get calendar in server side
  getCalendarInServserSide(): void {
    this.CalendarService.accountProfile({}, { fetchPolicy: 'no-cache' }).subscribe((user) => {
      this.CalendarService.userUserCalendars().subscribe((userCalendars) => {
        this.calendarItems = []
        userCalendars.data.items.forEach((calendarId) => {
          this.CalendarService.userCalendar({ calendarId: calendarId.calendarId }).subscribe((calendar) => {
            this.calendarItems.push(calendar.data.item)
            this.getClendars = this.calendarItems
          })
        })
      })
    })
  }

  // Api call add calendar in server side
  addCalendarInServserSide(input): void {
    this.CalendarService.accountProfile({}, { fetchPolicy: 'no-cache' }).subscribe((user) => {
      this.CalendarService.userCreateCalendar(input).subscribe((calendar) => {
        const input = {
          userId: user.data.accountProfile.id,
          name: user.data.accountProfile.name,
          calendarId: calendar.data.created.id,
        }
        this.CalendarService.userCreateUserCalendar({ input }).subscribe((res) => {
          this.getCalendarInServserSide()
          this.getEventInServserSide()
        })
      })
    })
  }
  // Api call update calendar in server side
  updateCalendarInServserSide(input): void {
    this.CalendarService.userUpdateCalendar(input).subscribe((res) => res)
    this.getCalendarInServserSide()
    this.getEventInServserSide()
  }

  updateCalendarVisibleInServserSide(input): void {
    this.CalendarService.userUpdateCalendar(input).subscribe((res) => res)
    this.getEventInServserSide()
  }

  // Api call delete calendar in server side
  deleteCalendarInServserSide(input): void {
    this.CalendarService.userUserCalendars().subscribe((userCalendars) => {
      const { id } = userCalendars.data.items.find((userCalendarId) => userCalendarId.calendarId === input.calendarId)
      this.CalendarService.userDeleteUserCalendar({ userCalendarId: id }).subscribe((res) => {
        this.CalendarService.userDeleteCalendar(input).subscribe((calendar) => {
          this.getCalendarInServserSide()
          this.getEventInServserSide()
        })
      })
    })
  }

  // Api call calendar settings
  settingsUpdateCalendarInServserSide(input): void {
    this.CalendarService.userUpdateSetting(input).subscribe((res) => res)
    this.settingsCalendarInServserSide()
  }

  // Api call calendar settings
  settingsCalendarInServserSide(): void {
    this.settings$ = this.CalendarService.userSettings().pipe(map((res) => res.data.items))
  }

  // Api call calendar Weekdays
  getadminCalendarWeekdays(): void {
    this.CalendarService.userCalendarWeekdays().subscribe((res) => (this.weekdays = res.data.items))
  }
}
