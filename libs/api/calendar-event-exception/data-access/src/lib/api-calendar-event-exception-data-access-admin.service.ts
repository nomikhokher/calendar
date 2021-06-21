import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@calendar/api/core/data-access'

import { AdminCreateCalendarEventExceptionInput } from './dto/admin-create-calendar-event-exception.input'
import { AdminListCalendarEventExceptionInput } from './dto/admin-list-calendar-event-exception.input'
import { AdminUpdateCalendarEventExceptionInput } from './dto/admin-update-calendar-event-exception.input'

@Injectable()
export class ApiCalendarEventExceptionDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  async adminCalendarEventExceptions(adminId: string, input?: AdminListCalendarEventExceptionInput) {
    await this.data.ensureAdminUser(adminId)

    return this.data.calendarEventException.findMany({
      take: input?.limit,
      skip: input?.skip,
    })
  }

  async adminCountCalendarEventExceptions(
    adminId: string,
    input?: AdminListCalendarEventExceptionInput,
  ): Promise<CorePaging> {
    await this.data.ensureAdminUser(adminId)

    const total = await this.data.calendarEventException.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  async adminCalendarEventException(adminId: string, calendarEventExceptionId) {
    await this.data.ensureAdminUser(adminId)

    return this.data.calendarEventException.findUnique({ where: { id: calendarEventExceptionId } })
  }

  async adminCreateCalendarEventException(adminId: string, input: AdminCreateCalendarEventExceptionInput) {
    await this.data.ensureAdminUser(adminId)

    return this.data.calendarEventException.create({
      data: {
        eventId: input.eventId,
        exdate: input.exdate,
      },
    })
  }

  async adminUpdateCalendarEventException(
    adminId: string,
    calendarEventExceptionId,
    input: AdminUpdateCalendarEventExceptionInput,
  ) {
    await this.data.ensureAdminUser(adminId)

    return this.data.calendarEventException.update({
      where: { id: calendarEventExceptionId },
      data: {
        eventId: input.eventId,
        exdate: input.exdate,
      },
    })
  }

  async adminDeleteCalendarEventException(adminId: string, calendarEventExceptionId) {
    await this.data.ensureAdminUser(adminId)

    return this.data.calendarEventException.delete({ where: { id: calendarEventExceptionId } })
  }
}
