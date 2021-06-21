import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { AdminUpdateCalendarWeekdayInput, Role } from '@calendar/web/core/data-access'
import { WebUiFormField } from '@calendar/web/ui/form'
import { AdminCalendarWeekdayEditStore } from './admin-calendar-weekday-edit.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ng-container *ngIf="vm.item">
        <ui-page-header
          [title]="'Edit Calendar Weekday ' + vm.item?.name"
          linkPath=".."
          linkTitle="Back"
        ></ui-page-header>
        <div class="dark:bg-gray-800 px-6 py-4 rounded-md">
          <ui-form [form]="form" [fields]="fields" [model]="vm.item" (submitForm)="updateCalendarWeekday($event)">
            <ui-button label="Submit" type="submit"></ui-button>
          </ui-form>
        </div>
      </ng-container>
    </ng-container>
  `,
  providers: [AdminCalendarWeekdayEditStore],
})
export class AdminCalendarWeekdayEditComponent {
  readonly vm$ = this.store.vm$
  readonly form = new FormGroup({})

  fields = [
    WebUiFormField.fieldRow([
      WebUiFormField.input('abbr', { label: 'Abbr' }, { className: 'w-1/2  px-1' }),
      WebUiFormField.input('label', { label: 'Label' }, { className: 'w-1/2  px-1' }),
    ]),
    WebUiFormField.fieldRow([WebUiFormField.input('value', { label: 'Value' }, { className: 'w-1/2  px-1' })]),
  ]
  constructor(private readonly store: AdminCalendarWeekdayEditStore) {}

  updateCalendarWeekday(input: AdminUpdateCalendarWeekdayInput) {
    const { abbr, label, value } = input
    this.store.updateCalendarWeekdayEffect({ abbr, label, value })
  }
}
