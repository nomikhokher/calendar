import { Component } from '@angular/core'
import { WebUiFormField } from '@calendar/web/ui/form'
import { AdminInvestmentCreateStore } from './admin-investment-create.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header title="Create Investment" linkPath=".." linkTitle="Back"></ui-page-header>
      <div class="dark:bg-gray-800 px-6 py-4 rounded-md">
        <div class="flex flex-row">
          <div class="flex w-full"></div>
          <div class="flex-none space-x-2">
            <ui-button label="Submit" type="submit"></ui-button>
          </div>
        </div>
        <ui-form [fields]="fields" [model]="{}" (submitForm)="createInvestment($event)">
          <div class="flex flex-row">
            <div class="flex w-full"></div>
            <div class="flex-none space-x-2">
              <ui-button label="Submit" type="submit"></ui-button>
            </div>
          </div>
        </ui-form>
      </div>
    </ng-container>
  `,
  providers: [AdminInvestmentCreateStore],
})
export class AdminInvestmentCreateComponent {
  readonly vm$ = this.store.vm$
  readonly users$ = this.store.users$

  fields = [
    WebUiFormField.fieldRow([
      WebUiFormField.input('id', { label: 'Id' }, { className: 'w-1/2  px-1', hide: true }),
      WebUiFormField.input('name', { label: 'Name' }, { className: 'w-full px-1' }),
    ]),
    WebUiFormField.fieldRow([
      WebUiFormField.input('userId', { label: 'User Id' }, { className: 'w-1/2  px-1', hide: true }),
      WebUiFormField.input('type', { label: 'Type' }, { className: 'w-1/2  px-1' }),
    ]),
    WebUiFormField.fieldRow([
      WebUiFormField.input('streetAddress', { label: 'Street Address' }, { className: 'w-1/2  px-1' }),
      WebUiFormField.input('borrowerEntity', { label: 'Borrower Entity' }, { className: 'w-1/2  px-1' }),
    ]),
    WebUiFormField.fieldRow([
      WebUiFormField.input('mainContact', { label: 'Main Contact' }, { className: 'w-1/2  px-1' }),
      WebUiFormField.input('mainContactEmail', { label: 'Main Contact Email' }, { className: 'w-1/2  px-1' }),
    ]),
    WebUiFormField.fieldRow([
      WebUiFormField.input('bank', { label: 'Bank' }, { className: 'w-1/2  px-1' }),
      WebUiFormField.number('totalNote', { label: 'Total Note' }, { className: 'w-1/2  px-1' }),
    ]),
    WebUiFormField.fieldRow([
      WebUiFormField.number('rate', { label: 'Rate' }, { className: 'w-1/2  px-1' }),
      WebUiFormField.number('termsInMonths', { label: 'Terms In Months' }, { className: 'w-1/2  px-1' }),
    ]),
    WebUiFormField.fieldRow([
      WebUiFormField.number('perDiem', { label: 'Per Diem' }, { className: 'w-1/2  px-1' }),
      WebUiFormField.date('fundDate', { label: 'Fund Date' }, { className: 'w-1/2  px-1' }),
    ]),
    WebUiFormField.fieldRow([
      WebUiFormField.date('maturityDate', { label: 'Maturity Date' }, { className: 'w-1/2  px-1' }),
      WebUiFormField.number('currentBalance', { label: 'Current Balance' }, { className: 'w-1/2  px-1' }),
    ]),
    WebUiFormField.fieldRow([
      WebUiFormField.number('advanceFromBank', { label: 'Advance From Bank' }, { className: 'w-1/2  px-1' }),
      WebUiFormField.number('advanceFromFF', { label: 'Advance From FF' }, { className: 'w-1/2  px-1' }),
    ]),
    WebUiFormField.fieldRow([
      WebUiFormField.number('advanceToBorrower', { label: 'Advance To Borrower' }, { className: 'w-1/2  px-1' }),
      WebUiFormField.number('totalInterestAccrued', { label: 'Total Interest Accrued' }, { className: 'w-1/2  px-1' }),
    ]),
    WebUiFormField.fieldRow([
      WebUiFormField.number(
        'totalInterestPaid',
        { label: 'Total Interest Paid' },
        { className: 'w-1/2  px-1', hide: true },
      ),
      WebUiFormField.number('currentInterestOwed', { label: 'Current Interest Owed' }, { className: 'w-1/2  px-1' }),
    ]),
    WebUiFormField.fieldRow([
      WebUiFormField.number('serviceFeeOwed', { label: 'Service Fee Owed' }, { className: 'w-1/2  px-1' }),
      WebUiFormField.number(
        'miscellaneousFeeOutstanding',
        { label: 'Miscellaneous Fee Outstanding' },
        { className: 'w-1/2  px-1' },
      ),
    ]),
    WebUiFormField.fieldRow([
      WebUiFormField.input('transactions', { label: 'Transactions' }, { className: 'w-1/2  px-1' }),
    ]),
    WebUiFormField.typeahead('userId', {
      placeholder: 'User',
      items: this.users$,
      onSearch: (searchTerm) => {
        this.store.filterUsers(searchTerm.term)
      },
    }),
  ]
  constructor(private readonly store: AdminInvestmentCreateStore) {}

  createInvestment(input) {
    this.store.createInvestmentEffect(input)
  }
}
