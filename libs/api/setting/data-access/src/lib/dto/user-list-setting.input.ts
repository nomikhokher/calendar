import { Field, InputType } from '@nestjs/graphql'
import { CorePagingInput } from '@calendar/api/core/data-access'

@InputType()
export class UserListSettingInput extends CorePagingInput {
  @Field({ nullable: true })
  name?: string
}
