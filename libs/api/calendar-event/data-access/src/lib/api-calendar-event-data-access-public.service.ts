import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@calendar/api/core/data-access'

import { AdminListCalendarEventInput } from './dto/admin-list-calendar-event.input'

@Injectable()
export class ApiCalendarEventDataAccessPublicService {
  constructor(private readonly data: ApiCoreDataAccessService) {}
}
