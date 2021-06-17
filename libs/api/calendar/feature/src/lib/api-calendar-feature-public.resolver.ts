
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { CorePaging } from '@calendar/api/core/data-access'
import {
  CtxUser,
} from '@calendar/api/auth/util'

import {
  ApiCalendarDataAccessPublicService,
  Calendar,
} from '@calendar/api/calendar/data-access'

import { User } from '@calendar/api/user/data-access'

@Resolver()
export class ApiCalendarFeaturePublicResolver {
  constructor(private readonly service: ApiCalendarDataAccessPublicService) {}
           
}

