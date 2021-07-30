import { Component } from '@angular/core'
import { WebUiFormField } from '@calendar/web/ui/form'
import { CalendarEventCreateStore } from './calendar-event-create.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="container px-16 mt-10 mx-auto">
        <ui-page-header title="Create Calendar Event" linkPath=".." linkTitle="Back"></ui-page-header>
        <ui-form [fields]="fields" [model]="{}" (submitForm)="createCalendarEvent($event)">
          <ui-button label="Submit" type="submit"></ui-button>
        </ui-form>
      </div>
    </ng-container>
  `,
  providers: [CalendarEventCreateStore],
})
export class CalendarEventCreateComponent {
  readonly vm$ = this.store.vm$
  readonly calendars$ = this.store.calendars$

  fields = [
    WebUiFormField.fieldRow([
      WebUiFormField.input('id', { label: 'Id' }, { className: 'w-1/2  px-1', hide: true }),
      WebUiFormField.input('calendarId', { label: 'Calendar Id' }, { className: 'w-1/2  px-1', hide: true }),
    ]),
    WebUiFormField.fieldRow([
      WebUiFormField.input(
        'recurringEventId',
        { label: 'Recurring Event Id' },
        { className: 'w-1/2  px-1', hide: true },
      ),
    ]),
    WebUiFormField.fieldRow([
      WebUiFormField.input('title', { label: 'Title' }, { className: 'w-1/2  px-1' }),
      WebUiFormField.input('description', { label: 'Description' }, { className: 'w-1/2  px-1' }),
    ]),
    WebUiFormField.fieldRow([
      WebUiFormField.date('start', { label: 'Start' }, { className: 'w-1/2  px-1' }),
      WebUiFormField.date('end', { label: 'End' }, { className: 'w-1/2  px-1' }),
    ]),
    WebUiFormField.fieldRow([
      WebUiFormField.input('recurrence', { label: 'Recurrence' }, { className: 'w-1/2  px-1' }),
    ]),
    WebUiFormField.typeahead('calendarId', {
      label: 'Search Calendar',
      className: 'w-1/2  px-1',
      placeholder: 'Calendar',
      items: this.calendars$,
      onSearch: (searchTerm) => {
        this.store.filterCalendars(searchTerm.term)
      },
    }),

    WebUiFormField.fieldRow([
      WebUiFormField.checkbox('isFirstInstance', { label: 'Is First Instance' }, { className: 'w-1/2  px-1' }),
      WebUiFormField.checkbox('allDay', { label: 'All Day' }, { className: 'w-1/2  px-1' }),
    ]),
  ]
  constructor(private readonly store: CalendarEventCreateStore) {}

  ngOnInit(): void {
    this.store.filterCalendars('')
  }

  createCalendarEvent(input) {
    this.store.createCalendarEventEffect(input)
  }
}
