import { Component } from '@angular/core'
import { AdminInvestmentDetailStore } from './admin-investment-detail.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header [title]="'Investment ' + vm.item?.name" linkPath=".." linkTitle="Back"></ui-page-header>
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
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Name:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.name }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">User Id:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.user?.name }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Type:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.type }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Street Address:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.streetAddress }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Borrower Entity:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.borrowerEntity }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Main Contact:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.mainContact }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Main Contact Email:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.mainContactEmail }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Bank:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.bank }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Total Note:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.totalNote }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Rate:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.rate }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Terms In Months:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.termsInMonths }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Per Diem:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.perDiem }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Fund Date:</div>
              <div class="text-lg text-gray-500">{{ vm.item?.fundDate | date: 'short' }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Maturity Date:</div>
              <div class="text-lg text-gray-500">{{ vm.item?.maturityDate | date: 'short' }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Current Balance:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.currentBalance }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Advance From Bank:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.advanceFromBank }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Advance From FF:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.advanceFromFF }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Advance To Borrower:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.advanceToBorrower }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Total Interest Accrued:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">
                {{ vm.item?.totalInterestAccrued }}
              </div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Total Interest Paid:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">
                {{ vm.item?.totalInterestPa?.name }}
              </div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Current Interest Owed:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.currentInterestOwed }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Service Fee Owed:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.serviceFeeOwed }}</div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Miscellaneous Fee Outstanding:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">
                {{ vm.item?.miscellaneousFeeOutstanding }}
              </div>
            </div>
            <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-full xl:my-2 xl:px-2 xl:w-1/2">
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">Transactions:</div>
              <div class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ vm.item?.transactions }}</div>
            </div>
          </div>
        </div>
      </ng-container>
    </ng-container>
  `,
  providers: [AdminInvestmentDetailStore],
})
export class AdminInvestmentDetailComponent {
  readonly vm$ = this.store.vm$

  constructor(private readonly store: AdminInvestmentDetailStore) {}

  deleteItem(item) {
    if (confirm('Are you sure?')) {
      this.store.deleteInvestmentEffect(item)
    }
  }
}
