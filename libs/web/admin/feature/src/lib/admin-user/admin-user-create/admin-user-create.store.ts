import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { AdminCreateUserInput, WebCoreDataAccessService, User } from '@calendar/web/core/data-access'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { switchMap, tap } from 'rxjs/operators'

export interface UserCreateState {
  errors?: any
  loading?: boolean
  user?: User
}

@Injectable()
export class AdminUserCreateStore extends ComponentStore<UserCreateState> {
  constructor(private readonly data: WebCoreDataAccessService, private readonly router: Router) {
    super({ loading: false })
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly user$ = this.select((s) => s.user)
  readonly vm$ = this.select(this.errors$, this.loading$, this.user$, (errors, loading, user) => ({
    errors,
    loading,
    user,
  }))

  readonly createUserEffect = this.effect<AdminCreateUserInput>((input$) =>
    input$.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap((input) =>
        this.data.adminCreateUser({ input }).pipe(
          tapResponse(
            (res) => {
              this.patchState({
                user: res.data.adminCreateUser,
                errors: res.errors,
                loading: false,
              })
              return this.router.navigate(['/admin/users', res.data?.adminCreateUser?.id])
            },
            (errors: any) =>
              this.patchState({
                loading: false,
                errors: errors.graphQLErrors ? errors.graphQLErrors : errors,
              }),
          ),
        ),
      ),
    ),
  )
}
