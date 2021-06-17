import { Component } from '@angular/core'
import { AdminAddressDetailStore } from './admin-address-detail.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header [title]="'Address ' + vm.item?.name" linkPath=".." linkTitle="Back"></ui-page-header>
      <ng-container *ngIf="vm.item">
        <div class="dark:bg-gray-800 px-6 py-4 rounded-md">
          <div class="flex flex-row">
            <div class="flex w-full"></div>
            <div class="flex-none space-x-2">
              <ui-button link="edit" label="Edit"></ui-button>
              <ui-button (handler)="deleteItem(vm.item)" label="Delete"></ui-button>
            </div>
          </div>
          <div class="flex flex-wrap overflow-hidden lg:-mx-1 xl:-mx-2">
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Name:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.name }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Line 1:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.line1 }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Line 2:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.line2 }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">City:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.city }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Postal Code:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.postalCode }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Country Code:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.countryCode }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Latitude:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.latitude }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Longitude:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.longitude }}</div>
            </div>
          </div>
        </div>
      </ng-container>
    </ng-container>
  `,
  providers: [AdminAddressDetailStore],
})
export class AdminAddressDetailComponent {
  readonly vm$ = this.store.vm$

  constructor(private readonly store: AdminAddressDetailStore) {}

  deleteItem(item) {
    if (confirm('Are you sure?')) {
      this.store.deleteAddressEffect(item)
    }
  }
}
