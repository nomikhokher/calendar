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
