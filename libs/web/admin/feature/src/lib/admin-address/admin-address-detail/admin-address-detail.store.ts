import { Injectable } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { WebCoreDataAccessService, Address } from '@calendar/web/core/data-access'
import { pluck, switchMap, tap } from 'rxjs/operators'

export interface AddressDetailState {
  errors?: any
  loading?: boolean
  item?: Address
}

@Injectable()
export class AdminAddressDetailStore extends ComponentStore<AddressDetailState> {
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
  readonly vm$ = this.select(this.errors$, this.loading$, this.item$, (errors, loading, item) => ({
    errors,
    loading,
    item: { ...item },
  }))

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

  readonly deleteAddressEffect = this.effect<Address>((address$) =>
    address$.pipe(
      switchMap((address) =>
        this.data
          .adminDeleteAddress({
            addressId: address.id,
          })
          .pipe(
            tapResponse(
              (res) => this.router.navigate(['/admin/addresses']),
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
