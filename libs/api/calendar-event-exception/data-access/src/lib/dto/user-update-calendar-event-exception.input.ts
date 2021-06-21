import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserUpdateCalendarEventExceptionInput {
  @Field({ nullable: true })
  id?: string

  @Field({ nullable: true })
  eventId?: string

  @Field({ nullable: true })
  exdate?: string
}
