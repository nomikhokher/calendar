import { Component, OnInit } from '@angular/core'
import { CalendarListStore } from './calendar-list.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="container px-16 mt-10 mx-auto">
        <ui-page-header title="Calendar" linkPath="create" linkTitle="Create Calendar"></ui-page-header>
        <ng-container *ngIf="vm.loading">
          <div class="flex py-36 animate-pulse justify-center align-center">LOADING...</div>
        </ng-container>
        <ng-container *ngIf="!vm.loading">
          <ng-container *ngIf="!vm.items?.length">
            <div class="flex py-20 justify-center align-center">No Calendar found...</div>
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
                          Color
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Visible
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
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ item?.color }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ item?.visible }}</td>
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
  providers: [CalendarListStore],
})
export class CalendarListComponent implements OnInit {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: CalendarListStore) {}

  ngOnInit(): void {
    this.store.loadCalendarsEffect()
  }
}
