import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import {
  UserCreateSettingInput,
  UserListSettingInput,
  UserUpdateSettingInput,
  ApiSettingDataAccessUserService,
  Setting,
} from '@calendar/api/setting/data-access'
import { CorePaging } from '@calendar/api/core/data-access'
import { CtxUser, GqlAuthGuard } from '@calendar/api/auth/util'
import { User } from '@calendar/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiSettingFeatureUserResolver {
  constructor(private readonly service: ApiSettingDataAccessUserService) {}

  @Query(() => [Setting], { nullable: true })
  userSettings(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListSettingInput, nullable: true }) input?: UserListSettingInput,
  ) {
    return this.service.userSettings(user.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  userCountSettings(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListSettingInput, nullable: true }) input?: UserListSettingInput,
  ) {
    return this.service.userCountSettings(user.id, input)
  }

  @Query(() => Setting, { nullable: true })
  userSetting(@CtxUser() user: User, @Args('settingId') settingId: string) {
    return this.service.userSetting(user.id, settingId)
  }

  @Mutation(() => Setting, { nullable: true })
  userCreateSetting(@CtxUser() user: User, @Args('input') input: UserCreateSettingInput) {
    return this.service.userCreateSetting(user.id, input)
  }

  @Mutation(() => Setting, { nullable: true })
  userUpdateSetting(
    @CtxUser() user: User,
    @Args('settingId') settingId: string,
    @Args('input') input: UserUpdateSettingInput,
  ) {
    return this.service.userUpdateSetting(user.id, settingId, input)
  }

  @Mutation(() => Setting, { nullable: true })
  userDeleteSetting(@CtxUser() user: User, @Args('settingId') settingId: string) {
    return this.service.userDeleteSetting(user.id, settingId)
  }
}
