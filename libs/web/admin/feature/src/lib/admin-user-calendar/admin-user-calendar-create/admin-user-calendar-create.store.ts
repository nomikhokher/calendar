import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import {
  AdminCreateUserCalendarInput,
  WebCoreDataAccessService,
  UserCalendar,
  User,
  Calendar,
} from '@calendar/web/core/data-access'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { switchMap, tap } from 'rxjs/operators'

export interface UserCalendarCreateState {
  errors?: any
  loading?: boolean
  item?: UserCalendar
  users?: User[]
  calendars?: Calendar[]
  searchTerm?: string
}

@Injectable()
export class AdminUserCalendarCreateStore extends ComponentStore<UserCalendarCreateState> {
  constructor(private readonly data: WebCoreDataAccessService, private readonly router: Router) {
    super({ loading: false })
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly item$ = this.select((s) => s.item)
  readonly users$ = this.select((s) => s.users)
  readonly calendars$ = this.select((s) => s.calendars)
  readonly vm$ = this.select(
    this.errors$,
    this.loading$,
    this.item$,
    this.users$,
    this.calendars$,
    (errors, loading, item, users, calendars) => ({
      errors,
      loading,
      item,
      users,
      calendars,
    }),
  )

  readonly filterUsers = this.effect<string>((filter$) =>
    filter$.pipe(
      switchMap((term) =>
        this.data
          .adminUsers({
            paging: {
              limit: 10,
              skip: 0,
            },
          })
          .pipe(
            tapResponse(
              (res: any) => {
                console.log(res)
                let users = res.data.users.map((user) => {
                  user.name = user.firstName + ' ' + user.lastName
                  return user
                })
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

  readonly filterCalendars = this.effect<string>((filter$) =>
    filter$.pipe(
      switchMap((term) =>
        this.data.adminCalendars({ input: { name: term } }).pipe(
          tapResponse(
            (res: any) => {
              let calendars = res.data.items.map((calendar) => {
                calendar.name = calendar.title
                return calendar
              })
              return this.patchState({ calendars: calendars })
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

  readonly createUserCalendarEffect = this.effect<AdminCreateUserCalendarInput>((input$) =>
    input$.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap((input) =>
        this.data.adminCreateUserCalendar({ input }).pipe(
          tapResponse(
            (res) => {
              this.patchState({ item: res.data.created, errors: res.errors, loading: false })
              return this.router.navigate(['/admin/user-calendars', res.data?.created?.id])
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
