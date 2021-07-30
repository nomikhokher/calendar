import { Component } from '@angular/core'
import { WebUiFormField } from '@calendar/web/ui/form'
import { UserCalendarCreateStore } from './user-calendar-create.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="container px-16 mt-10 mx-auto">
        <ui-page-header title="Create User Calendar" linkPath=".." linkTitle="Back"></ui-page-header>
        <ui-form [fields]="fields" [model]="{}" (submitForm)="createUserCalendar($event)">
          <ui-button label="Submit" type="submit"></ui-button>
        </ui-form>
      </div>
    </ng-container>
  `,
  providers: [UserCalendarCreateStore],
})
export class UserCalendarCreateComponent {
  readonly vm$ = this.store.vm$
  readonly users$ = this.store.users$
  readonly calendars$ = this.store.calendars$

  fields = [
    WebUiFormField.fieldRow([
      WebUiFormField.input(
        'id',
        { label: 'Id' },
        {
          className:
            'focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300',
          hide: true,
        },
      ),
      WebUiFormField.input(
        'name',
        { label: 'Name *' },
        {
          className:
            'focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300',
        },
      ),
    ]),

    WebUiFormField.fieldRow([
      WebUiFormField.input(
        'userId',
        { label: 'User Id' },
        {
          className:
            'focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300',
          hide: true,
        },
      ),
      WebUiFormField.input(
        'calendarId',
        { label: 'Calendar Id' },
        {
          className:
            'focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300',
          hide: true,
        },
      ),
    ]),
    WebUiFormField.typeahead('userId', {
      placeholder: 'User',
      label: 'User *',
      items: this.users$,
      onSearch: (searchTerm) => {
        this.store.filterUsers(searchTerm.term)
      },
    }),
    WebUiFormField.typeahead('calendarId', {
      label: 'Calendar *',

      placeholder: 'Calendar',
      items: this.calendars$,
      onSearch: (searchTerm) => {
        this.store.filterCalendars(searchTerm.term)
      },
    }),
  ]
  constructor(private readonly store: UserCalendarCreateStore) {}

  ngOnInit(): void {
    this.store.filterCalendars('')
    this.store.filterUsers('')
  }

  createUserCalendar(input) {
    console.log(input)

    this.store.createUserCalendarEffect(input)
  }
}
