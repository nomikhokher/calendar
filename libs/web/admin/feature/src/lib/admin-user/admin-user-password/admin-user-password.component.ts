import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { WebUiFormField } from '@calendar/web/ui/form'
import { AdminUserPasswordStore } from './admin-user-password.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header [title]="'Set Password for ' + vm.user?.username" linkPath=".." linkTitle="Back"></ui-page-header>
      <ng-container *ngIf="vm.user">
        <user-form [form]="form" [fields]="fields" [user]="vm.user" (submitForm)="updateUser($event)"></user-form>
      </ng-container>
    </ng-container>
  `,
  providers: [AdminUserPasswordStore],
})
export class AdminUserPasswordComponent {
  readonly vm$ = this.store.vm$
  readonly form = new FormGroup({})
  fields = [WebUiFormField.password('password')]

  constructor(private readonly store: AdminUserPasswordStore) {}

  updateUser(input) {
    const { password } = input
    this.store.updateSetUserPasswordEffect(password)
  }
}
