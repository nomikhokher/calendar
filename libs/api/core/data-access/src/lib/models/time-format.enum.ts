import { registerEnumType } from '@nestjs/graphql'
import { TimeFormat } from '@prisma/client'
export { TimeFormat }

registerEnumType(TimeFormat, { name: 'TimeFormat' })
