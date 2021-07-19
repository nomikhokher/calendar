import { Component } from '@angular/core'
import { WebUiFormField } from '@calendar/web/ui/form'
import { AdminUserCalendarCreateStore } from './admin-user-calendar-create.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header title="Create User Calendar" linkPath=".." linkTitle="Back"></ui-page-header>
      <div class="dark:bg-gray-800 px-6 py-4 rounded-md">
        <ui-form [fields]="fields" [model]="{}" (submitForm)="createUserCalendar($event)">
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
  providers: [AdminUserCalendarCreateStore],
})
export class AdminUserCalendarCreateComponent {
  readonly vm$ = this.store.vm$
  readonly users$ = this.store.users$
  readonly calendars$ = this.store.calendars$

  fields = [
    WebUiFormField.fieldRow([
      WebUiFormField.input('id', { label: 'Id' }, { className: 'w-1/2  px-1', hide: true }),
      WebUiFormField.input('name', { label: 'Name' }, { className: 'w-full px-1' }),
    ]),
    WebUiFormField.fieldRow([
      WebUiFormField.input('userId', { label: 'User Id' }, { className: 'w-1/2  px-1', hide: true }),
      WebUiFormField.input('calendarId', { label: 'Calendar Id' }, { className: 'w-1/2  px-1', hide: true }),
    ]),
    WebUiFormField.typeahead('userId', {
      placeholder: 'User',
      items: this.users$,
      onSearch: (searchTerm) => {
        this.store.filterUsers(searchTerm.term)
      },
    }),
    WebUiFormField.typeahead('calendarId', {
      placeholder: 'Calendar',
      items: this.calendars$,
      onSearch: (searchTerm) => {
        this.store.filterCalendars(searchTerm.term)
      },
    }),
  ]
  constructor(private readonly store: AdminUserCalendarCreateStore) {}

  ngOnInit(): void {
    this.store.filterCalendars('')
    this.store.filterUsers('')
  }

  createUserCalendar(input) {
    this.store.createUserCalendarEffect(input)
  }
}
