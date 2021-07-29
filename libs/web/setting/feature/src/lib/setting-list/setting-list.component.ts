import { Component, OnInit } from '@angular/core'
import { SettingListStore } from './setting-list.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header title="Settings" linkPath="create" linkTitle="Create Setting"></ui-page-header>
      <ng-container *ngIf="vm.loading">
        <div class="flex py-36 animate-pulse justify-center align-center">LOADING...</div>
      </ng-container>
      <ng-container *ngIf="!vm.loading">
        <ng-container *ngIf="!vm.items?.length">
          <div class="flex py-20 justify-center align-center">No Settings found...</div>
        </ng-container>
        <div class="flex flex-col space-y-6">
          <div class="bg-white shadow overflow-hidden sm:rounded-md">
            <ul class="divide-y divide-gray-200">
              <li *ngFor="let item of vm.items">
                <a [routerLink]="item?.id" class="block hover:bg-gray-50">
                  <div class="px-4 py-4 flex items-center sm:px-6">
                    <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                      <div class="truncate">
                        <div class="flex text-sm">
                          <p class="font-medium text-indigo-600 truncate">{{ item?.dateFormat }}</p>
                          <p class="ml-3 font-medium text-indigo-600 truncate">{{ item?.timeFormat }}</p>
                        </div>

                        <div class="mt-2 flex">
                          <div class="flex items-center text-sm text-gray-500"></div>
                        </div>
                      </div>
                      <div class="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                        <div class="flex overflow-hidden -space-x-1">
                          {{ item?.startWeekOn }}
                        </div>
                      </div>
                    </div>
                    <div class="ml-5 flex-shrink-0">
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
        </div>
      </ng-container>
    </ng-container>
  `,
  providers: [SettingListStore],
})
export class SettingListComponent implements OnInit {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: SettingListStore) {}

  ngOnInit(): void {
    this.store.loadSettingsEffect()
  }
}
