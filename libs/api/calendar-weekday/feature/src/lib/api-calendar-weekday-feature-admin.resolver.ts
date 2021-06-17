
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import {
  AdminCreateCalendarWeekdayInput,
  AdminListCalendarWeekdayInput,
  AdminUpdateCalendarWeekdayInput,
  ApiCalendarWeekdayDataAccessAdminService,
  CalendarWeekday,
} from '@calendar/api/calendar-weekday/data-access'
import { CorePaging } from '@calendar/api/core/data-access'
import {
  CtxUser, GqlAuthAdminGuard,
} from '@calendar/api/auth/util'
import { User } from '@calendar/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiCalendarWeekdayFeatureAdminResolver {
  constructor(private readonly service: ApiCalendarWeekdayDataAccessAdminService) {}

  @Query(() => [CalendarWeekday], { nullable: true })
  adminCalendarWeekdays(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListCalendarWeekdayInput, nullable: true }) input?: AdminListCalendarWeekdayInput,
  ) {
    return this.service.adminCalendarWeekdays(admin.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountCalendarWeekdays(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListCalendarWeekdayInput, nullable: true }) input?: AdminListCalendarWeekdayInput,
  ) {
    return this.service.adminCountCalendarWeekdays(admin.id, input)
  }

  @Query(() => CalendarWeekday, { nullable: true })
  adminCalendarWeekday(@CtxUser() admin: User, @Args('calendarWeekdayId') calendarWeekdayId: string) {
    return this.service.adminCalendarWeekday(admin.id, calendarWeekdayId)
  }

  @Mutation(() => CalendarWeekday, { nullable: true })
  adminCreateCalendarWeekday(@CtxUser() admin: User, @Args('input') input: AdminCreateCalendarWeekdayInput,) {
    return this.service.adminCreateCalendarWeekday(admin.id, input)
  }

  @Mutation(() => CalendarWeekday, { nullable: true })
  adminUpdateCalendarWeekday(
    @CtxUser() admin: User,
    @Args('calendarWeekdayId') calendarWeekdayId: string,
    @Args('input') input: AdminUpdateCalendarWeekdayInput,
  ) {
    return this.service.adminUpdateCalendarWeekday(admin.id, calendarWeekdayId, input)
  }

  @Mutation(() => CalendarWeekday, { nullable: true })
  adminDeleteCalendarWeekday(@CtxUser() admin: User, @Args('calendarWeekdayId') calendarWeekdayId: string) {
    return this.service.adminDeleteCalendarWeekday(admin.id, calendarWeekdayId)
  }
}

