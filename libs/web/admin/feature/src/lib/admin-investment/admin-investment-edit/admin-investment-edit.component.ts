
import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { AdminUpdateInvestmentInput, Role } from '@calendar/web/core/data-access'
import { WebUiFormField } from '@calendar/web/ui/form'
import { AdminInvestmentEditStore } from './admin-investment-edit.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
        <ng-container *ngIf="vm.item">
              <ui-page-header [title]="'Edit Investment ' + vm.item?.name" linkPath=".." linkTitle="Back"></ui-page-header>
                <div class="dark:bg-gray-800 px-6 py-4 rounded-md">
                <ui-form  [form]="form"  [fields]="fields"  [model]="vm.item" (submitForm)="updateInvestment($event)">
                  <ui-button label="Submit" type="submit"></ui-button>
                </ui-form>
            </div>
        </ng-container>
    </ng-container>
  `,
  providers: [AdminInvestmentEditStore],
})
export class AdminInvestmentEditComponent {
        readonly vm$ = this.store.vm$
        readonly form = new FormGroup({})
        readonly users$ = this.store.users$

  fields = [
    				WebUiFormField.fieldRow([
WebUiFormField.input('id', { label: 'Id' }, {className: 'w-1/2  px-1', hide: true}),
WebUiFormField.input('name', { label: 'Name' }, {className: 'w-full px-1'})				])
,
				WebUiFormField.fieldRow([
WebUiFormField.input('userId', { label: 'User Id' }, {className: 'w-1/2  px-1', hide: true}),
WebUiFormField.input('type', { label: 'Type' }, {className: 'w-1/2  px-1'})				])
,
				WebUiFormField.fieldRow([
WebUiFormField.input('streetAddress', { label: 'Street Address' }, {className: 'w-1/2  px-1'}),
WebUiFormField.input('borrowerEntity', { label: 'Borrower Entity' }, {className: 'w-1/2  px-1'})				])
,
				WebUiFormField.fieldRow([
WebUiFormField.input('mainContact', { label: 'Main Contact' }, {className: 'w-1/2  px-1'}),
WebUiFormField.input('mainContactEmail', { label: 'Main Contact Email' }, {className: 'w-1/2  px-1'})				])
,
				WebUiFormField.fieldRow([
WebUiFormField.input('bank', { label: 'Bank' }, {className: 'w-1/2  px-1'}),
WebUiFormField.number('totalNote', { label: 'Total Note' }, {className: 'w-1/2  px-1'})				])
,
				WebUiFormField.fieldRow([
WebUiFormField.number('rate', { label: 'Rate' }, {className: 'w-1/2  px-1'}),
WebUiFormField.number('termsInMonths', { label: 'Terms In Months' }, {className: 'w-1/2  px-1'})				])
,
				WebUiFormField.fieldRow([
WebUiFormField.number('perDiem', { label: 'Per Diem' }, {className: 'w-1/2  px-1'}),
WebUiFormField.date('fundDate', { label: 'Fund Date' }, {className: 'w-1/2  px-1'})				])
,
				WebUiFormField.fieldRow([
WebUiFormField.date('maturityDate', { label: 'Maturity Date' }, {className: 'w-1/2  px-1'}),
WebUiFormField.number('currentBalance', { label: 'Current Balance' }, {className: 'w-1/2  px-1'})				])
,
				WebUiFormField.fieldRow([
WebUiFormField.number('advanceFromBank', { label: 'Advance From Bank' }, {className: 'w-1/2  px-1'}),
WebUiFormField.number('advanceFromFF', { label: 'Advance From FF' }, {className: 'w-1/2  px-1'})				])
,
				WebUiFormField.fieldRow([
WebUiFormField.number('advanceToBorrower', { label: 'Advance To Borrower' }, {className: 'w-1/2  px-1'}),
WebUiFormField.number('totalInterestAccrued', { label: 'Total Interest Accrued' }, {className: 'w-1/2  px-1'})				])
,
				WebUiFormField.fieldRow([
WebUiFormField.number('totalInterestPaid', { label: 'Total Interest Paid' }, {className: 'w-1/2  px-1', hide: true}),
WebUiFormField.number('currentInterestOwed', { label: 'Current Interest Owed' }, {className: 'w-1/2  px-1'})				])
,
				WebUiFormField.fieldRow([
WebUiFormField.number('serviceFeeOwed', { label: 'Service Fee Owed' }, {className: 'w-1/2  px-1'}),
WebUiFormField.number('miscellaneousFeeOutstanding', { label: 'Miscellaneous Fee Outstanding' }, {className: 'w-1/2  px-1'})				])
,
				WebUiFormField.fieldRow([
WebUiFormField.input('transactions', { label: 'Transactions' }, {className: 'w-1/2  px-1'})				])
,
    
WebUiFormField.typeahead('userId', {
  placeholder: 'User', 
  items: this.users$, 
  onSearch: (searchTerm) => { 
    this.store.filterUsers(searchTerm.term);
    }
  })

  ]
  constructor(private readonly store: AdminInvestmentEditStore) {}

  updateInvestment(input: AdminUpdateInvestmentInput) {
     const { name,userId,type,streetAddress,borrowerEntity,mainContact,mainContactEmail,bank,totalNote,rate,termsInMonths,perDiem,fundDate,maturityDate,currentBalance,advanceFromBank,advanceFromFF,advanceToBorrower,totalInterestAccrued,totalInterestPaid,currentInterestOwed,serviceFeeOwed,miscellaneousFeeOutstanding } = input
     this.store.updateInvestmentEffect({name,userId,type,streetAddress,borrowerEntity,mainContact,mainContactEmail,bank,totalNote,rate,termsInMonths,perDiem,fundDate,maturityDate,currentBalance,advanceFromBank,advanceFromFF,advanceToBorrower,totalInterestAccrued,totalInterestPaid,currentInterestOwed,serviceFeeOwed,miscellaneousFeeOutstanding})
  }
}
