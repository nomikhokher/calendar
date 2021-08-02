import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@calendar/api/core/data-access'
import { UserCreateSettingInput } from './dto/user-create-setting.input'
import { UserListSettingInput } from './dto/user-list-setting.input'
import { UserUpdateSettingInput } from './dto/user-update-setting.input'

@Injectable()
export class ApiSettingDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  async userSettings(userId: string, input?: UserListSettingInput) {
    return this.data.setting.findMany({
      take: input?.limit,
      skip: input?.skip,
    })
  }

  async userCountSettings(userId: string, input?: UserListSettingInput): Promise<CorePaging> {
    const total = await this.data.setting.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  async userSetting(userId: string, settingId) {
    return this.data.setting.findUnique({ where: { id: settingId } })
  }

  async userCreateSetting(userId: string, input: UserCreateSettingInput) {
    return this.data.setting.create({
      data: {
        dateFormat: input.dateFormat,
        timeFormat: input.timeFormat,
        startWeekOn: input.startWeekOn,
      },
    })
  }

  async userUpdateSetting(userId: string, settingId, input: UserUpdateSettingInput) {
    return this.data.setting.update({
      where: { id: settingId },
      data: {
        dateFormat: input.dateFormat,
        timeFormat: input.timeFormat,
        startWeekOn: input.startWeekOn,
      },
    })
  }

  async userDeleteSetting(adminId: string, settingId) {
    return this.data.setting.delete({ where: { id: settingId } })
  }
}
