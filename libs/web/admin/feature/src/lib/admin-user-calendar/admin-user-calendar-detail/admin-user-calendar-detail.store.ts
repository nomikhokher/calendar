import { Injectable } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { WebCoreDataAccessService, UserCalendar } from '@calendar/web/core/data-access'
import { pluck, switchMap, tap } from 'rxjs/operators'

export interface UserCalendarDetailState {
  errors?: any
  loading?: boolean
  item?: UserCalendar
}

@Injectable()
export class AdminUserCalendarDetailStore extends ComponentStore<UserCalendarDetailState> {
  constructor(
    private readonly data: WebCoreDataAccessService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {
    super({ loading: false })
    this.loadUserCalendarEffect(route.params.pipe(pluck('userCalendarId')))
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly item$ = this.select((s) => s.item)
  readonly vm$ = this.select(this.errors$, this.loading$, this.item$, (errors, loading, item) => ({
    errors,
    loading,
    item: { ...item },
  }))

  readonly loadUserCalendarEffect = this.effect<string>((userCalendarId$) =>
    userCalendarId$.pipe(
      tap(() => this.setState({ loading: true })),
      switchMap((userCalendarId) =>
        this.data.adminUserCalendar({ userCalendarId }).pipe(
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

  readonly deleteUserCalendarEffect = this.effect<UserCalendar>((userCalendar$) =>
    userCalendar$.pipe(
      switchMap((userCalendar) =>
        this.data
          .adminDeleteUserCalendar({
            userCalendarId: userCalendar.id,
          })
          .pipe(
            tapResponse(
              (res) => this.router.navigate(['/admin/user-calendars']),
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
