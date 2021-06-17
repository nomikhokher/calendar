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
    WebUiFormField.input('name', { label: 'Name' }),
  ]
  constructor(private readonly store: AdminSettingCreateStore) {}

  createSetting(input) {
    this.store.createSettingEffect(input)
  }
}
