
import { Component } from '@angular/core'
import { AdminUserCalendarDetailStore } from './admin-user-calendar-detail.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header
        [title]="'User Calendar ' + vm.item?.name"
        linkPath=".."
        linkTitle="Back"
      ></ui-page-header>
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
									<div class="text-lg font-medium text-gray-900 dark:text-gray-200">Name:</div><div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.name }}</div>
								</div>
								<div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
									<div class="text-lg font-medium text-gray-900 dark:text-gray-200">User Id:</div><div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.user?.name }}</div>
								</div>
								<div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
									<div class="text-lg font-medium text-gray-900 dark:text-gray-200">Calendar Id:</div><div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.calendar?.name }}</div>
								</div>
          </div>
        </div>
      </ng-container>
    </ng-container>
  `,
  providers: [AdminUserCalendarDetailStore],
})
export class AdminUserCalendarDetailComponent {
  readonly vm$ = this.store.vm$

  constructor(private readonly store: AdminUserCalendarDetailStore) {}

  deleteItem(item) {
    if (confirm('Are you sure?')) {
      this.store.deleteUserCalendarEffect(item)
    }
  }
}

