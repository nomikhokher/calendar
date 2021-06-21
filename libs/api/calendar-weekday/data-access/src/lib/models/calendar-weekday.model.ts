import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class CalendarWeekday {
  @Field({ nullable: true })
  id?: string

  @Field({ nullable: true })
  abbr?: string

  @Field({ nullable: true })
  label?: string

  @Field({ nullable: true })
  value?: string
}
