import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { AdminUpdateSettingInput, Role } from '@calendar/web/core/data-access'
import { WebUiFormField } from '@calendar/web/ui/form'
import { AdminSettingEditStore } from './admin-setting-edit.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header [title]="'Edit setting ' + vm.item?.name" linkPath=".." linkTitle="Back"></ui-page-header>
      <ng-container *ngIf="vm.item">
        <div class="dark:bg-gray-800 px-6 py-4 rounded-md">
          <ui-form [form]="form" [fields]="fields" [model]="vm.item" (submitForm)="updateSetting($event)">
            <ui-button label="Submit" type="submit"></ui-button>
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
  fields = [WebUiFormField.input('name', { label: 'Name' })]

  constructor(private readonly store: AdminSettingEditStore) {}

  updateSetting(input: AdminUpdateSettingInput) {
    const { name } = input
    this.store.updateSettingEffect({ name })
  }
}
