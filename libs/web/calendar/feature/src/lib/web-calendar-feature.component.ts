import { Component } from '@angular/core'
import { WebCoreDataAccessService } from '@calendar/web/core/data-access'
import { Subject, timer } from 'rxjs'
import { map, takeUntil } from 'rxjs/operators'

@Component({
  template: `
    <ui-page headerTitle="Calendars">
      <div class="dark:bg-gray-800 px-6 py-4 mb-3 md:mb-6">
        <ng-container *ngIf="settings$ | async as fetchSettings; else elseBlok">
          <!-- <ng-container *ngIf="userProfile$ | async as fetchEvent; else elseBlok"> -->
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
          <!-- </ng-container> -->
        </ng-container>
      </div>

      <ng-template #elseBlok></ng-template>
    </ui-page>
  `,
})
export class WebCalendarFeatureComponent {
  fetchEvent: any
  getcClendars: any[] = []
  settings$: any
  calenders: any
  weekdays: any
  EventSourceObject$ = []

  private subject = new Subject<any>()
  event_source_object: any[] = []

  constructor(private readonly CalendarService: WebCoreDataAccessService) {}

  ngOnInit(): void {
    this.getEventInServserSide()
    this.getCalendarInServserSide()
    this.settingsCalendarInServserSide()
    this.getadminCalendarWeekdays()
  }

  // Api call get event in server side
  getEventInServserSide() {
    this.CalendarService.accountProfile({}, { fetchPolicy: 'no-cache' }).subscribe(() => {
      this.CalendarService.userUserCalendars().subscribe((userCalendars) => {
        userCalendars.data.items.forEach((calendarId) => {
          this.CalendarService.userCalendar({ calendarId: calendarId.calendarId }).subscribe((calendar) => {
            this.CalendarService.userCalendarEvents({ input: { calendarId: calendar.data.item.id } })
              .pipe(
                map((events) => {
                  let events_filtered = events.data.items
                    .filter((event) => event.calendarId === calendar.data.item.id)
                    .map((res) => {
                      if (res.recurrence === null) {
                        return res
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
                  this.event_source_object.push(EventSourceObject)
                  return this.event_source_object
                }),
              )
              .subscribe((res) => {
                timer(1000, 5000)
                  .pipe(takeUntil(this.subject))
                  .subscribe((data) => {
                    this.fetchEvent = res
                  })
              })
          })
        })
      })
    })

    // this.CalendarService.accountProfile({}, { fetchPolicy: 'no-cache' })
    //   .pipe(
    //     map((user) => {
    //       return this.CalendarService.userUserCalendars()
    //         .pipe(
    //           map((userCalendars) => {
    //             let event_source_object = []
    //              userCalendars.data.items.forEach((calendarId) => {
    //               console.log(calendarId)
    //                 this.CalendarService.userCalendar({ calendarId: calendarId.calendarId })
    //                 .pipe(
    //                    map((calendar) => {
    //                       return this.CalendarService.userCalendarEvents({ input: { calendarId: calendar.data.item.id } })
    //                       .pipe(
    //                         map((events) => {
    //                           let events_filtered = events.data.items
    //                             .filter((event) => event.calendarId === calendar.data.item.id)
    //                             .map((res) => {
    //                               if (res.recurrence === null) {
    //                                 return res
    //                               }

    //                               return { ...res, rrule: res.recurrence }
    //                             })

    //                           let EventSourceObject = {
    //                             id: calendar.data.item.id,
    //                             title: calendar.data.item.title,
    //                             events: events_filtered,
    //                             color: calendar.data.item.color,
    //                             display: calendar.data.item.visible ? 'block' : 'none',
    //                           }
    //                           this.event_source_object.push(EventSourceObject)
    //                         this.subject$.next(this.event_source_object)
    //                           return this.event_source_object
    //                         }),
    //                       )
    //                       .subscribe((res) =>{
    //                       console.log(res, 'event')
    //                       this.subject$.next(res)
    //                     })
    //                   }),
    //                 )
    //                 .subscribe((res) => {
    //                   res
    //                   console.log(res, 'calendar')
    //                 })
    //             })
    //           }),
    //         )
    //         .subscribe((res) => {
    //           res
    //           console.log(res, 'usercalendar')
    //         })
    //     }),
    //   )
    //   .subscribe((res) => {
    //     res
    //     console.log(res, 'user')
    //   })

    // this.CalendarService.userCalendars()
    //   .pipe(
    //     map((calenders) => {
    //       return this.CalendarService.adminCalendarEvents()
    //         .pipe(
    //           map((events) => {
    //             let event_source_object = []
    //             calenders.data.items.forEach((calender) => {
    //               let events_filtered = events.data.items
    //                 .filter((event) => event.calendarId === calender.id)
    //                 .map((res) => {
    //                   if (res.recurrence === '') {
    //                     return res
    //                   }

    //                   return { ...res, rrule: res.recurrence }
    //                 })
    //               let EventSourceObject = {
    //                 id: calender.id,
    //                 title: calender.title,
    //                 events: events_filtered,
    //                 color: calender.color,
    //                 display: calender.visible ? 'block' : 'none',
    //               }
    //               event_source_object.push(EventSourceObject)
    //             })
    //             return event_source_object
    //           }),
    //         )
    //         .subscribe((res) => {
    //           console.log(res)
    //           this.fetchEvent = res
    //         })
    //     }),
    //   )
    //   .subscribe((res) => res)
  }

  // Api call add event in server side
  addEventInServserSide(input) {
    this.CalendarService.userCreateCalendarEvent(input).subscribe((res) => res)
    this.getEventInServserSide()
  }

  // Api call delete event in server side
  removeEventInServserSide(input) {
    this.CalendarService.userDeleteCalendarEvent({ calendarEventId: input }).subscribe((res) => res)
    this.getEventInServserSide()
  }

  // Api call update event in server side
  updateEventInServserSide(input) {
    this.CalendarService.userUpdateCalendarEvent(input).subscribe((res) => res)
    this.getEventInServserSide()
  }

  // Api call get calendar in server side
  getCalendarInServserSide() {
    //this.CalendarService.adminCalendars().subscribe((res) => (this.getcClendars = res.data.items))

    this.CalendarService.accountProfile({}, { fetchPolicy: 'no-cache' }).subscribe((user) => {
      this.CalendarService.userUserCalendars().subscribe((userCalendars) => {
        userCalendars.data.items.forEach((calendarId) => {
          this.CalendarService.userCalendar({ calendarId: calendarId.calendarId }).subscribe((calendar) => {
            this.getcClendars.push(calendar.data.item)
          })
        })
      })
    })
  }

  // Api call add calendar in server side
  addCalendarInServserSide(input) {
    this.CalendarService.userCreateCalendar(input).subscribe((res) => res)
    this.getCalendarInServserSide()
    this.getEventInServserSide()
  }
  // Api call update calendar in server side
  updateCalendarInServserSide(input) {
    this.CalendarService.userUpdateCalendar(input).subscribe((res) => res)
    this.getCalendarInServserSide()
    this.getEventInServserSide()
  }

  // Api call delete calendar in server side
  deleteCalendarInServserSide(input) {
    this.CalendarService.userDeleteCalendar(input).subscribe((res) => res)
    this.getCalendarInServserSide()
  }

  // Api call calendar settings
  settingsUpdateCalendarInServserSide(input) {
    this.CalendarService.userUpdateSetting(input).subscribe((res) => console.log(res))
    this.settingsCalendarInServserSide()
  }

  // Api call calendar settings
  settingsCalendarInServserSide() {
    this.settings$ = this.CalendarService.userSettings().pipe(map((res) => res.data.items))
  }

  // Api call calendar Weekdays
  getadminCalendarWeekdays() {
    this.CalendarService.userCalendarWeekdays().subscribe((res) => (this.weekdays = res.data.items))
  }
}
