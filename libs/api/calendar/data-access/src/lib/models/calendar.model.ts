import { Field, ObjectType } from '@nestjs/graphql'



@ObjectType()
export class Calendar {

  @Field({ nullable: true }) 
  id?: string

  @Field({ nullable: true }) 
  title?: string

  @Field({ nullable: true }) 
  color?: string

  @Field({ nullable: true }) 
  visible?: boolean
}
