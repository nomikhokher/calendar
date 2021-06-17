
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import {
  UserCreateTransactionInput,
  UserListTransactionInput,
  UserUpdateTransactionInput,
  ApiTransactionDataAccessUserService,
  Transaction,
} from '@calendar/api/transaction/data-access'
import { CorePaging } from '@calendar/api/core/data-access'
import {
  CtxUser,
  GqlAuthGuard
} from '@calendar/api/auth/util'
import { User } from '@calendar/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiTransactionFeatureUserResolver {
  constructor(private readonly service: ApiTransactionDataAccessUserService) {}

  @Query(() => [Transaction], { nullable: true })
  userTransactions(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListTransactionInput, nullable: true }) input?: UserListTransactionInput,
  ) {
    return this.service.userTransactions(user.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  userCountTransactions(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListTransactionInput, nullable: true }) input?: UserListTransactionInput,
  ) {
    return this.service.userCountTransactions(user.id, input)
  }

  @Query(() => Transaction, { nullable: true })
  userTransaction(@CtxUser() user: User, @Args('transactionId') transactionId: string) {
    return this.service.userTransaction(user.id, transactionId)
  }

  @Mutation(() => Transaction, { nullable: true })
  userCreateTransaction(@CtxUser() user: User, @Args('input') input: UserCreateTransactionInput,) {
    return this.service.userCreateTransaction(user.id, input)
  }

  @Mutation(() => Transaction, { nullable: true })
  userUpdateTransaction(
    @CtxUser() user: User,
    @Args('transactionId') transactionId: string,
    @Args('input') input: UserUpdateTransactionInput,
  ) {
    return this.service.userUpdateTransaction(user.id, transactionId, input)
  }

  @Mutation(() => Transaction, { nullable: true })
  userDeleteTransaction(@CtxUser() user: User, @Args('transactionId') transactionId: string) {
    return this.service.userDeleteTransaction(user.id, transactionId)
  }
}

