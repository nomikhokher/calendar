import { Field, InputType } from '@nestjs/graphql'



@InputType()
export class AdminCreateCalendarInput {

  @Field({ nullable: true }) 
  title?: string

  @Field({ nullable: true }) 
  color?: string

  @Field({ nullable: true }) 
  visible?: boolean
}