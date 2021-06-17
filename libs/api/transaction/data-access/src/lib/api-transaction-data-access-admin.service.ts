
import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@calendar/api/core/data-access'

import { AdminCreateTransactionInput } from './dto/admin-create-transaction.input'
import { AdminListTransactionInput } from './dto/admin-list-transaction.input'
import { AdminUpdateTransactionInput } from './dto/admin-update-transaction.input'

@Injectable()
export class ApiTransactionDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  async adminTransactions(adminId: string, input?: AdminListTransactionInput) {
    await this.data.ensureAdminUser(adminId)

    return this.data.transaction.findMany({
      where: { name: { contains: input?.name} },
      take: input?.limit,
      skip: input?.skip,
    })
  }

  async adminCountTransactions(adminId: string, input?: AdminListTransactionInput): Promise<CorePaging> {
    await this.data.ensureAdminUser(adminId)

    const total = await this.data.transaction.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  async adminTransaction(adminId: string, transactionId) {
    await this.data.ensureAdminUser(adminId)

    return this.data.transaction.findUnique({ where: { id: transactionId } })
  }

  async adminCreateTransaction(adminId: string, input: AdminCreateTransactionInput) {
    await this.data.ensureAdminUser(adminId)

    return this.data.transaction.create({
      data: { 
      investmentId: input.investmentId,
      name: input.name,
      transactionAmount: input.transactionAmount,
      rollingBalance: input.rollingBalance,
      transactionDate: input.transactionDate,
      daysOfInterest: input.daysOfInterest,
      interestAccrued: input.interestAccrued,
      nextAdvanceDate: input.nextAdvanceDate
},
    })
  }

  async adminUpdateTransaction(adminId: string, transactionId, input: AdminUpdateTransactionInput) {
    await this.data.ensureAdminUser(adminId)

    return this.data.transaction.update({
      where: { id: transactionId },
      data: {
      investmentId: input.investmentId,
      name: input.name,
      transactionAmount: input.transactionAmount,
      rollingBalance: input.rollingBalance,
      transactionDate: input.transactionDate,
      daysOfInterest: input.daysOfInterest,
      interestAccrued: input.interestAccrued,
      nextAdvanceDate: input.nextAdvanceDate
},
    })
  }

  async adminDeleteTransaction(adminId: string, transactionId) {
    await this.data.ensureAdminUser(adminId)

    return this.data.transaction.delete({ where: { id: transactionId } })
  }
}

