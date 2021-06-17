
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { CorePaging } from '@calendar/api/core/data-access'
import {
  CtxUser,
} from '@calendar/api/auth/util'

import {
  ApiCalendarEventExceptionDataAccessPublicService,
  CalendarEventException,
} from '@calendar/api/calendar-event-exception/data-access'

import { User } from '@calendar/api/user/data-access'

@Resolver()
export class ApiCalendarEventExceptionFeaturePublicResolver {
  constructor(private readonly service: ApiCalendarEventExceptionDataAccessPublicService) {}
           
}

