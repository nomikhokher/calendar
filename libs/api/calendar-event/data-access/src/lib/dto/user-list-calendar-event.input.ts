import { Field, InputType } from '@nestjs/graphql'
import { CorePagingInput } from '@calendar/api/core/data-access'

@InputType()
export class UserListCalendarEventInput extends CorePagingInput {
  @Field({ nullable: true })
  calendarId?: string
}
