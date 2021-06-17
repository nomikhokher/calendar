
import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@calendar/api/core/data-access'

import { AdminListCalendarWeekdayInput } from './dto/admin-list-calendar-weekday.input'

@Injectable()
export class ApiCalendarWeekdayDataAccessPublicService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

}

