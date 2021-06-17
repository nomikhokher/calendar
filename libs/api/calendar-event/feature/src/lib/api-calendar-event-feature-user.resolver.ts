
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import {
  UserCreateCalendarEventInput,
  UserListCalendarEventInput,
  UserUpdateCalendarEventInput,
  ApiCalendarEventDataAccessUserService,
  CalendarEvent,
} from '@calendar/api/calendar-event/data-access'
import { CorePaging } from '@calendar/api/core/data-access'
import {
  CtxUser,
  GqlAuthGuard
} from '@calendar/api/auth/util'
import { User } from '@calendar/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiCalendarEventFeatureUserResolver {
  constructor(private readonly service: ApiCalendarEventDataAccessUserService) {}

  @Query(() => [CalendarEvent], { nullable: true })
  userCalendarEvents(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListCalendarEventInput, nullable: true }) input?: UserListCalendarEventInput,
  ) {
    return this.service.userCalendarEvents(user.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  userCountCalendarEvents(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListCalendarEventInput, nullable: true }) input?: UserListCalendarEventInput,
  ) {
    return this.service.userCountCalendarEvents(user.id, input)
  }

  @Query(() => CalendarEvent, { nullable: true })
  userCalendarEvent(@CtxUser() user: User, @Args('calendarEventId') calendarEventId: string) {
    return this.service.userCalendarEvent(user.id, calendarEventId)
  }

  @Mutation(() => CalendarEvent, { nullable: true })
  userCreateCalendarEvent(@CtxUser() user: User, @Args('input') input: UserCreateCalendarEventInput,) {
    return this.service.userCreateCalendarEvent(user.id, input)
  }

  @Mutation(() => CalendarEvent, { nullable: true })
  userUpdateCalendarEvent(
    @CtxUser() user: User,
    @Args('calendarEventId') calendarEventId: string,
    @Args('input') input: UserUpdateCalendarEventInput,
  ) {
    return this.service.userUpdateCalendarEvent(user.id, calendarEventId, input)
  }

  @Mutation(() => CalendarEvent, { nullable: true })
  userDeleteCalendarEvent(@CtxUser() user: User, @Args('calendarEventId') calendarEventId: string) {
    return this.service.userDeleteCalendarEvent(user.id, calendarEventId)
  }
}

