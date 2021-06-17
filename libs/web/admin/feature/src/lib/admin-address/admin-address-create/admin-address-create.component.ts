import { Component } from '@angular/core'
import { WebUiFormField } from '@calendar/web/ui/form'
import { AdminAddressCreateStore } from './admin-address-create.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header title="Create Address" linkPath=".." linkTitle="Back"></ui-page-header>
      <div class="dark:bg-gray-800 px-6 py-4 rounded-md">
        <div class="flex flex-row">
          <div class="flex w-full"></div>
          <div class="flex-none space-x-2">
            <ui-button label="Submit" type="submit"></ui-button>
          </div>
        </div>
        <ui-form [fields]="fields" [model]="{}" (submitForm)="createAddress($event)">
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
  providers: [AdminAddressCreateStore],
})
export class AdminAddressCreateComponent {
  readonly vm$ = this.store.vm$

  fields = [
    WebUiFormField.fieldRow([
      WebUiFormField.input('id', { label: 'Id' }, { className: 'w-1/2  px-1', hide: true }),
      WebUiFormField.input('name', { label: 'Name' }, { className: 'w-full px-1' }),
    ]),
    WebUiFormField.fieldRow([
      WebUiFormField.input('line1', { label: 'Line 1' }, { className: 'w-1/2  px-1' }),
      WebUiFormField.input('line2', { label: 'Line 2' }, { className: 'w-1/2  px-1' }),
    ]),
    WebUiFormField.fieldRow([
      WebUiFormField.input('city', { label: 'City' }, { className: 'w-1/2  px-1' }),
      WebUiFormField.input('postalCode', { label: 'Postal Code' }, { className: 'w-1/2  px-1' }),
    ]),
    WebUiFormField.fieldRow([
      WebUiFormField.input('countryCode', { label: 'Country Code' }, { className: 'w-1/2  px-1' }),
      WebUiFormField.number('latitude', { label: 'Latitude' }, { className: 'w-1/2  px-1' }),
    ]),
    WebUiFormField.fieldRow([WebUiFormField.number('longitude', { label: 'Longitude' }, { className: 'w-1/2  px-1' })]),
  ]
  constructor(private readonly store: AdminAddressCreateStore) {}

  createAddress(input) {
    this.store.createAddressEffect(input)
  }
}
