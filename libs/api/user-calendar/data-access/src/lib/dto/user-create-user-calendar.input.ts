import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserCreateUserCalendarInput {
  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  userId?: string

  @Field({ nullable: true })
  calendarId?: string
}
