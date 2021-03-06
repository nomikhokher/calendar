import { Component } from '@angular/core'
import { UserCalendarDetailStore } from './user-calendar-detail.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="container px-16 mt-10 mx-auto">
        <ui-page-header [title]="'User Calendar ' + vm.item?.name" linkPath=".." linkTitle="Back"></ui-page-header>
        <ng-container *ngIf="vm.item">
          <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          User Id
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Calendar Id
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <!-- Odd row -->
                      <tr class="bg-white">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ vm.item?.name }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {{ vm.item?.userId }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ vm.item?.calendarId }}</td>
                        <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                          <a [routerLink]="'edit'" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                          <a
                            href="javascript:void(0)"
                            (click)="deleteItem(vm.item)"
                            class="text-red-600 hover:text-red-900 ml-2"
                            >Delete</a
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </ng-container>
      </div>
    </ng-container>
  `,
  providers: [UserCalendarDetailStore],
})
export class UserCalendarDetailComponent {
  readonly vm$ = this.store.vm$

  constructor(private readonly store: UserCalendarDetailStore) {}

  deleteItem(item) {
    if (confirm('Are you sure?')) {
      this.store.deleteUserCalendarEffect(item)
    }
  }
}
