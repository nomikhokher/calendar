import { Field, ObjectType } from '@nestjs/graphql'

import { TransactionType } from '@calendar/api/core/data-access' 


@ObjectType()
export class Transaction {

  @Field({ nullable: true }) 
  id?: string

  @Field({ nullable: true }) 
  investmentId?: string

  @Field({ nullable: true }) 
  createdAt?: Date

  @Field({ nullable: true }) 
  updatedAt?: Date

  @Field({ nullable: true }) 
  name?: string

  @Field(() => TransactionType, { nullable: true }) 
  transactionType?: TransactionType

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
