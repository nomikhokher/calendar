import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@calendar/api/core/data-access'
import { UserCreateCalendarEventExceptionInput } from './dto/user-create-calendar-event-exception.input'
import { UserListCalendarEventExceptionInput } from './dto/user-list-calendar-event-exception.input'
import { UserUpdateCalendarEventExceptionInput } from './dto/user-update-calendar-event-exception.input'

@Injectable()
export class ApiCalendarEventExceptionDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  async userCalendarEventExceptions(userId: string, input?: UserListCalendarEventExceptionInput) {
    return this.data.calendarEventException.findMany({
      take: input?.limit,
      skip: input?.skip,
    })
  }

  async userCountCalendarEventExceptions(
    userId: string,
    input?: UserListCalendarEventExceptionInput,
  ): Promise<CorePaging> {
    const total = await this.data.calendarEventException.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  async userCalendarEventException(userId: string, calendarEventExceptionId) {
    return this.data.calendarEventException.findUnique({ where: { id: calendarEventExceptionId } })
  }

  async userCreateCalendarEventException(userId: string, input: UserCreateCalendarEventExceptionInput) {
    return this.data.calendarEventException.create({
      data: {
        eventId: input.eventId,
        exdate: input.exdate,
      },
    })
  }

  async userUpdateCalendarEventException(
    userId: string,
    calendarEventExceptionId,
    input: UserUpdateCalendarEventExceptionInput,
  ) {
    return this.data.calendarEventException.update({
      where: { id: calendarEventExceptionId },
      data: {
        eventId: input.eventId,
        exdate: input.exdate,
      },
    })
  }

  async userDeleteCalendarEventException(adminId: string, calendarEventExceptionId) {
    return this.data.calendarEventException.delete({ where: { id: calendarEventExceptionId } })
  }
}
