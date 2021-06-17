
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import {
  AdminCreateCalendarEventInput,
  AdminListCalendarEventInput,
  AdminUpdateCalendarEventInput,
  ApiCalendarEventDataAccessAdminService,
  CalendarEvent,
} from '@calendar/api/calendar-event/data-access'
import { CorePaging } from '@calendar/api/core/data-access'
import {
  CtxUser, GqlAuthAdminGuard,
} from '@calendar/api/auth/util'
import { User } from '@calendar/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiCalendarEventFeatureAdminResolver {
  constructor(private readonly service: ApiCalendarEventDataAccessAdminService) {}

  @Query(() => [CalendarEvent], { nullable: true })
  adminCalendarEvents(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListCalendarEventInput, nullable: true }) input?: AdminListCalendarEventInput,
  ) {
    return this.service.adminCalendarEvents(admin.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountCalendarEvents(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListCalendarEventInput, nullable: true }) input?: AdminListCalendarEventInput,
  ) {
    return this.service.adminCountCalendarEvents(admin.id, input)
  }

  @Query(() => CalendarEvent, { nullable: true })
  adminCalendarEvent(@CtxUser() admin: User, @Args('calendarEventId') calendarEventId: string) {
    return this.service.adminCalendarEvent(admin.id, calendarEventId)
  }

  @Mutation(() => CalendarEvent, { nullable: true })
  adminCreateCalendarEvent(@CtxUser() admin: User, @Args('input') input: AdminCreateCalendarEventInput,) {
    return this.service.adminCreateCalendarEvent(admin.id, input)
  }

  @Mutation(() => CalendarEvent, { nullable: true })
  adminUpdateCalendarEvent(
    @CtxUser() admin: User,
    @Args('calendarEventId') calendarEventId: string,
    @Args('input') input: AdminUpdateCalendarEventInput,
  ) {
    return this.service.adminUpdateCalendarEvent(admin.id, calendarEventId, input)
  }

  @Mutation(() => CalendarEvent, { nullable: true })
  adminDeleteCalendarEvent(@CtxUser() admin: User, @Args('calendarEventId') calendarEventId: string) {
    return this.service.adminDeleteCalendarEvent(admin.id, calendarEventId)
  }
}

