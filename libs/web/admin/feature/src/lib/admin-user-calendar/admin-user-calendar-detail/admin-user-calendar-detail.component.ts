import { Component } from '@angular/core'
import { AdminUserCalendarDetailStore } from './admin-user-calendar-detail.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header [title]="'User Calendar ' + vm.item?.name" linkPath=".." linkTitle="Back"></ui-page-header>
      <ng-container *ngIf="vm.item">
        <ul class="grid">
          <li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
            <div class="w-full flex items-center justify-between p-6 space-x-6">
              <div class="flex-1 truncate">
                <div class="flex items-center space-x-3">
                  <p>
                    Name:
                    <span class="text-gray-900 text-sm font-medium truncate ml-2">{{ vm.item?.name }}</span>
                  </p>
                </div>
                <p class="mt-1 text-gray-500 text-sm truncate">
                  User Id:
                  <span class="text-gray-900 text-sm font-medium truncate ml-2">{{ vm.item?.userId }}</span>
                </p>
              </div>
              <p>
                Calendar Id:
                <span class="text-gray-900 text-sm font-medium truncate ml-2">{{ vm.item?.calendarId }}</span>
              </p>
            </div>
            <div>
              <div class="-mt-px flex divide-x divide-gray-200">
                <div class="w-0 flex-1 flex">
                  <a
                    routerLink="edit"
                    class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                  >
                    <!-- Heroicon name: solid/phone -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    <span class="ml-3">Edit</span>
                  </a>
                </div>
                <div class="-ml-px w-0 flex-1 flex">
                  <a
                    href="javascript:void(0)"
                    (click)="deleteItem(vm.item)"
                    class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                  >
                    <!-- Heroicon name: solid/mail -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    <span class="ml-3">Delete</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
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
