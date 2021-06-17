import { Injectable } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { AdminUpdateAddressInput, WebCoreDataAccessService, Address } from '@calendar/web/core/data-access'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { switchMap, tap, withLatestFrom, pluck } from 'rxjs/operators'

export interface AddressUpdateState {
  errors?: any
  loading?: boolean
  item?: Address

  searchTerm?: string
}

@Injectable()
export class AdminAddressEditStore extends ComponentStore<AddressUpdateState> {
  constructor(
    private readonly data: WebCoreDataAccessService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {
    super({ loading: false })

    this.loadAddressEffect(route.params.pipe(pluck('addressId')))
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly item$ = this.select((s) => s.item)

  readonly vm$ = this.select(
    this.errors$,
    this.loading$,
    this.item$,

    (errors, loading, item) => ({
      errors,
      loading,
      item,
    }),
  )

  readonly loadAddressEffect = this.effect<string>((addressId$) =>
    addressId$.pipe(
      tap(() => this.setState({ loading: true })),
      switchMap((addressId) =>
        this.data.adminAddress({ addressId }).pipe(
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

  readonly updateAddressEffect = this.effect<AdminUpdateAddressInput>((input$) =>
    input$.pipe(
      tap(() => this.patchState({ loading: true })),
      withLatestFrom(this.item$),
      switchMap(([input, item]) =>
        this.data.adminUpdateAddress({ input, addressId: item.id }).pipe(
          tapResponse(
            (res) => {
              this.patchState({ item: res.data.updated, errors: res.errors, loading: false })
              return this.router.navigate(['/admin/addresses', res.data?.updated?.id])
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
