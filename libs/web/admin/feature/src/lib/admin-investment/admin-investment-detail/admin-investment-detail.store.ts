import { Injectable } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { WebCoreDataAccessService, Investment } from '@calendar/web/core/data-access'
import { pluck, switchMap, tap } from 'rxjs/operators'

export interface InvestmentDetailState {
  errors?: any
  loading?: boolean
  item?: Investment
}

@Injectable()
export class AdminInvestmentDetailStore extends ComponentStore<InvestmentDetailState> {
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
  readonly vm$ = this.select(this.errors$, this.loading$, this.item$, (errors, loading, item) => ({
    errors,
    loading,
    item: { ...item },
  }))

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

  readonly deleteInvestmentEffect = this.effect<Investment>((investment$) =>
    investment$.pipe(
      switchMap((investment) =>
        this.data
          .adminDeleteInvestment({
            investmentId: investment.id,
          })
          .pipe(
            tapResponse(
              (res) => this.router.navigate(['/admin/investments']),
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
