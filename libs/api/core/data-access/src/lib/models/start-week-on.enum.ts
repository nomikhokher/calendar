import { registerEnumType } from '@nestjs/graphql'
import { StartWeekOn } from '@prisma/client'
export { StartWeekOn }

registerEnumType(StartWeekOn, { name: 'StartWeekOn' })
