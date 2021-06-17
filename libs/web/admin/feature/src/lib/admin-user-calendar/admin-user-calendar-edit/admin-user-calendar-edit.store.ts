
import { Injectable } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { AdminUpdateUserCalendarInput, WebCoreDataAccessService, UserCalendar, User,Calendar } from '@calendar/web/core/data-access'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { switchMap, tap, withLatestFrom, pluck } from 'rxjs/operators'

export interface UserCalendarUpdateState {
  errors ?: any
  loading?: boolean
  item?: UserCalendar,
 users?: User[],
 calendars?: Calendar[]
  searchTerm?: string
}

@Injectable()
export class AdminUserCalendarEditStore extends ComponentStore<UserCalendarUpdateState> {
  constructor(private readonly data: WebCoreDataAccessService, private readonly router: Router, private readonly route: ActivatedRoute) {
    super({ loading: false })

    this.loadUserCalendarEffect(route.params.pipe(pluck('userCalendarId')))
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly item$ = this.select((s) => s.item)
  readonly users$ = this.select((s) => s.users)
  readonly calendars$ = this.select((s) => s.calendars)
  readonly vm$ = this.select(this.errors$, this.loading$, this.item$, 
this.users$,this.calendars$,
    (errors, loading, item, users,calendars ) => ({
    errors,
    loading,
    item,
users,calendars
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


  readonly filterCalendars = this.effect<string>((filter$) => 
    filter$.pipe(
      switchMap((term) =>
        this.data.adminCalendars({input: { name: term}}).pipe(
          tapResponse(
            (res: any) => {
              let calendars = res.data.items;
              return this.patchState({ calendars: calendars })
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

  readonly updateUserCalendarEffect = this.effect<AdminUpdateUserCalendarInput>((input$) =>
    input$.pipe(
      tap(() => this.patchState({ loading: true })),
      withLatestFrom(this.item$),
      switchMap(([input, item]) =>
        this.data.adminUpdateUserCalendar({ input, userCalendarId: item.id }).pipe(
          tapResponse(
            (res) => {
              this.patchState({ item: res.data.updated, errors: res.errors, loading: false })
              return this.router.navigate(['/admin/user-calendars', res.data?.updated?.id])
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


