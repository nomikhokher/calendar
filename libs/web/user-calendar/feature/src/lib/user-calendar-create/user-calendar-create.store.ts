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
import { Subject, timer } from 'rxjs'
import { map, switchMap, takeUntil, tap } from 'rxjs/operators'

export interface UserCalendarCreateState {
  errors?: any
  loading?: boolean
  item?: UserCalendar
  users?: User[]
  calendars?: Calendar[]
  searchTerm?: string
}

@Injectable()
export class UserCalendarCreateStore extends ComponentStore<UserCalendarCreateState> {
  constructor(private readonly data: WebCoreDataAccessService, private readonly router: Router) {
    super({ loading: false })
  }

  readonly timeSubject = new Subject()
  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly item$ = this.select((s) => s.item)
  readonly users$ = this.select((s) => s.users)
  readonly calendars$ = this.select((s) => s.calendars)
  public calendars: any[] = []
  public calendarsData: any[]

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
        this.data.accountProfile({}, { fetchPolicy: 'no-cache' }).pipe(
          tapResponse(
            (res: any) => {
              let user = []
              user.push(res.data.accountProfile)
              let users = user.map((user) => {
                user.name = user.id
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
        this.data.userUserCalendars().pipe(
          tapResponse(
            (res: any) => {
              this.calendars = []
              this.calendarsData = []
              res.data.items.forEach((calendarId) => {
                this.data
                  .userCalendar({ calendarId: calendarId.calendarId })
                  .subscribe((res) => this.calendars.push(res.data.item))
              })
              timer(500)
                .pipe(takeUntil(this.timeSubject))
                .subscribe((data) => {
                  this.calendarsData = this.calendars.map((calendar) => {
                    calendar.name = calendar.title
                    return calendar
                  })
                  return this.patchState({ calendars: this.calendarsData })
                })
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
        this.data.userCreateUserCalendar({ input }).pipe(
          tapResponse(
            (res) => {
              this.patchState({ item: res.data.created, errors: res.errors, loading: false })
              return this.router.navigate(['/user-calendars', res.data?.created?.id])
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
