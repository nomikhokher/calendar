import { Field,InputType } from '@nestjs/graphql'
import { CorePagingInput } from '@calendar/api/core/data-access'
import { InvestmentType } from '@calendar/api/core/data-access'


@InputType()
export class AdminListInvestmentInput extends CorePagingInput {
  @Field({ nullable: true }) 
  name?: string
}
