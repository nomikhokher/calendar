
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { CorePaging } from '@calendar/api/core/data-access'
import {
  CtxUser,
} from '@calendar/api/auth/util'

import {
  ApiSettingDataAccessPublicService,
  Setting,
} from '@calendar/api/setting/data-access'

import { User } from '@calendar/api/user/data-access'

@Resolver()
export class ApiSettingFeaturePublicResolver {
  constructor(private readonly service: ApiSettingDataAccessPublicService) {}
           
}

