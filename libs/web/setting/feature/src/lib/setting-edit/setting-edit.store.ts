import { Injectable } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AdminUpdateSettingInput, WebCoreDataAccessService, Setting } from '@calendar/web/core/data-access'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { pluck, switchMap, tap, withLatestFrom } from 'rxjs/operators'

export interface SettingEditState {
  errors?: any
  loading?: boolean
  item?: Setting
}

@Injectable()
export class SettingEditStore extends ComponentStore<SettingEditState> {
  constructor(private readonly data: WebCoreDataAccessService, route: ActivatedRoute) {
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

  readonly updateSettingEffect = this.effect<AdminUpdateSettingInput>((input$) =>
    input$.pipe(
      tap(() => this.patchState({ loading: true })),
      withLatestFrom(this.item$),
      switchMap(([input, item]) =>
        this.data.adminUpdateSetting({ input, settingId: item.id }).pipe(
          tapResponse(
            (res) => {
              this.patchState({ item: res.data.updated, errors: res.errors, loading: false })
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
