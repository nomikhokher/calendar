import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserCreateCalendarEventExceptionInput {
  @Field({ nullable: true })
  eventId?: string

  @Field({ nullable: true })
  exdate?: string
}
