import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@calendar/api/core/data-access'

import { ApiTransactionDataAccessAdminService } from './api-transaction-data-access-admin.service'
import { ApiTransactionDataAccessUserService } from './api-transaction-data-access-user.service'
import { ApiTransactionDataAccessPublicService } from './api-transaction-data-access-public.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [
    ApiTransactionDataAccessAdminService,
    ApiTransactionDataAccessUserService,
    ApiTransactionDataAccessPublicService,
  ],
  exports: [
    ApiTransactionDataAccessAdminService,
    ApiTransactionDataAccessUserService,
    ApiTransactionDataAccessPublicService,
  ],
})
export class ApiTransactionDataAccessModule {}
