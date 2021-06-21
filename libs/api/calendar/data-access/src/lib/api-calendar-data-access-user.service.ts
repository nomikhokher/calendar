import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@calendar/api/core/data-access'
import { UserCreateCalendarInput } from './dto/user-create-calendar.input'
import { UserListCalendarInput } from './dto/user-list-calendar.input'
import { UserUpdateCalendarInput } from './dto/user-update-calendar.input'

@Injectable()
export class ApiCalendarDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  async userCalendars(userId: string, input?: UserListCalendarInput) {
    return this.data.calendar.findMany({
      take: input?.limit,
      skip: input?.skip,
    })
  }

  async userCountCalendars(userId: string, input?: UserListCalendarInput): Promise<CorePaging> {
    const total = await this.data.calendar.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  async userCalendar(userId: string, calendarId) {
    return this.data.calendar.findUnique({ where: { id: calendarId } })
  }

  async userCreateCalendar(userId: string, input: UserCreateCalendarInput) {
    return this.data.calendar.create({
      data: {
        title: input.title,
        color: input.color,
        visible: input.visible,
      },
    })
  }

  async userUpdateCalendar(userId: string, calendarId, input: UserUpdateCalendarInput) {
    return this.data.calendar.update({
      where: { id: calendarId },
      data: {
        title: input.title,
        color: input.color,
        visible: input.visible,
      },
    })
  }

  async userDeleteCalendar(adminId: string, calendarId) {
    return this.data.calendar.delete({ where: { id: calendarId } })
  }
}
