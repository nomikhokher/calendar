import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@calendar/api/core/data-access'

import { AdminCreateCalendarWeekdayInput } from './dto/admin-create-calendar-weekday.input'
import { AdminListCalendarWeekdayInput } from './dto/admin-list-calendar-weekday.input'
import { AdminUpdateCalendarWeekdayInput } from './dto/admin-update-calendar-weekday.input'

@Injectable()
export class ApiCalendarWeekdayDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  async adminCalendarWeekdays(adminId: string, input?: AdminListCalendarWeekdayInput) {
    await this.data.ensureAdminUser(adminId)

    return this.data.calendarWeekday.findMany({
      take: input?.limit,
      skip: input?.skip,
    })
  }

  async adminCountCalendarWeekdays(adminId: string, input?: AdminListCalendarWeekdayInput): Promise<CorePaging> {
    await this.data.ensureAdminUser(adminId)

    const total = await this.data.calendarWeekday.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  async adminCalendarWeekday(adminId: string, calendarWeekdayId) {
    await this.data.ensureAdminUser(adminId)

    return this.data.calendarWeekday.findUnique({ where: { id: calendarWeekdayId } })
  }

  async adminCreateCalendarWeekday(adminId: string, input: AdminCreateCalendarWeekdayInput) {
    await this.data.ensureAdminUser(adminId)

    return this.data.calendarWeekday.create({
      data: {
        abbr: input.abbr,
        label: input.label,
        value: input.value,
      },
    })
  }

  async adminUpdateCalendarWeekday(adminId: string, calendarWeekdayId, input: AdminUpdateCalendarWeekdayInput) {
    await this.data.ensureAdminUser(adminId)

    return this.data.calendarWeekday.update({
      where: { id: calendarWeekdayId },
      data: {
        abbr: input.abbr,
        label: input.label,
        value: input.value,
      },
    })
  }

  async adminDeleteCalendarWeekday(adminId: string, calendarWeekdayId) {
    await this.data.ensureAdminUser(adminId)

    return this.data.calendarWeekday.delete({ where: { id: calendarWeekdayId } })
  }
}
