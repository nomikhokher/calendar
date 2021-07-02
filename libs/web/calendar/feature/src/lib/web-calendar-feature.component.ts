import { Component } from '@angular/core'
import { WebCoreDataAccessService } from '@calendar/web/core/data-access'
import { map } from 'rxjs/operators'

@Component({
  template: `
    <ui-page headerTitle="Calendars">
      <div class="dark:bg-gray-800 px-6 py-4 mb-3 md:mb-6">
        <ng-container *ngIf="settings$ | async as fetchSettings; else elseBlok">
          <ui-calendar
            [fetchEvent]="fetchEvent"
            [calendars]="getcClendars"
            [fetchSettings]="fetchSettings"
            [weekdays]="weekdays"
            (addEventInServserSide)="addEventInServserSide($event)"
            (removeEventInServserSide)="removeEventInServserSide($event)"
            (updateEventInServserSide)="updateEventInServserSide($event)"
            (addCalendarInServserSide)="addCalendarInServserSide($event)"
            (updateCalendarInServserSide)="updateCalendarInServserSide($event)"
            (deleteCalendarInServserSide)="deleteCalendarInServserSide($event)"
            (settingsUpdateCalendarInServserSide)="settingsUpdateCalendarInServserSide($event)"
          ></ui-calendar>
        </ng-container>
      </div>

      <ng-template #elseBlok></ng-template>
    </ui-page>
  `,
})
export class WebCalendarFeatureComponent {
  fetchEvent: any
  getcClendars: any
  settings$: any
  calenders: any
  weekdays: any
  EventSourceObject$ = []

  constructor(private readonly CalendarService: WebCoreDataAccessService) {}

  ngOnInit() {
    this.getEventInServserSide()
    this.getCalendarInServserSide()
    this.settingsCalendarInServserSide()
    this.getadminCalendarWeekdays()
  }

  // Api call get event in server side
  getEventInServserSide() {
    this.CalendarService.adminCalendars()
      .pipe(
        map((calenders) => {
          return this.CalendarService.adminCalendarEvents()
            .pipe(
              map((events) => {
                let event_source_object = []
                calenders.data.items.forEach((calender) => {
                  let events_filtered = events.data.items
                    .filter((event) => event.calendarId === calender.id)
                    .map((res) => {
                      if (res.recurrence === '') {
                        return res
                      }

                      return { ...res, rrule: res.recurrence }
                    })
                  let EventSourceObject = {
                    id: calender.id,
                    title: calender.title,
                    events: events_filtered,
                    color: calender.color,
                    display: calender.visible ? 'block' : 'none',
                  }
                  event_source_object.push(EventSourceObject)
                })
                return event_source_object
              }),
            )
            .subscribe((res) => {
              this.fetchEvent = res
            })
        }),
      )
      .subscribe((res) => res)
  }

  // Api call add event in server side
  addEventInServserSide(input) {
    this.CalendarService.adminCreateCalendarEvent(input).subscribe((res) => res)
    this.getEventInServserSide()
  }

  // Api call delete event in server side
  removeEventInServserSide(input) {
    this.CalendarService.adminDeleteCalendarEvent({ calendarEventId: input }).subscribe((res) => res)
    this.getEventInServserSide()
  }

  // Api call update event in server side
  updateEventInServserSide(input) {
    this.CalendarService.adminUpdateCalendarEvent(input).subscribe((res) => res)
    this.getEventInServserSide()
  }

  // Api call get calendar in server side
  getCalendarInServserSide() {
    this.CalendarService.adminCalendars().subscribe((res) => (this.getcClendars = res.data.items))
  }

  // Api call add calendar in server side
  addCalendarInServserSide(input) {
    this.CalendarService.adminCreateCalendar(input).subscribe((res) => res)
    this.getCalendarInServserSide()
    this.getEventInServserSide()
  }
  // Api call update calendar in server side
  updateCalendarInServserSide(input) {
    this.CalendarService.adminUpdateCalendar(input).subscribe((res) => res)
    this.getCalendarInServserSide()
    this.getEventInServserSide()

    console.log('server')
  }

  // Api call delete calendar in server side
  deleteCalendarInServserSide(input) {
    this.CalendarService.adminDeleteCalendar(input).subscribe((res) => res)
    this.getCalendarInServserSide()
  }

  // Api call calendar settings
  settingsUpdateCalendarInServserSide(input) {
    this.CalendarService.adminUpdateSetting(input).subscribe((res) => console.log(res))
    this.settingsCalendarInServserSide()
  }

  // Api call calendar settings
  settingsCalendarInServserSide() {
    this.settings$ = this.CalendarService.adminSettings().pipe(map((res) => res.data.items))
  }

  // Api call calendar Weekdays
  getadminCalendarWeekdays() {
    this.CalendarService.adminCalendarWeekdays().subscribe((res) => (this.weekdays = res.data.items))
  }
}
