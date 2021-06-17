import { Field, InputType } from '@nestjs/graphql'



@InputType()
export class AdminCreateCalendarEventExceptionInput {

  @Field({ nullable: true }) 
  eventId?: string

  @Field({ nullable: true }) 
  exdate?: string
}