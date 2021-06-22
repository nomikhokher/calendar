import { Component } from '@angular/core'
import { WebCoreDataAccessService } from '@calendar/web/core/data-access'
import { map } from 'rxjs/operators'

@Component({
  template: `
    <ui-page headerTitle="Calendars">
      <div class="dark:bg-gray-800 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">
        <ng-container *ngIf="getEvents$ | async as fetchEvent">
          <ui-calendar [fetchEvent]="fetchEvent" (addEventInServserSide)="addEventInServserSide($event)"></ui-calendar>
        </ng-container>
      </div>
    </ui-page>
  `,
})
export class WebCalendarFeatureComponent {
  getEvents$ = this.CalendarService.adminCalendarEvents().pipe(map((res) => res.data.items))

  constructor(private readonly CalendarService: WebCoreDataAccessService) {}

  addEventInServserSide(input) {
    this.CalendarService.adminCreateCalendarEvent(input).subscribe((res) => console.log(res))
  }
}
