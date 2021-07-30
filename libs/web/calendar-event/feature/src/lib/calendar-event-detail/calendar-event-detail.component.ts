import { Component } from '@angular/core'
import { CalendarEventDetailStore } from './calendar-event-detail.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="container px-16 mt-10 mx-auto">
        <ui-page-header [title]="'Calendar Event ' + vm.item?.title" linkPath=".." linkTitle="Back"></ui-page-header>
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
                          Title
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Description
                        </th>

                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          recurrence
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          isFirstInstance
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          allDay
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Start
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          End
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
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ vm.item?.title }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ vm.item?.description }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ vm.item?.recurrence }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {{ vm.item?.isFirstInstance }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ vm.item?.allDay }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ vm.item?.start }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ vm.item?.end }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <a routerLink="edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>
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
  providers: [CalendarEventDetailStore],
})
export class CalendarEventDetailComponent {
  readonly vm$ = this.store.vm$

  constructor(private readonly store: CalendarEventDetailStore) {}

  deleteItem(item) {
    if (confirm('Are you sure?')) {
      this.store.deleteCalendarEventEffect(item)
    }
  }
}
