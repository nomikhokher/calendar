import { registerEnumType } from '@nestjs/graphql'
import { UserType } from '@prisma/client'
export { UserType }

registerEnumType(UserType, { name: 'UserType' })
