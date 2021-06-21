import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@calendar/api/core/data-access'

import { ApiCalendarEventExceptionDataAccessAdminService } from './api-calendar-event-exception-data-access-admin.service'
import { ApiCalendarEventExceptionDataAccessUserService } from './api-calendar-event-exception-data-access-user.service'
import { ApiCalendarEventExceptionDataAccessPublicService } from './api-calendar-event-exception-data-access-public.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [
    ApiCalendarEventExceptionDataAccessAdminService,
    ApiCalendarEventExceptionDataAccessUserService,
    ApiCalendarEventExceptionDataAccessPublicService,
  ],
  exports: [
    ApiCalendarEventExceptionDataAccessAdminService,
    ApiCalendarEventExceptionDataAccessUserService,
    ApiCalendarEventExceptionDataAccessPublicService,
  ],
})
export class ApiCalendarEventExceptionDataAccessModule {}
