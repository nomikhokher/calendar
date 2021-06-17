
import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@calendar/api/core/data-access'

import { ApiCalendarEventDataAccessAdminService } from './api-calendar-event-data-access-admin.service'
import { ApiCalendarEventDataAccessUserService } from './api-calendar-event-data-access-user.service'
import { ApiCalendarEventDataAccessPublicService } from './api-calendar-event-data-access-public.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [ApiCalendarEventDataAccessAdminService, ApiCalendarEventDataAccessUserService, ApiCalendarEventDataAccessPublicService],
  exports: [ApiCalendarEventDataAccessAdminService, ApiCalendarEventDataAccessUserService, ApiCalendarEventDataAccessPublicService],
})
export class ApiCalendarEventDataAccessModule {}
