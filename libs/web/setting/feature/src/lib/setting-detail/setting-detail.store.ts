import { Injectable } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { WebCoreDataAccessService, Setting } from '@calendar/web/core/data-access'
import { pluck, switchMap, tap } from 'rxjs/operators'

export interface SettingDetailState {
  errors?: any
  loading?: boolean
  item?: Setting
}

@Injectable()
export class SettingDetailStore extends ComponentStore<SettingDetailState> {
  constructor(private readonly data: WebCoreDataAccessService, private readonly router: Router, route: ActivatedRoute) {
    super({ loading: false })
    this.loadSettingEffect(route.params.pipe(pluck('settingId')))
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly item$ = this.select((s) => s.item)
  readonly vm$ = this.select(this.errors$, this.loading$, this.item$, (errors, loading, item) => ({
    errors,
    loading,
    item: { ...item },
  }))

  readonly loadSettingEffect = this.effect<string>((settingId$) =>
    settingId$.pipe(
      tap(() => this.setState({ loading: true })),
      switchMap((settingId) =>
        this.data.adminSetting({ settingId }).pipe(
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

  readonly deleteSettingEffect = this.effect<Setting>((setting$) =>
    setting$.pipe(
      switchMap((setting) =>
        this.data.adminDeleteSetting({ settingId: setting.id }).pipe(
          tapResponse(
            (res) => this.router.navigate(['/admin/settings']),
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
