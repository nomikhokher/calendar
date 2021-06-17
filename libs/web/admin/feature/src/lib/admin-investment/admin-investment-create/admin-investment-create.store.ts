
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { AdminCreateInvestmentInput, WebCoreDataAccessService, Investment, User } from '@calendar/web/core/data-access'
import { ComponentStore,tapResponse } from '@ngrx/component-store'
import { switchMap,tap } from 'rxjs/operators'

export interface InvestmentCreateState {
  errors?: any
  loading?: boolean
  item?: Investment,
 users?: User[]
  searchTerm?: string
}

@Injectable()
export class AdminInvestmentCreateStore extends ComponentStore<InvestmentCreateState> {
  constructor(private readonly data: WebCoreDataAccessService, private readonly router: Router) {
    super({ loading: false })
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly item$ = this.select((s) => s.item)
  readonly users$ = this.select((s) => s.users)
  readonly vm$ = this.select(this.errors$, this.loading$, this.item$, 
this.users$,
    (errors, loading, item, users ) => ({
    errors,
    loading,
    item,
users
  }))



  readonly filterUsers = this.effect<string>((filter$) => 
    filter$.pipe(
      switchMap((term) =>
        this.data.adminUsers().pipe(
          tapResponse(
            (res: any) => {
              let users = res.data.items;
              return this.patchState({ users: users })
            },
            (errors: any) =>
              this.patchState({
                errors: errors.graphQLErrors ? errors.graphQLErrors : errors,
              }),
          ),
        ),
      ),
    )
  )


    

  readonly createInvestmentEffect = this.effect<AdminCreateInvestmentInput>((input$) =>
    input$.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap((input) =>
        this.data.adminCreateInvestment({ input }).pipe(
          tapResponse(
            (res) => {
              this.patchState({ item: res.data.created, errors: res.errors, loading: false })
              return this.router.navigate(['/admin/investments', res.data?.created?.id])
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


