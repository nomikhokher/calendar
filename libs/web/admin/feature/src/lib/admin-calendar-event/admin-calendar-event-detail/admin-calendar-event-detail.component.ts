import { Component } from '@angular/core'
import { AdminCalendarEventDetailStore } from './admin-calendar-event-detail.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header [title]="'Calendar Event ' + vm.item?.name" linkPath=".." linkTitle="Back"></ui-page-header>
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
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Calendar Id:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.calendar?.name }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Recurring Event Id:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">
                {{ vm.item?.recurringEvent?.name }}
              </div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Is First Instance:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.isFirstInstance }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Title:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.title }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Description:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.description }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Start:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.start }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">End:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.end }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">All Day:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.allDay }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Recurrence:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.recurrence }}</div>
            </div>
          </div>
        </div>
      </ng-container>
    </ng-container>
  `,
  providers: [AdminCalendarEventDetailStore],
})
export class AdminCalendarEventDetailComponent {
  readonly vm$ = this.store.vm$

  constructor(private readonly store: AdminCalendarEventDetailStore) {}

  deleteItem(item) {
    if (confirm('Are you sure?')) {
      this.store.deleteCalendarEventEffect(item)
    }
  }
}
