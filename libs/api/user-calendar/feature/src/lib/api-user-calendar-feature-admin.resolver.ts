
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import {
  AdminCreateUserCalendarInput,
  AdminListUserCalendarInput,
  AdminUpdateUserCalendarInput,
  ApiUserCalendarDataAccessAdminService,
  UserCalendar,
} from '@calendar/api/user-calendar/data-access'
import { CorePaging } from '@calendar/api/core/data-access'
import {
  CtxUser, GqlAuthAdminGuard,
} from '@calendar/api/auth/util'
import { User } from '@calendar/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiUserCalendarFeatureAdminResolver {
  constructor(private readonly service: ApiUserCalendarDataAccessAdminService) {}

  @Query(() => [UserCalendar], { nullable: true })
  adminUserCalendars(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListUserCalendarInput, nullable: true }) input?: AdminListUserCalendarInput,
  ) {
    return this.service.adminUserCalendars(admin.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountUserCalendars(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListUserCalendarInput, nullable: true }) input?: AdminListUserCalendarInput,
  ) {
    return this.service.adminCountUserCalendars(admin.id, input)
  }

  @Query(() => UserCalendar, { nullable: true })
  adminUserCalendar(@CtxUser() admin: User, @Args('userCalendarId') userCalendarId: string) {
    return this.service.adminUserCalendar(admin.id, userCalendarId)
  }

  @Mutation(() => UserCalendar, { nullable: true })
  adminCreateUserCalendar(@CtxUser() admin: User, @Args('input') input: AdminCreateUserCalendarInput,) {
    return this.service.adminCreateUserCalendar(admin.id, input)
  }

  @Mutation(() => UserCalendar, { nullable: true })
  adminUpdateUserCalendar(
    @CtxUser() admin: User,
    @Args('userCalendarId') userCalendarId: string,
    @Args('input') input: AdminUpdateUserCalendarInput,
  ) {
    return this.service.adminUpdateUserCalendar(admin.id, userCalendarId, input)
  }

  @Mutation(() => UserCalendar, { nullable: true })
  adminDeleteUserCalendar(@CtxUser() admin: User, @Args('userCalendarId') userCalendarId: string) {
    return this.service.adminDeleteUserCalendar(admin.id, userCalendarId)
  }
}

