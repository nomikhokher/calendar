import { Component } from '@angular/core'
import { WebUiFormField } from '@calendar/web/ui/form'
import { AdminCalendarWeekdayCreateStore } from './admin-calendar-weekday-create.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header title="Create Calendar Weekday" linkPath=".." linkTitle="Back"></ui-page-header>
      <div class="dark:bg-gray-800 px-6 py-4 rounded-md">
        <div class="flex flex-row">
          <div class="flex w-full"></div>
          <div class="flex-none space-x-2">
            <ui-button label="Submit" type="submit"></ui-button>
          </div>
        </div>
        <ui-form [fields]="fields" [model]="{}" (submitForm)="createCalendarWeekday($event)">
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
  providers: [AdminCalendarWeekdayCreateStore],
})
export class AdminCalendarWeekdayCreateComponent {
  readonly vm$ = this.store.vm$

  fields = [
    WebUiFormField.fieldRow([
      WebUiFormField.input('abbr', { label: 'Abbr' }, { className: 'w-1/2  px-1' }),
      WebUiFormField.input('label', { label: 'Label' }, { className: 'w-1/2  px-1' }),
    ]),
    WebUiFormField.fieldRow([WebUiFormField.input('value', { label: 'Value' }, { className: 'w-1/2  px-1' })]),
  ]
  constructor(private readonly store: AdminCalendarWeekdayCreateStore) {}

  createCalendarWeekday(input) {
    this.store.createCalendarWeekdayEffect(input)
  }
}
