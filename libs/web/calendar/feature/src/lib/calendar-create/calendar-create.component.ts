import { Component } from '@angular/core'
import { WebUiFormField } from '@calendar/web/ui/form'
import { CalendarCreateStore } from './calendar-create.store'
@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="container px-16 mt-10 mx-auto">
        <ui-page-header title="Create Calendar" linkPath=".." linkTitle="Back"></ui-page-header>
        <ui-form [fields]="fields" [model]="{}" (submitForm)="createCalendar($event)">
          <ui-button label="Submit" type="submit"></ui-button>
        </ui-form>
      </div>
    </ng-container>
  `,
  providers: [CalendarCreateStore],
})
export class CalendarCreateComponent {
  readonly vm$ = this.store.vm$
  fields = [
    WebUiFormField.fieldRow([
      WebUiFormField.input('id', { label: 'Id' }, { className: 'w-1/2  px-1', hide: true }),
      WebUiFormField.input('title', { label: 'Title' }, { className: 'w-1/2  px-1' }),
      WebUiFormField.input('color', { label: 'Color' }, { className: 'w-1/2  px-1' }),
    ]),
    WebUiFormField.fieldRow([WebUiFormField.checkbox('visible', { label: 'Visible' }, { className: 'w-1/2  px-1' })]),
  ]
  constructor(private readonly store: CalendarCreateStore) {}
  createCalendar(input) {
    this.store.createCalendarEffect(input)
  }
}
