import { Component } from '@angular/core'
import { AdminCalendarEventExceptionDetailStore } from './admin-calendar-event-exception-detail.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header
        [title]="'Calendar Event Exception ' + vm.item?.name"
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
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Event Id:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.event?.name }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Exdate:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.exdate }}</div>
            </div>
          </div>
        </div>
      </ng-container>
    </ng-container>
  `,
  providers: [AdminCalendarEventExceptionDetailStore],
})
export class AdminCalendarEventExceptionDetailComponent {
  readonly vm$ = this.store.vm$

  constructor(private readonly store: AdminCalendarEventExceptionDetailStore) {}

  deleteItem(item) {
    if (confirm('Are you sure?')) {
      this.store.deleteCalendarEventExceptionEffect(item)
    }
  }
}
