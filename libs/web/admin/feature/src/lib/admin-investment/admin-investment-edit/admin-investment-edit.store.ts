import { Injectable } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { AdminUpdateInvestmentInput, WebCoreDataAccessService, Investment, User } from '@calendar/web/core/data-access'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { switchMap, tap, withLatestFrom, pluck } from 'rxjs/operators'

export interface InvestmentUpdateState {
  errors?: any
  loading?: boolean
  item?: Investment
  users?: User[]
  searchTerm?: string
}

@Injectable()
export class AdminInvestmentEditStore extends ComponentStore<InvestmentUpdateState> {
  constructor(
    private readonly data: WebCoreDataAccessService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {
    super({ loading: false })

    this.loadInvestmentEffect(route.params.pipe(pluck('investmentId')))
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly item$ = this.select((s) => s.item)
  readonly users$ = this.select((s) => s.users)
  readonly vm$ = this.select(this.errors$, this.loading$, this.item$, this.users$, (errors, loading, item, users) => ({
    errors,
    loading,
    item,
    users,
  }))

  readonly filterUsers = this.effect<string>((filter$) =>
    filter$.pipe(
      switchMap((term) =>
        this.data.adminUsers().pipe(
          tapResponse(
            (res: any) => {
              let users = res.data.items
              return this.patchState({ users: users })
            },
            (errors: any) =>
              this.patchState({
                errors: errors.graphQLErrors ? errors.graphQLErrors : errors,
              }),
          ),
        ),
      ),
    ),
  )

  readonly loadInvestmentEffect = this.effect<string>((investmentId$) =>
    investmentId$.pipe(
      tap(() => this.setState({ loading: true })),
      switchMap((investmentId) =>
        this.data.adminInvestment({ investmentId }).pipe(
          tapResponse(
            (res) => this.patchState({ item: res.data.item, errors: res.errors, loading: false }),
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

  readonly updateInvestmentEffect = this.effect<AdminUpdateInvestmentInput>((input$) =>
    input$.pipe(
      tap(() => this.patchState({ loading: true })),
      withLatestFrom(this.item$),
      switchMap(([input, item]) =>
        this.data.adminUpdateInvestment({ input, investmentId: item.id }).pipe(
          tapResponse(
            (res) => {
              this.patchState({ item: res.data.updated, errors: res.errors, loading: false })
              return this.router.navigate(['/admin/investments', res.data?.updated?.id])
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
