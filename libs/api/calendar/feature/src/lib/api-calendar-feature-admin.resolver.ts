import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import {
  AdminCreateCalendarInput,
  AdminListCalendarInput,
  AdminUpdateCalendarInput,
  ApiCalendarDataAccessAdminService,
  Calendar,
} from '@calendar/api/calendar/data-access'
import { CorePaging } from '@calendar/api/core/data-access'
import { CtxUser, GqlAuthAdminGuard } from '@calendar/api/auth/util'
import { User } from '@calendar/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiCalendarFeatureAdminResolver {
  constructor(private readonly service: ApiCalendarDataAccessAdminService) {}

  @Query(() => [Calendar], { nullable: true })
  adminCalendars(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListCalendarInput, nullable: true }) input?: AdminListCalendarInput,
  ) {
    return this.service.adminCalendars(admin.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountCalendars(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListCalendarInput, nullable: true }) input?: AdminListCalendarInput,
  ) {
    return this.service.adminCountCalendars(admin.id, input)
  }

  @Query(() => Calendar, { nullable: true })
  adminCalendar(@CtxUser() admin: User, @Args('calendarId') calendarId: string) {
    return this.service.adminCalendar(admin.id, calendarId)
  }

  @Mutation(() => Calendar, { nullable: true })
  adminCreateCalendar(@CtxUser() admin: User, @Args('input') input: AdminCreateCalendarInput) {
    return this.service.adminCreateCalendar(admin.id, input)
  }

  @Mutation(() => Calendar, { nullable: true })
  adminUpdateCalendar(
    @CtxUser() admin: User,
    @Args('calendarId') calendarId: string,
    @Args('input') input: AdminUpdateCalendarInput,
  ) {
    return this.service.adminUpdateCalendar(admin.id, calendarId, input)
  }

  @Mutation(() => Calendar, { nullable: true })
  adminDeleteCalendar(@CtxUser() admin: User, @Args('calendarId') calendarId: string) {
    return this.service.adminDeleteCalendar(admin.id, calendarId)
  }
}
