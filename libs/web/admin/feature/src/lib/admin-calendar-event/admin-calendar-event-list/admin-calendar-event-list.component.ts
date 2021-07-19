import { Component, OnInit } from '@angular/core'
import { AdminCalendarEventListStore } from './admin-calendar-event-list.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header title="Calendar Event" linkPath="create" linkTitle="Create Calendar Event"></ui-page-header>
      <ng-container *ngIf="vm.loading">
        <div class="flex py-36 animate-pulse justify-center align-center">LOADING...</div>
      </ng-container>
      <ng-container *ngIf="!vm.loading">
        <ng-container *ngIf="!vm.items?.length">
          <div class="flex py-20 justify-center align-center">No Calendar Event found...</div>
        </ng-container>

        <div class="flex flex-col space-y-6">
          <!-- This example requires Tailwind CSS v2.0+ -->
          <div class="bg-white shadow overflow-hidden sm:rounded-md">
            <ul class="divide-y divide-gray-200">
              <li *ngFor="let item of vm.items">
                <a [routerLink]="item?.id" class="block hover:bg-gray-50">
                  <div class="flex items-center px-4 py-4 sm:px-6">
                    <div class="min-w-0 flex-1 flex items-center">
                      <div class="flex-shrink-0"></div>
                      <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p class="text-sm font-medium text-indigo-600 truncate">{{ item.title }}</p>
                          <p class="mt-2 flex items-center text-sm text-gray-500">
                            <span class="truncate">{{ item.description }}</span>
                          </p>
                        </div>
                        <div class="hidden md:block">
                          <div>
                            <p>
                              Start:
                              <time class="text-sm text-gray-900 ml-2" datetime="2020-01-07">{{
                                item.start | date: 'medium'
                              }}</time>
                            </p>
                            <p>
                              End:
                              <time d class="text-sm text-gray-900 ml-2" atetime="2020-01-07">{{
                                item.end | date: 'medium'
                              }}</time>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <!-- Heroicon name: solid/chevron-right -->
                      <svg
                        class="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <ng-container *ngFor="let item of vm.items">
            <div class="dark:bg-gray-800 px-6 py-4 rounded-md">
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-lg font-medium text-gray-900 dark:text-gray-200">
                      <a [routerLink]="item?.id">
                        {{ item?.name }}
                      </a>
                    </div>
                    <div class="text-lg text-gray-500">
                      {{ item?.updatedAt | date: 'short' }}
                    </div>
                  </div>
                </div>
                <div class="flex space-x-2">
                  <ui-button [link]="[item?.id, 'edit']" label="Edit"></ui-button>
                </div>
              </div>
            </div>
          </ng-container>
        </div>
      </ng-container>
    </ng-container>
  `,
  providers: [AdminCalendarEventListStore],
})
export class AdminCalendarEventListComponent implements OnInit {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: AdminCalendarEventListStore) {}

  ngOnInit(): void {
    this.store.loadCalendarEventsEffect()
  }
}
