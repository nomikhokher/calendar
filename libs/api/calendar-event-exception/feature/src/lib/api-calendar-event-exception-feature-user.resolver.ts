
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import {
  UserCreateCalendarEventExceptionInput,
  UserListCalendarEventExceptionInput,
  UserUpdateCalendarEventExceptionInput,
  ApiCalendarEventExceptionDataAccessUserService,
  CalendarEventException,
} from '@calendar/api/calendar-event-exception/data-access'
import { CorePaging } from '@calendar/api/core/data-access'
import {
  CtxUser,
  GqlAuthGuard
} from '@calendar/api/auth/util'
import { User } from '@calendar/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiCalendarEventExceptionFeatureUserResolver {
  constructor(private readonly service: ApiCalendarEventExceptionDataAccessUserService) {}

  @Query(() => [CalendarEventException], { nullable: true })
  userCalendarEventExceptions(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListCalendarEventExceptionInput, nullable: true }) input?: UserListCalendarEventExceptionInput,
  ) {
    return this.service.userCalendarEventExceptions(user.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  userCountCalendarEventExceptions(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListCalendarEventExceptionInput, nullable: true }) input?: UserListCalendarEventExceptionInput,
  ) {
    return this.service.userCountCalendarEventExceptions(user.id, input)
  }

  @Query(() => CalendarEventException, { nullable: true })
  userCalendarEventException(@CtxUser() user: User, @Args('calendarEventExceptionId') calendarEventExceptionId: string) {
    return this.service.userCalendarEventException(user.id, calendarEventExceptionId)
  }

  @Mutation(() => CalendarEventException, { nullable: true })
  userCreateCalendarEventException(@CtxUser() user: User, @Args('input') input: UserCreateCalendarEventExceptionInput,) {
    return this.service.userCreateCalendarEventException(user.id, input)
  }

  @Mutation(() => CalendarEventException, { nullable: true })
  userUpdateCalendarEventException(
    @CtxUser() user: User,
    @Args('calendarEventExceptionId') calendarEventExceptionId: string,
    @Args('input') input: UserUpdateCalendarEventExceptionInput,
  ) {
    return this.service.userUpdateCalendarEventException(user.id, calendarEventExceptionId, input)
  }

  @Mutation(() => CalendarEventException, { nullable: true })
  userDeleteCalendarEventException(@CtxUser() user: User, @Args('calendarEventExceptionId') calendarEventExceptionId: string) {
    return this.service.userDeleteCalendarEventException(user.id, calendarEventExceptionId)
  }
}

