import { Module } from '@nestjs/common'
import { ApiTransactionDataAccessModule } from '@calendar/api/transaction/data-access'

import { ApiTransactionFeatureAdminResolver } from './api-transaction-feature-admin.resolver'
import { ApiTransactionFeaturePublicResolver } from './api-transaction-feature-public.resolver'
import { ApiTransactionFeatureUserResolver } from './api-transaction-feature-user.resolver'

@Module({
  imports: [ApiTransactionDataAccessModule],
  providers: [
    ApiTransactionFeatureAdminResolver,
    ApiTransactionFeaturePublicResolver,
    ApiTransactionFeatureUserResolver,
  ],
})
export class ApiTransactionFeatureModule {}
