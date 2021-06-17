
import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@calendar/api/core/data-access'

import { ApiInvestmentDataAccessAdminService } from './api-investment-data-access-admin.service'
import { ApiInvestmentDataAccessUserService } from './api-investment-data-access-user.service'
import { ApiInvestmentDataAccessPublicService } from './api-investment-data-access-public.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [ApiInvestmentDataAccessAdminService, ApiInvestmentDataAccessUserService, ApiInvestmentDataAccessPublicService],
  exports: [ApiInvestmentDataAccessAdminService, ApiInvestmentDataAccessUserService, ApiInvestmentDataAccessPublicService],
})
export class ApiInvestmentDataAccessModule {}
