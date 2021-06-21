import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@calendar/api/core/data-access'
import { UserCreateTransactionInput } from './dto/user-create-transaction.input'
import { UserListTransactionInput } from './dto/user-list-transaction.input'
import { UserUpdateTransactionInput } from './dto/user-update-transaction.input'

@Injectable()
export class ApiTransactionDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  async userTransactions(userId: string, input?: UserListTransactionInput) {
    return this.data.transaction.findMany({
      take: input?.limit,
      skip: input?.skip,
    })
  }

  async userCountTransactions(userId: string, input?: UserListTransactionInput): Promise<CorePaging> {
    const total = await this.data.transaction.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  async userTransaction(userId: string, transactionId) {
    return this.data.transaction.findUnique({ where: { id: transactionId } })
  }

  async userCreateTransaction(userId: string, input: UserCreateTransactionInput) {
    return this.data.transaction.create({
      data: {
        investmentId: input.investmentId,
        name: input.name,
        transactionAmount: input.transactionAmount,
        rollingBalance: input.rollingBalance,
        transactionDate: input.transactionDate,
        daysOfInterest: input.daysOfInterest,
        interestAccrued: input.interestAccrued,
        nextAdvanceDate: input.nextAdvanceDate,
      },
    })
  }

  async userUpdateTransaction(userId: string, transactionId, input: UserUpdateTransactionInput) {
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
        nextAdvanceDate: input.nextAdvanceDate,
      },
    })
  }

  async userDeleteTransaction(adminId: string, transactionId) {
    return this.data.transaction.delete({ where: { id: transactionId } })
  }
}
