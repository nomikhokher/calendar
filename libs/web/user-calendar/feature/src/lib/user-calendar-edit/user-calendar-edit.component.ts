import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { AdminUpdateUserCalendarInput, Role } from '@calendar/web/core/data-access'
import { WebUiFormField } from '@calendar/web/ui/form'
import { UserCalendarEditStore } from './user-calendar-edit.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ng-container *ngIf="vm.item">
        <div class="container px-16 mt-10 mx-auto">
          <ui-page-header
            [title]="'Edit User Calendar ' + vm.item?.name"
            linkPath=".."
            linkTitle="Back"
          ></ui-page-header>
          <ui-form [form]="form" [fields]="fields" [model]="vm.item" (submitForm)="updateUserCalendar($event)">
            <ui-button label="Save" type="submit"></ui-button>
          </ui-form>
        </div>
      </ng-container>
    </ng-container>
  `,
  providers: [UserCalendarEditStore],
})
export class UserCalendarEditComponent {
  readonly vm$ = this.store.vm$
  readonly form = new FormGroup({})
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
        { label: 'Name' },
        {
          className:
            'focus:ring-indigo-500 text-black focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300',
        },
      ),
    ]),
    WebUiFormField.fieldRow([
      WebUiFormField.input(
        'userId',
        { label: 'User Id' },
        {
          className:
            'focus:ring-indigo-500 text-black focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300',
          hide: true,
        },
      ),
      WebUiFormField.input(
        'calendarId',
        { label: 'Calendar Id' },
        {
          className:
            'focus:ring-indigo-500 text-black focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300',
          hide: true,
        },
      ),
    ]),
    WebUiFormField.typeahead('userId', {
      label: 'User',
      placeholder: 'User',
      items: this.users$,
      onSearch: (searchTerm) => {
        this.store.filterUsers(searchTerm.term)
      },
    }),
    WebUiFormField.typeahead('calendarId', {
      label: 'Calendar',
      placeholder: 'Calendar',
      items: this.calendars$,
      onSearch: (searchTerm) => {
        this.store.filterCalendars(searchTerm.term)
      },
    }),
  ]
  constructor(private readonly store: UserCalendarEditStore) {}

  ngOnInit(): void {
    this.store.filterCalendars('')
    this.store.filterUsers('')
  }

  updateUserCalendar(input: AdminUpdateUserCalendarInput) {
    const { name, userId, calendarId } = input
    this.store.updateUserCalendarEffect({ name, userId, calendarId })
  }
}
