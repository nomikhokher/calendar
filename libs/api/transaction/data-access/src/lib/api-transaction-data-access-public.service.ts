
import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@calendar/api/core/data-access'

import { AdminListTransactionInput } from './dto/admin-list-transaction.input'

@Injectable()
export class ApiTransactionDataAccessPublicService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

}

