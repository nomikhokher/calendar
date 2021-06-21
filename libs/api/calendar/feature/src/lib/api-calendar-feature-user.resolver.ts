import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import {
  UserCreateCalendarInput,
  UserListCalendarInput,
  UserUpdateCalendarInput,
  ApiCalendarDataAccessUserService,
  Calendar,
} from '@calendar/api/calendar/data-access'
import { CorePaging } from '@calendar/api/core/data-access'
import { CtxUser, GqlAuthGuard } from '@calendar/api/auth/util'
import { User } from '@calendar/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiCalendarFeatureUserResolver {
  constructor(private readonly service: ApiCalendarDataAccessUserService) {}

  @Query(() => [Calendar], { nullable: true })
  userCalendars(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListCalendarInput, nullable: true }) input?: UserListCalendarInput,
  ) {
    return this.service.userCalendars(user.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  userCountCalendars(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListCalendarInput, nullable: true }) input?: UserListCalendarInput,
  ) {
    return this.service.userCountCalendars(user.id, input)
  }

  @Query(() => Calendar, { nullable: true })
  userCalendar(@CtxUser() user: User, @Args('calendarId') calendarId: string) {
    return this.service.userCalendar(user.id, calendarId)
  }

  @Mutation(() => Calendar, { nullable: true })
  userCreateCalendar(@CtxUser() user: User, @Args('input') input: UserCreateCalendarInput) {
    return this.service.userCreateCalendar(user.id, input)
  }

  @Mutation(() => Calendar, { nullable: true })
  userUpdateCalendar(
    @CtxUser() user: User,
    @Args('calendarId') calendarId: string,
    @Args('input') input: UserUpdateCalendarInput,
  ) {
    return this.service.userUpdateCalendar(user.id, calendarId, input)
  }

  @Mutation(() => Calendar, { nullable: true })
  userDeleteCalendar(@CtxUser() user: User, @Args('calendarId') calendarId: string) {
    return this.service.userDeleteCalendar(user.id, calendarId)
  }
}
