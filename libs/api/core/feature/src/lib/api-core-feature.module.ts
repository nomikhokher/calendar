import { GraphQLIntercomModule } from '@kikstart-playground/graphql-intercom'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { PubSub } from 'graphql-subscriptions'
import { join } from 'path'
import { ApiAccountFeatureModule } from '@calendar/api/account/feature'
import { ApiAuthFeatureModule } from '@calendar/api/auth/feature'
import { ApiUserFeatureModule } from '@calendar/api/user/feature'
import { ApiSettingFeatureModule } from '@calendar/api/setting/feature'

import { ApiCalendarFeatureModule } from '@calendar/api/calendar/feature'
import { ApiCalendarEventFeatureModule } from '@calendar/api/calendar-event/feature'
import { ApiCalendarEventExceptionFeatureModule } from '@calendar/api/calendar-event-exception/feature'
import { ApiCalendarWeekdayFeatureModule } from '@calendar/api/calendar-weekday/feature'
import { ApiUserCalendarFeatureModule } from '@calendar/api/user-calendar/feature'

import { ApiCoreFeatureController } from './api-core-feature.controller'
import { ApiCoreFeatureResolver } from './api-core-feature.resolver'
import { ApiCoreFeatureService } from './api-core-feature.service'

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'api-schema.graphql'),
      context: ({ req, res }) => ({ req, res }),
      installSubscriptionHandlers: true,
      introspection: process.env.GRAPHQL_INTROSPECTION === 'true',
      playground: {
        settings: {
          'request.credentials': 'include',
        },
      },
      sortSchema: true,
    }),
    GraphQLIntercomModule.forRoot({ pubSub: new PubSub() }),
    ApiAccountFeatureModule,
    ApiAuthFeatureModule,
    ApiUserFeatureModule,
    ApiSettingFeatureModule,
    ApiCalendarFeatureModule,
    ApiCalendarEventFeatureModule,
    ApiCalendarEventExceptionFeatureModule,
    ApiCalendarWeekdayFeatureModule,
    ApiSettingFeatureModule,
    ApiUserCalendarFeatureModule,
  ],
  controllers: [ApiCoreFeatureController],
  providers: [ApiCoreFeatureResolver, ApiCoreFeatureService],
  exports: [ApiCoreFeatureService],
})
export class ApiCoreFeatureModule {}
