import { Injectable } from '@angular/core'
import {
  WebCoreDataAccessService,
  AdminListCalendarWeekdayInput,
  CalendarWeekday,
} from '@calendar/web/core/data-access'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { switchMap, tap, withLatestFrom } from 'rxjs/operators'

export interface CalendarWeekdayListState {
  input: AdminListCalendarWeekdayInput
  errors?: any
  loading?: boolean
  items?: CalendarWeekday[]
}

@Injectable()
export class AdminCalendarWeekdayListStore extends ComponentStore<CalendarWeekdayListState> {
  constructor(private readonly data: WebCoreDataAccessService) {
    super({ input: { skip: 0, limit: 10 } })
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly input$ = this.select((s) => s.input)
  readonly items$ = this.select((s) => s.items)
  readonly vm$ = this.select(
    this.errors$,
    this.loading$,
    this.input$,
    this.items$,
    (errors, loading, input, items) => ({
      errors,
      loading,
      input,
      items,
    }),
  )

  readonly loadCalendarWeekdaysEffect = this.effect(($) =>
    $.pipe(
      tap(() => this.patchState({ loading: true })),
      withLatestFrom(this.input$),
      switchMap(([_, input]) =>
        this.data.adminCalendarWeekdays({ input }).pipe(
          tapResponse(
            (res) => {
              console.log(res.data.items)
              this.patchState({ items: res.data.items, errors: res.errors, loading: false })
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
