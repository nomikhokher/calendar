import { Component } from '@angular/core'
import { WebUiFormField } from '@calendar/web/ui/form'
import { AdminCalendarEventCreateStore } from './admin-calendar-event-create.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header title="Create Calendar Event" linkPath=".." linkTitle="Back"></ui-page-header>
      <div class="dark:bg-gray-800 px-6 py-4 rounded-md">
        <div class="flex flex-row">
          <div class="flex w-full"></div>
          <div class="flex-none space-x-2">
            <ui-button label="Submit" type="submit"></ui-button>
          </div>
        </div>
        <ui-form [fields]="fields" [model]="{}" (submitForm)="createCalendarEvent($event)">
          <div class="flex flex-row">
            <div class="flex w-full"></div>
            <div class="flex-none space-x-2">
              <ui-button label="Submit" type="submit"></ui-button>
            </div>
          </div>
        </ui-form>
      </div>
    </ng-container>
  `,
  providers: [AdminCalendarEventCreateStore],
})
export class AdminCalendarEventCreateComponent {
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
      WebUiFormField.input('isFirstInstance', { label: 'Is First Instance' }, { className: 'w-1/2  px-1' }),
    ]),
    WebUiFormField.fieldRow([
      WebUiFormField.input('title', { label: 'Title' }, { className: 'w-1/2  px-1' }),
      WebUiFormField.input('description', { label: 'Description' }, { className: 'w-1/2  px-1' }),
    ]),
    WebUiFormField.fieldRow([
      WebUiFormField.input('start', { label: 'Start' }, { className: 'w-1/2  px-1' }),
      WebUiFormField.input('end', { label: 'End' }, { className: 'w-1/2  px-1' }),
    ]),
    WebUiFormField.fieldRow([
      WebUiFormField.input('allDay', { label: 'All Day' }, { className: 'w-1/2  px-1' }),
      WebUiFormField.input('recurrence', { label: 'Recurrence' }, { className: 'w-1/2  px-1' }),
    ]),
    WebUiFormField.typeahead('calendarId', {
      placeholder: 'Calendar',
      items: this.calendars$,
      onSearch: (searchTerm) => {
        this.store.filterCalendars(searchTerm.term)
      },
    }),
  ]
  constructor(private readonly store: AdminCalendarEventCreateStore) {}

  createCalendarEvent(input) {
    this.store.createCalendarEventEffect(input)
  }
}
