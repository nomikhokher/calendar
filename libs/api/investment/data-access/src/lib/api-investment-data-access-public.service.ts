import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@calendar/api/core/data-access'

import { AdminListInvestmentInput } from './dto/admin-list-investment.input'

@Injectable()
export class ApiInvestmentDataAccessPublicService {
  constructor(private readonly data: ApiCoreDataAccessService) {}
}
