import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { AdminUpdateSettingInput, Role } from '@calendar/web/core/data-access'
import { WebUiFormField } from '@calendar/web/ui/form'
import { AdminSettingEditStore } from './admin-setting-edit.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header [title]="'Edit setting ' + vm.item?.dateFormat" linkPath=".." linkTitle="Back"></ui-page-header>
      <ng-container *ngIf="vm.item">
        <div class="dark:bg-gray-800 px-6 py-4 rounded-md">
          <ui-form [form]="form" [fields]="fields" [model]="vm.item" (submitForm)="updateSetting($event)">
            <ui-button label="Save" type="submit"></ui-button>
          </ui-form>
        </div>
      </ng-container>
    </ng-container>
  `,
  providers: [AdminSettingEditStore],
})
export class AdminSettingEditComponent {
  readonly vm$ = this.store.vm$
  readonly form = new FormGroup({})

  fields = [
    WebUiFormField.fieldRow([
      WebUiFormField.input('id', { label: 'Id' }, { className: 'w-1/2  px-1', hide: true }),
      WebUiFormField.select(
        'dateFormat',
        {
          label: 'Date Format',
          options: [
            { label: 'DDMMYYYY', value: 'DDMMYYYY' },
            { label: 'MMDDYYYY', value: 'MMDDYYYY' },
            { label: 'YYYYMMDD', value: 'YYYYMMDD' },
            { label: 'Ll', value: 'll' },
          ],
        },
        { className: 'w-1/2  px-1' },
      ),
      WebUiFormField.select(
        'timeFormat',
        {
          label: 'Time Format',
          options: [
            { label: 'Twelve', value: 'Twelve' },
            { label: 'TwentyFour', value: 'TwentyFour' },
          ],
        },
        { className: 'w-1/2  px-1' },
      ),
    ]),
    WebUiFormField.fieldRow([
      WebUiFormField.select(
        'startWeekOn',
        {
          label: 'StartWeekOn',
          options: [
            { label: 'One', value: 'One' },
            { label: 'Six', value: 'Six' },
            { label: 'Zero', value: 'Zero' },
          ],
        },
        { className: 'w-1/2  px-1' },
      ),
    ]),
  ]

  constructor(private readonly store: AdminSettingEditStore) {}

  updateSetting(input: AdminUpdateSettingInput) {
    const { dateFormat, timeFormat, startWeekOn, id } = input
    this.store.updateSettingEffect({ dateFormat, timeFormat, startWeekOn, id })
  }
}
