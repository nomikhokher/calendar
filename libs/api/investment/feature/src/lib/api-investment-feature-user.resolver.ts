import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import {
  UserCreateInvestmentInput,
  UserListInvestmentInput,
  UserUpdateInvestmentInput,
  ApiInvestmentDataAccessUserService,
  Investment,
} from '@calendar/api/investment/data-access'
import { CorePaging } from '@calendar/api/core/data-access'
import { CtxUser, GqlAuthGuard } from '@calendar/api/auth/util'
import { User } from '@calendar/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiInvestmentFeatureUserResolver {
  constructor(private readonly service: ApiInvestmentDataAccessUserService) {}

  @Query(() => [Investment], { nullable: true })
  userInvestments(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListInvestmentInput, nullable: true }) input?: UserListInvestmentInput,
  ) {
    return this.service.userInvestments(user.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  userCountInvestments(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListInvestmentInput, nullable: true }) input?: UserListInvestmentInput,
  ) {
    return this.service.userCountInvestments(user.id, input)
  }

  @Query(() => Investment, { nullable: true })
  userInvestment(@CtxUser() user: User, @Args('investmentId') investmentId: string) {
    return this.service.userInvestment(user.id, investmentId)
  }

  @Mutation(() => Investment, { nullable: true })
  userCreateInvestment(@CtxUser() user: User, @Args('input') input: UserCreateInvestmentInput) {
    return this.service.userCreateInvestment(user.id, input)
  }

  @Mutation(() => Investment, { nullable: true })
  userUpdateInvestment(
    @CtxUser() user: User,
    @Args('investmentId') investmentId: string,
    @Args('input') input: UserUpdateInvestmentInput,
  ) {
    return this.service.userUpdateInvestment(user.id, investmentId, input)
  }

  @Mutation(() => Investment, { nullable: true })
  userDeleteInvestment(@CtxUser() user: User, @Args('investmentId') investmentId: string) {
    return this.service.userDeleteInvestment(user.id, investmentId)
  }
}
