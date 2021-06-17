
import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { AdminUpdateUserCalendarInput, Role } from '@calendar/web/core/data-access'
import { WebUiFormField } from '@calendar/web/ui/form'
import { AdminUserCalendarEditStore } from './admin-user-calendar-edit.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
        <ng-container *ngIf="vm.item">
              <ui-page-header [title]="'Edit User Calendar ' + vm.item?.name" linkPath=".." linkTitle="Back"></ui-page-header>
                <div class="dark:bg-gray-800 px-6 py-4 rounded-md">
                <ui-form  [form]="form"  [fields]="fields"  [model]="vm.item" (submitForm)="updateUserCalendar($event)">
                  <ui-button label="Submit" type="submit"></ui-button>
                </ui-form>
            </div>
        </ng-container>
    </ng-container>
  `,
  providers: [AdminUserCalendarEditStore],
})
export class AdminUserCalendarEditComponent {
        readonly vm$ = this.store.vm$
        readonly form = new FormGroup({})
        readonly users$ = this.store.users$
readonly calendars$ = this.store.calendars$

  fields = [
    				WebUiFormField.fieldRow([
WebUiFormField.input('id', { label: 'Id' }, {className: 'w-1/2  px-1', hide: true}),
WebUiFormField.input('name', { label: 'Name' }, {className: 'w-full px-1'})				])
,
				WebUiFormField.fieldRow([
WebUiFormField.input('userId', { label: 'User Id' }, {className: 'w-1/2  px-1', hide: true}),
WebUiFormField.input('calendarId', { label: 'Calendar Id' }, {className: 'w-1/2  px-1', hide: true})				])
,
    
WebUiFormField.typeahead('userId', {
  placeholder: 'User', 
  items: this.users$, 
  onSearch: (searchTerm) => { 
    this.store.filterUsers(searchTerm.term);
    }
  })
,

WebUiFormField.typeahead('calendarId', {
  placeholder: 'Calendar', 
  items: this.calendars$, 
  onSearch: (searchTerm) => { 
    this.store.filterCalendars(searchTerm.term);
    }
  })

  ]
  constructor(private readonly store: AdminUserCalendarEditStore) {}

  updateUserCalendar(input: AdminUpdateUserCalendarInput) {
     const { name,userId,calendarId } = input
     this.store.updateUserCalendarEffect({name,userId,calendarId})
  }
}
