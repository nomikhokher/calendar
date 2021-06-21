import { Module } from '@nestjs/common'
import { ApiCalendarEventDataAccessModule } from '@calendar/api/calendar-event/data-access'

import { ApiCalendarEventFeatureAdminResolver } from './api-calendar-event-feature-admin.resolver'
import { ApiCalendarEventFeaturePublicResolver } from './api-calendar-event-feature-public.resolver'
import { ApiCalendarEventFeatureUserResolver } from './api-calendar-event-feature-user.resolver'

@Module({
  imports: [ApiCalendarEventDataAccessModule],
  providers: [
    ApiCalendarEventFeatureAdminResolver,
    ApiCalendarEventFeaturePublicResolver,
    ApiCalendarEventFeatureUserResolver,
  ],
})
export class ApiCalendarEventFeatureModule {}
