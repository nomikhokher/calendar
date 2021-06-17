import { Field, ObjectType } from '@nestjs/graphql'



@ObjectType()
export class CalendarEventException {

  @Field({ nullable: true }) 
  id?: string

  @Field({ nullable: true }) 
  eventId?: string

  @Field({ nullable: true }) 
  exdate?: string
}
