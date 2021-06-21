import { Injectable } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import {
  AdminUpdateCalendarEventExceptionInput,
  WebCoreDataAccessService,
  CalendarEventException,
} from '@calendar/web/core/data-access'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { switchMap, tap, withLatestFrom, pluck } from 'rxjs/operators'

export interface CalendarEventExceptionUpdateState {
  errors?: any
  loading?: boolean
  item?: CalendarEventException

  searchTerm?: string
}

@Injectable()
export class AdminCalendarEventExceptionEditStore extends ComponentStore<CalendarEventExceptionUpdateState> {
  constructor(
    private readonly data: WebCoreDataAccessService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {
    super({ loading: false })

    this.loadCalendarEventExceptionEffect(route.params.pipe(pluck('calendarEventExceptionId')))
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

  readonly loadCalendarEventExceptionEffect = this.effect<string>((calendarEventExceptionId$) =>
    calendarEventExceptionId$.pipe(
      tap(() => this.setState({ loading: true })),
      switchMap((calendarEventExceptionId) =>
        this.data.adminCalendarEventException({ calendarEventExceptionId }).pipe(
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

  readonly updateCalendarEventExceptionEffect = this.effect<AdminUpdateCalendarEventExceptionInput>((input$) =>
    input$.pipe(
      tap(() => this.patchState({ loading: true })),
      withLatestFrom(this.item$),
      switchMap(([input, item]) =>
        this.data.adminUpdateCalendarEventException({ input, calendarEventExceptionId: item.id }).pipe(
          tapResponse(
            (res) => {
              this.patchState({ item: res.data.updated, errors: res.errors, loading: false })
              return this.router.navigate(['/admin/calendar-event-exceptions', res.data?.updated?.id])
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
