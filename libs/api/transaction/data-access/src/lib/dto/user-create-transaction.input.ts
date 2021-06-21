import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserCreateTransactionInput {
  @Field({ nullable: true })
  investmentId?: string

  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  transactionAmount?: number

  @Field({ nullable: true })
  rollingBalance?: number

  @Field({ nullable: true })
  transactionDate?: Date

  @Field({ nullable: true })
  daysOfInterest?: number

  @Field({ nullable: true })
  interestAccrued?: number

  @Field({ nullable: true })
  nextAdvanceDate?: Date
}
