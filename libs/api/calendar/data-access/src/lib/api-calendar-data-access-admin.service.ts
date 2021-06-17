
import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@calendar/api/core/data-access'

import { AdminCreateCalendarInput } from './dto/admin-create-calendar.input'
import { AdminListCalendarInput } from './dto/admin-list-calendar.input'
import { AdminUpdateCalendarInput } from './dto/admin-update-calendar.input'

@Injectable()
export class ApiCalendarDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  async adminCalendars(adminId: string, input?: AdminListCalendarInput) {
    await this.data.ensureAdminUser(adminId)

    return this.data.calendar.findMany({
      where: { name: { contains: input?.name} },
      take: input?.limit,
      skip: input?.skip,
    })
  }

  async adminCountCalendars(adminId: string, input?: AdminListCalendarInput): Promise<CorePaging> {
    await this.data.ensureAdminUser(adminId)

    const total = await this.data.calendar.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  async adminCalendar(adminId: string, calendarId) {
    await this.data.ensureAdminUser(adminId)

    return this.data.calendar.findUnique({ where: { id: calendarId } })
  }

  async adminCreateCalendar(adminId: string, input: AdminCreateCalendarInput) {
    await this.data.ensureAdminUser(adminId)

    return this.data.calendar.create({
      data: { 
      title: input.title,
      color: input.color,
      visible: input.visible
},
    })
  }

  async adminUpdateCalendar(adminId: string, calendarId, input: AdminUpdateCalendarInput) {
    await this.data.ensureAdminUser(adminId)

    return this.data.calendar.update({
      where: { id: calendarId },
      data: {
      title: input.title,
      color: input.color,
      visible: input.visible
},
    })
  }

  async adminDeleteCalendar(adminId: string, calendarId) {
    await this.data.ensureAdminUser(adminId)

    return this.data.calendar.delete({ where: { id: calendarId } })
  }
}

