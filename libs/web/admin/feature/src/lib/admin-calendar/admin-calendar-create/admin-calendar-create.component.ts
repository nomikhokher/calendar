import { Component } from '@angular/core'
import { WebUiFormField } from '@calendar/web/ui/form'
import { AdminCalendarCreateStore } from './admin-calendar-create.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header title="Create Calendar" linkPath=".." linkTitle="Back"></ui-page-header>
      <div class="dark:bg-gray-800 px-6 py-4 rounded-md">
        <div class="flex flex-row">
          <div class="flex w-full"></div>
          <div class="flex-none space-x-2"></div>
        </div>
        <ui-form [fields]="fields" [model]="{}" (submitForm)="createCalendar($event)">
          <div class="flex flex-row">
            <div class="flex w-full"></div>
            <div class="flex-none space-x-2 m-8">
              <ui-button label="Submit" type="submit"></ui-button>
            </div>
          </div>
        </ui-form>
      </div>
    </ng-container>
  `,
  providers: [AdminCalendarCreateStore],
})
export class AdminCalendarCreateComponent {
  readonly vm$ = this.store.vm$

  fields = [
    WebUiFormField.fieldRow([
      WebUiFormField.input('id', { label: 'Id' }, { className: 'w-1/2  px-1', hide: true }),
      WebUiFormField.input('title', { label: 'Title' }, { className: 'w-1/2  px-1' }),
      WebUiFormField.input('color', { label: 'Color' }, { className: 'w-1/2  px-1' }),
    ]),
    WebUiFormField.fieldRow([
      WebUiFormField.input('id', { label: 'Id' }, { className: 'w-1/2  px-1', hide: true }),
      WebUiFormField.input('calendarId', { label: 'Calendar Id' }, { className: 'w-1/2  px-1', hide: true }),
    ]),
    WebUiFormField.fieldRow([
      WebUiFormField.input('visible', { label: 'Visible' }, { className: 'w-1/2  px-1' }),
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
      items: [],
      onSearch: (searchTerm) => {
        return []
      },
    }),
  ]
  constructor(private readonly store: AdminCalendarCreateStore) {}

  createCalendar(input) {
    this.store.createCalendarEffect(input)
  }
}
