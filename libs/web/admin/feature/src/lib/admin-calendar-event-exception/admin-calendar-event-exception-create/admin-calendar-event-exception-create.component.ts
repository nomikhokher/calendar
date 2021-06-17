
import { Component } from '@angular/core'
import { WebUiFormField } from '@calendar/web/ui/form'
import { AdminCalendarEventExceptionCreateStore } from './admin-calendar-event-exception-create.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header title="Create Calendar Event Exception" linkPath=".." linkTitle="Back"></ui-page-header>
        <div class="dark:bg-gray-800 px-6 py-4 rounded-md">
                <div class="flex flex-row">
                  <div class="flex w-full"></div>
                  <div class="flex-none space-x-2">
                    <ui-button label="Submit" type="submit"></ui-button>
                  </div>
                </div>
                <ui-form [fields]="fields" [model]="{}" (submitForm)="createCalendarEventException($event)">
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
  providers: [AdminCalendarEventExceptionCreateStore],
})
export class AdminCalendarEventExceptionCreateComponent {
        readonly vm$ = this.store.vm$
        

  fields = [
    				WebUiFormField.fieldRow([
WebUiFormField.input('id', { label: 'Id' }, {className: 'w-1/2  px-1', hide: true}),
WebUiFormField.input('eventId', { label: 'Event Id' }, {className: 'w-1/2  px-1', hide: true})				])
,
				WebUiFormField.fieldRow([
WebUiFormField.input('exdate', { label: 'Exdate' }, {className: 'w-1/2  px-1'})				])
,
    
  ]
  constructor(private readonly store: AdminCalendarEventExceptionCreateStore) {}

  createCalendarEventException(input) {
     this.store.createCalendarEventExceptionEffect(input)
  }
}
