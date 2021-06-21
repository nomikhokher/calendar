import { Module } from '@nestjs/common'
import { ApiInvestmentDataAccessModule } from '@calendar/api/investment/data-access'

import { ApiInvestmentFeatureAdminResolver } from './api-investment-feature-admin.resolver'
import { ApiInvestmentFeaturePublicResolver } from './api-investment-feature-public.resolver'
import { ApiInvestmentFeatureUserResolver } from './api-investment-feature-user.resolver'

@Module({
  imports: [ApiInvestmentDataAccessModule],
  providers: [ApiInvestmentFeatureAdminResolver, ApiInvestmentFeaturePublicResolver, ApiInvestmentFeatureUserResolver],
})
export class ApiInvestmentFeatureModule {}
