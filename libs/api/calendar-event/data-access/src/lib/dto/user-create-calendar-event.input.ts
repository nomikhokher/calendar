import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserCreateCalendarEventInput {
  @Field({ nullable: true })
  calendarId?: string

  @Field({ nullable: true })
  recurringEventId?: string

  @Field({ nullable: true })
  isFirstInstance?: boolean

  @Field({ nullable: true })
  title?: string

  @Field({ nullable: true })
  description?: string

  @Field({ nullable: true })
  start?: string

  @Field({ nullable: true })
  end?: string

  @Field({ nullable: true })
  allDay?: boolean

  @Field({ nullable: true })
  recurrence?: string
}
