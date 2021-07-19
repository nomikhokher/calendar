import { Component } from '@angular/core'
import { WebUiFormField } from '@calendar/web/ui/form'
import { AdminSettingCreateStore } from './admin-setting-create.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header title="Create Setting" linkPath=".." linkTitle="Back"></ui-page-header>
      <div class="dark:bg-gray-800 px-6 py-4 rounded-md">
        <ui-form [fields]="fields" [model]="{}" (submitForm)="createSetting($event)">
          <ui-button label="Submit" type="submit"></ui-button>
        </ui-form>
      </div>
    </ng-container>
  `,
  providers: [AdminSettingCreateStore],
})
export class AdminSettingCreateComponent {
  readonly vm$ = this.store.vm$

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

  constructor(private readonly store: AdminSettingCreateStore) {}

  createSetting(input) {
    this.store.createSettingEffect(input)
  }
}
