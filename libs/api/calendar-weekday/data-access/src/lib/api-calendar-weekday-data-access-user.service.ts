
import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@calendar/api/core/data-access'
import { UserCreateCalendarWeekdayInput } from './dto/user-create-calendar-weekday.input'
import { UserListCalendarWeekdayInput } from './dto/user-list-calendar-weekday.input'
import { UserUpdateCalendarWeekdayInput } from './dto/user-update-calendar-weekday.input'

@Injectable()
export class ApiCalendarWeekdayDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  async userCalendarWeekdays(userId: string, input?: UserListCalendarWeekdayInput) {

    return this.data.calendarWeekday.findMany({
      take: input?.limit,
      skip: input?.skip,
    })
  }

  async userCountCalendarWeekdays(userId: string, input?: UserListCalendarWeekdayInput): Promise<CorePaging> {

    const total = await this.data.calendarWeekday.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  async userCalendarWeekday(userId: string, calendarWeekdayId) {

    return this.data.calendarWeekday.findUnique({ where: { id: calendarWeekdayId } })
  }

  async userCreateCalendarWeekday(userId: string, input: UserCreateCalendarWeekdayInput) {

    return this.data.calendarWeekday.create({
      data: { 
      abbr: input.abbr,
      label: input.label,
      value: input.value
},
    })
  }

  async userUpdateCalendarWeekday(userId: string, calendarWeekdayId, input: UserUpdateCalendarWeekdayInput) {

    return this.data.calendarWeekday.update({
      where: { id: calendarWeekdayId },
      data: {
      abbr: input.abbr,
      label: input.label,
      value: input.value
},
    })
  }

  async userDeleteCalendarWeekday(adminId: string, calendarWeekdayId) {
    return this.data.calendarWeekday.delete({ where: { id: calendarWeekdayId } })
  }
}

