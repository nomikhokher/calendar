import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@calendar/api/core/data-access'

import { AdminCreateSettingInput } from './dto/admin-create-setting.input'
import { AdminListSettingInput } from './dto/admin-list-setting.input'
import { AdminUpdateSettingInput } from './dto/admin-update-setting.input'

@Injectable()
export class ApiSettingDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  async adminSettings(adminId: string, input?: AdminListSettingInput) {
    await this.data.ensureAdminUser(adminId)

    return this.data.setting.findMany({
      take: input?.limit,
      skip: input?.skip,
    })
  }

  async adminCountSettings(adminId: string, input?: AdminListSettingInput): Promise<CorePaging> {
    await this.data.ensureAdminUser(adminId)

    const total = await this.data.setting.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  async adminSetting(adminId: string, settingId) {
    await this.data.ensureAdminUser(adminId)

    return this.data.setting.findUnique({ where: { id: settingId } })
  }

  async adminCreateSetting(adminId: string, input: AdminCreateSettingInput) {
    await this.data.ensureAdminUser(adminId)

    return this.data.setting.create({
      data: {
        dateFormat: input.dateFormat,
        timeFormat: input.timeFormat,
        startWeekOn: input.startWeekOn,
      },
    })
  }

  async adminUpdateSetting(adminId: string, settingId, input: AdminUpdateSettingInput) {
    await this.data.ensureAdminUser(adminId)

    return this.data.setting.update({
      where: { id: settingId },
      data: {
        dateFormat: input.dateFormat,
        timeFormat: input.timeFormat,
        startWeekOn: input.startWeekOn,
      },
    })
  }

  async adminDeleteSetting(adminId: string, settingId) {
    await this.data.ensureAdminUser(adminId)
    return this.data.setting.delete({ where: { id: settingId } })
  }
}
