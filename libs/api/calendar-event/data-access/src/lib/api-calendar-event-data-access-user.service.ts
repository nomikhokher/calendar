import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@calendar/api/core/data-access'
import { UserCreateCalendarEventInput } from './dto/user-create-calendar-event.input'
import { UserListCalendarEventInput } from './dto/user-list-calendar-event.input'
import { UserUpdateCalendarEventInput } from './dto/user-update-calendar-event.input'

@Injectable()
export class ApiCalendarEventDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  async userCalendarEvents(userId: string, input?: UserListCalendarEventInput) {
    return this.data.calendarEvent.findMany({
      take: input?.limit,
      skip: input?.skip,
    })
  }

  async userCountCalendarEvents(userId: string, input?: UserListCalendarEventInput): Promise<CorePaging> {
    const total = await this.data.calendarEvent.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  async userCalendarEvent(userId: string, calendarEventId) {
    return this.data.calendarEvent.findUnique({ where: { id: calendarEventId } })
  }

  async userCreateCalendarEvent(userId: string, input: UserCreateCalendarEventInput) {
    return this.data.calendarEvent.create({
      data: {
        calendarId: input.calendarId,
        isFirstInstance: input.isFirstInstance,
        title: input.title,
        description: input.description,
        allDay: input.allDay,
        recurrence: input.recurrence,
      },
    })
  }

  async userUpdateCalendarEvent(userId: string, calendarEventId, input: UserUpdateCalendarEventInput) {
    return this.data.calendarEvent.update({
      where: { id: calendarEventId },
      data: {
        calendarId: input.calendarId,
        isFirstInstance: input.isFirstInstance,
        title: input.title,
        description: input.description,
        allDay: input.allDay,
        recurrence: input.recurrence,
      },
    })
  }

  async userDeleteCalendarEvent(adminId: string, calendarEventId) {
    return this.data.calendarEvent.delete({ where: { id: calendarEventId } })
  }
}
