
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { CorePaging } from '@calendar/api/core/data-access'
import {
  CtxUser,
} from '@calendar/api/auth/util'

import {
  ApiCalendarEventDataAccessPublicService,
  CalendarEvent,
} from '@calendar/api/calendar-event/data-access'

import { User } from '@calendar/api/user/data-access'

@Resolver()
export class ApiCalendarEventFeaturePublicResolver {
  constructor(private readonly service: ApiCalendarEventDataAccessPublicService) {}
           
}

