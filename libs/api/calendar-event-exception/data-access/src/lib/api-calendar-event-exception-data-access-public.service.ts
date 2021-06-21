import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@calendar/api/core/data-access'

import { AdminListCalendarEventExceptionInput } from './dto/admin-list-calendar-event-exception.input'

@Injectable()
export class ApiCalendarEventExceptionDataAccessPublicService {
  constructor(private readonly data: ApiCoreDataAccessService) {}
}
