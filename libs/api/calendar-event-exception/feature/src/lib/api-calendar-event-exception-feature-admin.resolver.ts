import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import {
  AdminCreateCalendarEventExceptionInput,
  AdminListCalendarEventExceptionInput,
  AdminUpdateCalendarEventExceptionInput,
  ApiCalendarEventExceptionDataAccessAdminService,
  CalendarEventException,
} from '@calendar/api/calendar-event-exception/data-access'
import { CorePaging } from '@calendar/api/core/data-access'
import { CtxUser, GqlAuthAdminGuard } from '@calendar/api/auth/util'
import { User } from '@calendar/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiCalendarEventExceptionFeatureAdminResolver {
  constructor(private readonly service: ApiCalendarEventExceptionDataAccessAdminService) {}

  @Query(() => [CalendarEventException], { nullable: true })
  adminCalendarEventExceptions(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListCalendarEventExceptionInput, nullable: true })
    input?: AdminListCalendarEventExceptionInput,
  ) {
    return this.service.adminCalendarEventExceptions(admin.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountCalendarEventExceptions(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListCalendarEventExceptionInput, nullable: true })
    input?: AdminListCalendarEventExceptionInput,
  ) {
    return this.service.adminCountCalendarEventExceptions(admin.id, input)
  }

  @Query(() => CalendarEventException, { nullable: true })
  adminCalendarEventException(
    @CtxUser() admin: User,
    @Args('calendarEventExceptionId') calendarEventExceptionId: string,
  ) {
    return this.service.adminCalendarEventException(admin.id, calendarEventExceptionId)
  }

  @Mutation(() => CalendarEventException, { nullable: true })
  adminCreateCalendarEventException(
    @CtxUser() admin: User,
    @Args('input') input: AdminCreateCalendarEventExceptionInput,
  ) {
    return this.service.adminCreateCalendarEventException(admin.id, input)
  }

  @Mutation(() => CalendarEventException, { nullable: true })
  adminUpdateCalendarEventException(
    @CtxUser() admin: User,
    @Args('calendarEventExceptionId') calendarEventExceptionId: string,
    @Args('input') input: AdminUpdateCalendarEventExceptionInput,
  ) {
    return this.service.adminUpdateCalendarEventException(admin.id, calendarEventExceptionId, input)
  }

  @Mutation(() => CalendarEventException, { nullable: true })
  adminDeleteCalendarEventException(
    @CtxUser() admin: User,
    @Args('calendarEventExceptionId') calendarEventExceptionId: string,
  ) {
    return this.service.adminDeleteCalendarEventException(admin.id, calendarEventExceptionId)
  }
}
