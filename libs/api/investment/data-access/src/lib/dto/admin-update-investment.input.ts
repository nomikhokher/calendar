import { Field, InputType } from '@nestjs/graphql'
import { InvestmentType } from '@calendar/api/core/data-access'


@InputType()
export class AdminUpdateInvestmentInput {

  @Field({ nullable: true }) 
  id?: string

  @Field({ nullable: true }) 
  name?: string

  @Field({ nullable: true }) 
  userId?: string

  @Field(() => InvestmentType, { nullable: true }) 
  type?: InvestmentType

  @Field({ nullable: true }) 
  streetAddress?: string

  @Field({ nullable: true }) 
  borrowerEntity?: string

  @Field({ nullable: true }) 
  mainContact?: string

  @Field({ nullable: true }) 
  mainContactEmail?: string

  @Field({ nullable: true }) 
  bank?: string

  @Field({ nullable: true }) 
  totalNote?: number

  @Field({ nullable: true }) 
  rate?: number

  @Field({ nullable: true }) 
  termsInMonths?: number

  @Field({ nullable: true }) 
  perDiem?: number

  @Field({ nullable: true }) 
  fundDate?: Date

  @Field({ nullable: true }) 
  maturityDate?: Date

  @Field({ nullable: true }) 
  currentBalance?: number

  @Field({ nullable: true }) 
  advanceFromBank?: number

  @Field({ nullable: true }) 
  advanceFromFF?: number

  @Field({ nullable: true }) 
  advanceToBorrower?: number

  @Field({ nullable: true }) 
  totalInterestAccrued?: number

  @Field({ nullable: true }) 
  totalInterestPaid?: number

  @Field({ nullable: true }) 
  currentInterestOwed?: number

  @Field({ nullable: true }) 
  serviceFeeOwed?: number

  @Field({ nullable: true }) 
  miscellaneousFeeOutstanding?: number

}