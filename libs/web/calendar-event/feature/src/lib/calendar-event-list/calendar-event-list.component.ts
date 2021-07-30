import { Component, OnInit } from '@angular/core'
import { CalendarEventListStore } from './calendar-event-list.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="container px-16 mt-10 mx-auto">
        <ui-page-header title="Calendar Event" linkPath="create" linkTitle="Create Calendar Event"></ui-page-header>
        <ng-container *ngIf="vm.loading">
          <div class="flex py-36 animate-pulse justify-center align-center">LOADING...</div>
        </ng-container>
        <ng-container *ngIf="!vm.loading">
          <ng-container *ngIf="!vm.items?.length">
            <div class="flex py-20 justify-center align-center">No Calendar Event found...</div>
          </ng-container>

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
                          Edit
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <!-- Odd row -->
                      <tr class="bg-white" *ngFor="let item of vm.items">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ item?.title }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ item?.description }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ item?.start }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ item?.end }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <a [routerLink]="item?.id" class="text-indigo-600 hover:text-indigo-900">Edit</a>
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
  providers: [CalendarEventListStore],
})
export class CalendarEventListComponent implements OnInit {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: CalendarEventListStore) {}

  ngOnInit(): void {
    this.store.loadCalendarEventsEffect()
  }
}
