import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@calendar/api/core/data-access'
import { UserCreateUserCalendarInput } from './dto/user-create-user-calendar.input'
import { UserListUserCalendarInput } from './dto/user-list-user-calendar.input'
import { UserUpdateUserCalendarInput } from './dto/user-update-user-calendar.input'

@Injectable()
export class ApiUserCalendarDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  async userUserCalendars(userId: string, input?: UserListUserCalendarInput) {
    return this.data.userCalendar.findMany({
      where: { userId: userId },
      take: input?.limit,
      skip: input?.skip,
    })
  }

  async userCountUserCalendars(userId: string, input?: UserListUserCalendarInput): Promise<CorePaging> {
    const total = await this.data.userCalendar.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  async userUserCalendar(userId: string, userCalendarId) {
    return this.data.userCalendar.findUnique({ where: { id: userCalendarId } })
  }

  async userCreateUserCalendar(userId: string, input: UserCreateUserCalendarInput) {
    return this.data.userCalendar.create({
      data: {
        name: input.name,
        userId: input.userId,
        calendarId: input.calendarId,
      },
    })
  }

  async userUpdateUserCalendar(userId: string, userCalendarId, input: UserUpdateUserCalendarInput) {
    return this.data.userCalendar.update({
      where: { id: userCalendarId },
      data: {
        name: input.name,
        userId: input.userId,
        calendarId: input.calendarId,
      },
    })
  }

  async userDeleteUserCalendar(adminId: string, userCalendarId) {
    return this.data.userCalendar.delete({ where: { id: userCalendarId } })
  }
}
