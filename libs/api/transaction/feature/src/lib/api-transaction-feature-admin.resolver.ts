import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import {
  AdminCreateTransactionInput,
  AdminListTransactionInput,
  AdminUpdateTransactionInput,
  ApiTransactionDataAccessAdminService,
  Transaction,
} from '@calendar/api/transaction/data-access'
import { CorePaging } from '@calendar/api/core/data-access'
import { CtxUser, GqlAuthAdminGuard } from '@calendar/api/auth/util'
import { User } from '@calendar/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiTransactionFeatureAdminResolver {
  constructor(private readonly service: ApiTransactionDataAccessAdminService) {}

  @Query(() => [Transaction], { nullable: true })
  adminTransactions(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListTransactionInput, nullable: true }) input?: AdminListTransactionInput,
  ) {
    return this.service.adminTransactions(admin.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountTransactions(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListTransactionInput, nullable: true }) input?: AdminListTransactionInput,
  ) {
    return this.service.adminCountTransactions(admin.id, input)
  }

  @Query(() => Transaction, { nullable: true })
  adminTransaction(@CtxUser() admin: User, @Args('transactionId') transactionId: string) {
    return this.service.adminTransaction(admin.id, transactionId)
  }

  @Mutation(() => Transaction, { nullable: true })
  adminCreateTransaction(@CtxUser() admin: User, @Args('input') input: AdminCreateTransactionInput) {
    return this.service.adminCreateTransaction(admin.id, input)
  }

  @Mutation(() => Transaction, { nullable: true })
  adminUpdateTransaction(
    @CtxUser() admin: User,
    @Args('transactionId') transactionId: string,
    @Args('input') input: AdminUpdateTransactionInput,
  ) {
    return this.service.adminUpdateTransaction(admin.id, transactionId, input)
  }

  @Mutation(() => Transaction, { nullable: true })
  adminDeleteTransaction(@CtxUser() admin: User, @Args('transactionId') transactionId: string) {
    return this.service.adminDeleteTransaction(admin.id, transactionId)
  }
}
