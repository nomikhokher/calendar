
import { Module } from '@nestjs/common'
import { ApiCalendarEventExceptionDataAccessModule } from '@calendar/api/calendar-event-exception/data-access'

import { ApiCalendarEventExceptionFeatureAdminResolver } from './api-calendar-event-exception-feature-admin.resolver'
import { ApiCalendarEventExceptionFeaturePublicResolver } from './api-calendar-event-exception-feature-public.resolver'
import { ApiCalendarEventExceptionFeatureUserResolver } from './api-calendar-event-exception-feature-user.resolver'

@Module({
  imports: [ApiCalendarEventExceptionDataAccessModule],
  providers: [
        ApiCalendarEventExceptionFeatureAdminResolver,
        ApiCalendarEventExceptionFeaturePublicResolver,
        ApiCalendarEventExceptionFeatureUserResolver
    ],
})
export class ApiCalendarEventExceptionFeatureModule {}
