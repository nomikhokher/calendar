import { Component, OnInit } from '@angular/core'
import { UserCalendarListStore } from './user-calendar-list.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ng-container *ngIf="vm.loading">
        <div class="flex py-36 animate-pulse justify-center align-center">LOADING...</div>
      </ng-container>
      <ng-container *ngIf="!vm.loading">
        <ng-container *ngIf="!vm.items?.length">
          <div class="flex py-20 justify-center align-center">No User Calendar found...</div>
        </ng-container>

        <div class="flex items-center justify-center h-full bg-gray-100 ">
          <div class="bg-gray-200 text-white font-bold rounded-lg border shadow-lg p-10">
            <div class="relative top-5 -left-2 cursor-pointer">
              <a routerLink="create" class="text-indigo-600 hover:text-indigo-900">
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
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>
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
                            Calendar Id
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Role
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Edit
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <!-- Odd row -->
                        <tr class="bg-white" *ngFor="let item of vm.items">
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ item?.name }}</td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {{ item?.calendarId }}
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ item?.userId }}</td>
                          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a [routerLink]="item?.id" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ng-container>
    </ng-container>
  `,
  providers: [UserCalendarListStore],
})
export class UserCalendarListComponent implements OnInit {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: UserCalendarListStore) {}

  ngOnInit(): void {
    this.store.loadUserCalendarsEffect()
  }
}
