import { Field, InputType } from '@nestjs/graphql'
import { CorePagingInput } from '@calendar/api/core/data-access'

@InputType()
export class AdminListTransactionInput extends CorePagingInput {
  @Field({ nullable: true })
  name?: string
}
