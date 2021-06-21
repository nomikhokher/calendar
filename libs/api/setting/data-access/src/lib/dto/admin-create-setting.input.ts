import { Field, InputType } from '@nestjs/graphql'
import { DateFormat } from '@calendar/api/core/data-access'
import { TimeFormat } from '@calendar/api/core/data-access'
import { StartWeekOn } from '@calendar/api/core/data-access'

@InputType()
export class AdminCreateSettingInput {
  @Field({ nullable: true })
  name?: string

  @Field(() => DateFormat, { nullable: true })
  dateFormat?: DateFormat

  @Field(() => TimeFormat, { nullable: true })
  timeFormat?: TimeFormat

  @Field(() => StartWeekOn, { nullable: true })
  startWeekOn?: StartWeekOn
}
