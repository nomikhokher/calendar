import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { AdminUpdateAddressInput, Role } from '@calendar/web/core/data-access'
import { WebUiFormField } from '@calendar/web/ui/form'
import { AdminAddressEditStore } from './admin-address-edit.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ng-container *ngIf="vm.item">
        <ui-page-header [title]="'Edit Address ' + vm.item?.name" linkPath=".." linkTitle="Back"></ui-page-header>
        <div class="dark:bg-gray-800 px-6 py-4 rounded-md">
          <ui-form [form]="form" [fields]="fields" [model]="vm.item" (submitForm)="updateAddress($event)">
            <ui-button label="Submit" type="submit"></ui-button>
          </ui-form>
        </div>
      </ng-container>
    </ng-container>
  `,
  providers: [AdminAddressEditStore],
})
export class AdminAddressEditComponent {
  readonly vm$ = this.store.vm$
  readonly form = new FormGroup({})

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
  constructor(private readonly store: AdminAddressEditStore) {}

  updateAddress(input: AdminUpdateAddressInput) {
    const { name, line1, line2, city, postalCode, countryCode, latitude, longitude } = input
    this.store.updateAddressEffect({ name, line1, line2, city, postalCode, countryCode, latitude, longitude })
  }
}
