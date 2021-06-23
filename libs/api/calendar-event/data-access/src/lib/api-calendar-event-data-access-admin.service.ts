import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@calendar/api/core/data-access'

import { AdminCreateCalendarEventInput } from './dto/admin-create-calendar-event.input'
import { AdminListCalendarEventInput } from './dto/admin-list-calendar-event.input'
import { AdminUpdateCalendarEventInput } from './dto/admin-update-calendar-event.input'

@Injectable()
export class ApiCalendarEventDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  async adminCalendarEvents(adminId: string, input?: AdminListCalendarEventInput) {
    await this.data.ensureAdminUser(adminId)

    return this.data.calendarEvent.findMany({
      where: { description: { contains: input?.name } },
      take: input?.limit,
      skip: input?.skip,
    })
  }

  async adminCountCalendarEvents(adminId: string, input?: AdminListCalendarEventInput): Promise<CorePaging> {
    await this.data.ensureAdminUser(adminId)

    const total = await this.data.calendarEvent.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  async adminCalendarEvent(adminId: string, calendarEventId) {
    await this.data.ensureAdminUser(adminId)

    return this.data.calendarEvent.findUnique({ where: { id: calendarEventId } })
  }

  async adminCreateCalendarEvent(adminId: string, input: AdminCreateCalendarEventInput) {
    await this.data.ensureAdminUser(adminId)

    return this.data.calendarEvent.create({
      data: {
        calendarId: input.calendarId,
        isFirstInstance: input.isFirstInstance,
        title: input.title,
        description: input.description,
        allDay: input.allDay,
        start: input.start,
        end: input.end,
        recurrence: input.recurrence,
      },
    })
  }

  async adminUpdateCalendarEvent(adminId: string, calendarEventId, input: AdminUpdateCalendarEventInput) {
    await this.data.ensureAdminUser(adminId)

    return this.data.calendarEvent.update({
      where: { id: calendarEventId },
      data: {
        calendarId: input.calendarId,
        isFirstInstance: input.isFirstInstance,
        title: input.title,
        description: input.description,
        allDay: input.allDay,
        start: input.start,
        end: input.end,
        recurrence: input.recurrence,
      },
    })
  }

  async adminDeleteCalendarEvent(adminId: string, calendarEventId) {
    await this.data.ensureAdminUser(adminId)

    return this.data.calendarEvent.delete({ where: { id: calendarEventId } })
  }
}
