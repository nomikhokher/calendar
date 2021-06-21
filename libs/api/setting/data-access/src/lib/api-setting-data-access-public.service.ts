import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@calendar/api/core/data-access'

import { AdminListSettingInput } from './dto/admin-list-setting.input'

@Injectable()
export class ApiSettingDataAccessPublicService {
  constructor(private readonly data: ApiCoreDataAccessService) {}
}
