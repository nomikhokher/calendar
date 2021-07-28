import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { AdminUpdateCalendarEventInput, Role } from '@calendar/web/core/data-access'
import { WebUiFormField } from '@calendar/web/ui/form'
import { AdminCalendarEventEditStore } from './admin-calendar-event-edit.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ng-container *ngIf="vm.item">
        <ui-page-header
          [title]="'Edit Calendar Event ' + vm.item?.title"
          linkPath=".."
          linkTitle="Back"
        ></ui-page-header>
        <div class="dark:bg-gray-800 px-6 py-4 rounded-md">
          <ui-form [form]="form" [fields]="fields" [model]="vm.item" (submitForm)="updateCalendarEvent($event)">
            <ui-button label="Save" type="submit"></ui-button>
          </ui-form>
        </div>
      </ng-container>
    </ng-container>
  `,
  providers: [AdminCalendarEventEditStore],
})
export class AdminCalendarEventEditComponent {
  readonly vm$ = this.store.vm$
  readonly form = new FormGroup({})
  readonly calendars$ = this.store.calendars$
  readonly item$ = this.store.item$
  item: any = {}

  fields = [
    WebUiFormField.fieldRow([
      WebUiFormField.input('id', { label: 'Id' }, { className: 'w-1/2  px-1', hide: true }),
      WebUiFormField.input('calendarId', { label: 'Calendar Id' }, { className: 'w-1/2  px-1', hide: true }),
      WebUiFormField.input(
        'recurringEventId',
        { label: 'Recurring Event Id' },
        { className: 'w-1/2  px-1', hide: true },
      ),

      WebUiFormField.checkbox('isFirstInstance', { label: 'Is First Instance' }, { className: 'w-1/2  px-1' }),
    ]),
    WebUiFormField.fieldRow([WebUiFormField.checkbox('allDay', { label: 'All Day' }, { className: 'w-1/2  px-1' })]),
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
      placeholder: 'Calendar',
      items: this.calendars$,
      onSearch: (searchTerm) => {
        this.store.filterCalendars(searchTerm.term)
      },
    }),
  ]

  constructor(private readonly store: AdminCalendarEventEditStore) {}

  ngOnInit(): void {
    this.store.filterCalendars('')
  }

  updateCalendarEvent(input: AdminUpdateCalendarEventInput) {
    const { calendarId, recurringEventId, isFirstInstance, title, description, start, end, allDay, recurrence } = input
    this.store.updateCalendarEventEffect({
      calendarId,
      recurringEventId,
      isFirstInstance,
      title,
      description,
      start,
      end,
      allDay,
      recurrence,
    })
  }
}
