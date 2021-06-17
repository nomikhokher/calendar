
import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { AdminUpdateCalendarEventExceptionInput, Role } from '@calendar/web/core/data-access'
import { WebUiFormField } from '@calendar/web/ui/form'
import { AdminCalendarEventExceptionEditStore } from './admin-calendar-event-exception-edit.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
        <ng-container *ngIf="vm.item">
              <ui-page-header [title]="'Edit Calendar Event Exception ' + vm.item?.name" linkPath=".." linkTitle="Back"></ui-page-header>
                <div class="dark:bg-gray-800 px-6 py-4 rounded-md">
                <ui-form  [form]="form"  [fields]="fields"  [model]="vm.item" (submitForm)="updateCalendarEventException($event)">
                  <ui-button label="Submit" type="submit"></ui-button>
                </ui-form>
            </div>
        </ng-container>
    </ng-container>
  `,
  providers: [AdminCalendarEventExceptionEditStore],
})
export class AdminCalendarEventExceptionEditComponent {
        readonly vm$ = this.store.vm$
        readonly form = new FormGroup({})
        

  fields = [
    				WebUiFormField.fieldRow([
WebUiFormField.input('id', { label: 'Id' }, {className: 'w-1/2  px-1', hide: true}),
WebUiFormField.input('eventId', { label: 'Event Id' }, {className: 'w-1/2  px-1', hide: true})				])
,
				WebUiFormField.fieldRow([
WebUiFormField.input('exdate', { label: 'Exdate' }, {className: 'w-1/2  px-1'})				])
,
    
  ]
  constructor(private readonly store: AdminCalendarEventExceptionEditStore) {}

  updateCalendarEventException(input: AdminUpdateCalendarEventExceptionInput) {
     const { eventId,exdate } = input
     this.store.updateCalendarEventExceptionEffect({eventId,exdate})
  }
}
