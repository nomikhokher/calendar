import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@calendar/api/core/data-access'

import { AdminListUserCalendarInput } from './dto/admin-list-user-calendar.input'

@Injectable()
export class ApiUserCalendarDataAccessPublicService {
  constructor(private readonly data: ApiCoreDataAccessService) {}
}
