import { Component, OnInit } from '@angular/core'
import { AccountUpdateProfileInput } from '@calendar/mobile/core/data-access'
import { AccountProfileStore } from './account-profile.store'

@Component({
  template: ` <ng-container *ngIf="vm$ | async as vm"> gg </ng-container> `,
  providers: [AccountProfileStore],
})
export class AccountProfileComponent implements OnInit {
  readonly vm$ = this.store.vm$

  constructor(private readonly store: AccountProfileStore) {}

  updateProfile(input: AccountUpdateProfileInput) {
    this.store.updateProfileEffect(input)
  }

  updateUsername({ username }) {
    this.store.updateUsernameEffect(username)
  }

  ngOnInit(): void {
    this.store.loadProfileEffect()
  }
}
