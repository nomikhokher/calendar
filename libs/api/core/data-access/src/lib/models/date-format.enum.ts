import { registerEnumType } from '@nestjs/graphql'
import { DateFormat } from '@prisma/client'
export { DateFormat }

registerEnumType(DateFormat, { name: 'DateFormat' })
