import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@calendar/api/core/data-access'

import { AdminCreateUserCalendarInput } from './dto/admin-create-user-calendar.input'
import { AdminListUserCalendarInput } from './dto/admin-list-user-calendar.input'
import { AdminUpdateUserCalendarInput } from './dto/admin-update-user-calendar.input'

@Injectable()
export class ApiUserCalendarDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  async adminUserCalendars(adminId: string, input?: AdminListUserCalendarInput) {
    await this.data.ensureAdminUser(adminId)

    return this.data.userCalendar.findMany({
      where: { name: { contains: input?.name } },
      take: input?.limit,
      skip: input?.skip,
    })
  }

  async adminCountUserCalendars(adminId: string, input?: AdminListUserCalendarInput): Promise<CorePaging> {
    await this.data.ensureAdminUser(adminId)

    const total = await this.data.userCalendar.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  async adminUserCalendar(adminId: string, userCalendarId) {
    await this.data.ensureAdminUser(adminId)

    return this.data.userCalendar.findUnique({ where: { id: userCalendarId } })
  }

  async adminCreateUserCalendar(adminId: string, input: AdminCreateUserCalendarInput) {
    await this.data.ensureAdminUser(adminId)

    return this.data.userCalendar.create({
      data: {
        name: input.name,
        userId: input.userId,
        calendarId: input.calendarId,
      },
    })
  }

  async adminUpdateUserCalendar(adminId: string, userCalendarId, input: AdminUpdateUserCalendarInput) {
    await this.data.ensureAdminUser(adminId)

    return this.data.userCalendar.update({
      where: { id: userCalendarId },
      data: {
        name: input.name,
        userId: input.userId,
        calendarId: input.calendarId,
      },
    })
  }

  async adminDeleteUserCalendar(adminId: string, userCalendarId) {
    await this.data.ensureAdminUser(adminId)

    return this.data.userCalendar.delete({ where: { id: userCalendarId } })
  }
}
