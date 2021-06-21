import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import {
  AdminCreateInvestmentInput,
  AdminListInvestmentInput,
  AdminUpdateInvestmentInput,
  ApiInvestmentDataAccessAdminService,
  Investment,
} from '@calendar/api/investment/data-access'
import { CorePaging } from '@calendar/api/core/data-access'
import { CtxUser, GqlAuthAdminGuard } from '@calendar/api/auth/util'
import { User } from '@calendar/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiInvestmentFeatureAdminResolver {
  constructor(private readonly service: ApiInvestmentDataAccessAdminService) {}

  @Query(() => [Investment], { nullable: true })
  adminInvestments(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListInvestmentInput, nullable: true }) input?: AdminListInvestmentInput,
  ) {
    return this.service.adminInvestments(admin.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountInvestments(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListInvestmentInput, nullable: true }) input?: AdminListInvestmentInput,
  ) {
    return this.service.adminCountInvestments(admin.id, input)
  }

  @Query(() => Investment, { nullable: true })
  adminInvestment(@CtxUser() admin: User, @Args('investmentId') investmentId: string) {
    return this.service.adminInvestment(admin.id, investmentId)
  }

  @Mutation(() => Investment, { nullable: true })
  adminCreateInvestment(@CtxUser() admin: User, @Args('input') input: AdminCreateInvestmentInput) {
    return this.service.adminCreateInvestment(admin.id, input)
  }

  @Mutation(() => Investment, { nullable: true })
  adminUpdateInvestment(
    @CtxUser() admin: User,
    @Args('investmentId') investmentId: string,
    @Args('input') input: AdminUpdateInvestmentInput,
  ) {
    return this.service.adminUpdateInvestment(admin.id, investmentId, input)
  }

  @Mutation(() => Investment, { nullable: true })
  adminDeleteInvestment(@CtxUser() admin: User, @Args('investmentId') investmentId: string) {
    return this.service.adminDeleteInvestment(admin.id, investmentId)
  }
}
