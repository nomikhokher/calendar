import { Component } from '@angular/core'
import { WebCoreDataAccessService } from '@calendar/web/core/data-access'
import { map } from 'rxjs/operators'

@Component({
  template: `
    <ui-page headerTitle="Calendars">
      <div class="dark:bg-gray-800 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">
        <ng-container *ngIf="getEvents$ | async as fetchEvent">
          <ng-container *ngIf="getcClendars$ | async as fetchCalendar">
            <ui-calendar
              [fetchEvent]="fetchEvent"
              [calendars]="fetchCalendar"
              (addEventInServserSide)="addEventInServserSide($event)"
              (removeEventInServserSide)="removeEventInServserSide($event)"
              (updateEventInServserSide)="updateEventInServserSide($event)"
              (addCalendarInServserSide)="addCalendarInServserSide($event)"
              (updateCalendarInServserSide)="updateCalendarInServserSide($event)"
              (deleteCalendarInServserSide)="deleteCalendarInServserSide($event)"
            ></ui-calendar>
          </ng-container>
        </ng-container>
      </div>
    </ui-page>
  `,
})
export class WebCalendarFeatureComponent {
  getEvents$: any
  getcClendars$: any

  constructor(private readonly CalendarService: WebCoreDataAccessService) {}

  ngOnInit() {
    this.getEventInServserSide()
    this.getCalendarInServserSide()
  }

  // Api call get event in server side
  getEventInServserSide() {
    this.getEvents$ = this.CalendarService.adminCalendarEvents().pipe(map((res) => res.data.items))
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
    this.getcClendars$ = this.CalendarService.adminCalendars().pipe(map((res) => res.data.items))
  }

  // Api call add calendar in server side
  addCalendarInServserSide(input) {
    this.CalendarService.adminCreateCalendar(input).subscribe((res) => res)
    this.getCalendarInServserSide()
  }
  // Api call add calendar in server side
  updateCalendarInServserSide(input) {
    this.CalendarService.adminUpdateCalendar(input).subscribe((res) => res)
    this.getCalendarInServserSide()
  }

  // Api call add calendar in server side
  deleteCalendarInServserSide(input) {
    this.CalendarService.adminDeleteCalendar(input).subscribe((res) => res)
    this.getCalendarInServserSide()
  }
}
