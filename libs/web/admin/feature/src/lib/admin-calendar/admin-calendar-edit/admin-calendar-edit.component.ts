
import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { AdminUpdateCalendarInput, Role } from '@calendar/web/core/data-access'
import { WebUiFormField } from '@calendar/web/ui/form'
import { AdminCalendarEditStore } from './admin-calendar-edit.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
        <ng-container *ngIf="vm.item">
              <ui-page-header [title]="'Edit Calendar ' + vm.item?.name" linkPath=".." linkTitle="Back"></ui-page-header>
                <div class="dark:bg-gray-800 px-6 py-4 rounded-md">
                <ui-form  [form]="form"  [fields]="fields"  [model]="vm.item" (submitForm)="updateCalendar($event)">
                  <ui-button label="Submit" type="submit"></ui-button>
                </ui-form>
            </div>
        </ng-container>
    </ng-container>
  `,
  providers: [AdminCalendarEditStore],
})
export class AdminCalendarEditComponent {
        readonly vm$ = this.store.vm$
        readonly form = new FormGroup({})
        

  fields = [
    				WebUiFormField.fieldRow([
WebUiFormField.input('id', { label: 'Id' }, {className: 'w-1/2  px-1', hide: true}),
WebUiFormField.input('title', { label: 'Title' }, {className: 'w-1/2  px-1'})				])
,
				WebUiFormField.fieldRow([
WebUiFormField.input('color', { label: 'Color' }, {className: 'w-1/2  px-1'}),
WebUiFormField.input('visible', { label: 'Visible' }, {className: 'w-1/2  px-1'})				])
,
    
  ]
  constructor(private readonly store: AdminCalendarEditStore) {}

  updateCalendar(input: AdminUpdateCalendarInput) {
     const { title,color,visible } = input
     this.store.updateCalendarEffect({title,color,visible})
  }
}
