import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { AdminUpdateCalendarInput, Role } from '@calendar/web/core/data-access'
import { WebUiFormField } from '@calendar/web/ui/form'
import { CalendarEditStore } from './calendar-edit.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ng-container *ngIf="vm.item">
        <div class="container px-16 mt-10 mx-auto">
          <ui-page-header [title]="'Edit Calendar ' + vm.item?.title" linkPath=".." linkTitle="Back"></ui-page-header>
          <ui-form [form]="form" [fields]="fields" [model]="vm.item" (submitForm)="updateCalendar($event)">
            <ui-button label="Save" type="submit"></ui-button>
          </ui-form>
        </div>
      </ng-container>
    </ng-container>
  `,
  providers: [CalendarEditStore],
})
export class CalendarEditComponent {
  readonly vm$ = this.store.vm$
  readonly form = new FormGroup({})

  fields = [
    WebUiFormField.fieldRow([
      WebUiFormField.input('id', { label: 'Id' }, { className: 'w-1/2  px-1', hide: true }),
      WebUiFormField.input('title', { label: 'Title' }, { className: 'w-1/2  px-1' }),
      WebUiFormField.input('color', { label: 'Color' }, { className: 'w-1/2  px-1' }),
    ]),
    WebUiFormField.fieldRow([
      WebUiFormField.input('visible', { label: 'Visible' }, { className: 'w-1/2  px-1', type: 'checkbox' }),
    ]),
  ]
  constructor(private readonly store: CalendarEditStore) {}

  updateCalendar(input: AdminUpdateCalendarInput) {
    const { title, color, visible } = input
    this.store.updateCalendarEffect({ title, color, visible })
  }
}
