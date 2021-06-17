import { Field, InputType } from '@nestjs/graphql'



@InputType()
export class AdminCreateCalendarWeekdayInput {


  @Field({ nullable: true }) 
  id?: string
  
  @Field({ nullable: true }) 
  abbr?: string

  @Field({ nullable: true }) 
  label?: string

  @Field({ nullable: true }) 
  value?: string
}