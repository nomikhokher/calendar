import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@calendar/api/core/data-access'
import { UserCreateInvestmentInput } from './dto/user-create-investment.input'
import { UserListInvestmentInput } from './dto/user-list-investment.input'
import { UserUpdateInvestmentInput } from './dto/user-update-investment.input'

@Injectable()
export class ApiInvestmentDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  async userInvestments(userId: string, input?: UserListInvestmentInput) {
    return this.data.investment.findMany({
      take: input?.limit,
      skip: input?.skip,
    })
  }

  async userCountInvestments(userId: string, input?: UserListInvestmentInput): Promise<CorePaging> {
    const total = await this.data.investment.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  async userInvestment(userId: string, investmentId) {
    return this.data.investment.findUnique({ where: { id: investmentId } })
  }

  async userCreateInvestment(userId: string, input: UserCreateInvestmentInput) {
    return this.data.investment.create({
      data: {
        name: input.name,
        userId: input.userId,
        streetAddress: input.streetAddress,
        borrowerEntity: input.borrowerEntity,
        mainContact: input.mainContact,
        mainContactEmail: input.mainContactEmail,
        bank: input.bank,
        totalNote: input.totalNote,
        rate: input.rate,
        termsInMonths: input.termsInMonths,
        perDiem: input.perDiem,
        fundDate: input.fundDate,
        maturityDate: input.maturityDate,
        currentBalance: input.currentBalance,
        advanceFromBank: input.advanceFromBank,
        advanceFromFF: input.advanceFromFF,
        advanceToBorrower: input.advanceToBorrower,
        totalInterestAccrued: input.totalInterestAccrued,
        totalInterestPaid: input.totalInterestPaid,
        currentInterestOwed: input.currentInterestOwed,
        serviceFeeOwed: input.serviceFeeOwed,
        miscellaneousFeeOutstanding: input.miscellaneousFeeOutstanding,
      },
    })
  }

  async userUpdateInvestment(userId: string, investmentId, input: UserUpdateInvestmentInput) {
    return this.data.investment.update({
      where: { id: investmentId },
      data: {
        name: input.name,
        userId: input.userId,
        streetAddress: input.streetAddress,
        borrowerEntity: input.borrowerEntity,
        mainContact: input.mainContact,
        mainContactEmail: input.mainContactEmail,
        bank: input.bank,
        totalNote: input.totalNote,
        rate: input.rate,
        termsInMonths: input.termsInMonths,
        perDiem: input.perDiem,
        fundDate: input.fundDate,
        maturityDate: input.maturityDate,
        currentBalance: input.currentBalance,
        advanceFromBank: input.advanceFromBank,
        advanceFromFF: input.advanceFromFF,
        advanceToBorrower: input.advanceToBorrower,
        totalInterestAccrued: input.totalInterestAccrued,
        totalInterestPaid: input.totalInterestPaid,
        currentInterestOwed: input.currentInterestOwed,
        serviceFeeOwed: input.serviceFeeOwed,
        miscellaneousFeeOutstanding: input.miscellaneousFeeOutstanding,
      },
    })
  }

  async userDeleteInvestment(adminId: string, investmentId) {
    return this.data.investment.delete({ where: { id: investmentId } })
  }
}
