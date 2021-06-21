import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@calendar/api/core/data-access'

import { AdminCreateInvestmentInput } from './dto/admin-create-investment.input'
import { AdminListInvestmentInput } from './dto/admin-list-investment.input'
import { AdminUpdateInvestmentInput } from './dto/admin-update-investment.input'

@Injectable()
export class ApiInvestmentDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  async adminInvestments(adminId: string, input?: AdminListInvestmentInput) {
    await this.data.ensureAdminUser(adminId)

    return this.data.investment.findMany({
      where: { name: { contains: input?.name } },
      take: input?.limit,
      skip: input?.skip,
    })
  }

  async adminCountInvestments(adminId: string, input?: AdminListInvestmentInput): Promise<CorePaging> {
    await this.data.ensureAdminUser(adminId)

    const total = await this.data.investment.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  async adminInvestment(adminId: string, investmentId) {
    await this.data.ensureAdminUser(adminId)

    return this.data.investment.findUnique({ where: { id: investmentId }, include: { transactions: true } })
  }

  async adminCreateInvestment(adminId: string, input: AdminCreateInvestmentInput) {
    await this.data.ensureAdminUser(adminId)

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

  async adminUpdateInvestment(adminId: string, investmentId, input: AdminUpdateInvestmentInput) {
    await this.data.ensureAdminUser(adminId)

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

  async adminDeleteInvestment(adminId: string, investmentId) {
    await this.data.ensureAdminUser(adminId)

    return this.data.investment.delete({ where: { id: investmentId } })
  }
}
