import { gql } from 'apollo-angular'
import { Injectable } from '@angular/core'
import * as Apollo from 'apollo-angular'
import * as ApolloCore from '@apollo/client/core'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type AccountCreateEmailInput = {
  email: Scalars['String']
}

export type AccountUpdatePasswordInput = {
  currentPassword: Scalars['String']
  password: Scalars['String']
  verified: Scalars['String']
}

export type AccountUpdateProfileInput = {
  avatarUrl?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  dob?: Maybe<Scalars['DateTime']>
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
}

export type AdminCreateCalendarEventExceptionInput = {
  eventId?: Maybe<Scalars['String']>
  exdate?: Maybe<Scalars['String']>
}

export type AdminCreateCalendarEventInput = {
  allDay?: Maybe<Scalars['Boolean']>
  calendarId?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  end?: Maybe<Scalars['String']>
  isFirstInstance?: Maybe<Scalars['Boolean']>
  recurrence?: Maybe<Scalars['String']>
  recurringEventId?: Maybe<Scalars['String']>
  start?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type AdminCreateCalendarInput = {
  color?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  visible?: Maybe<Scalars['Boolean']>
}

export type AdminCreateCalendarWeekdayInput = {
  abbr?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type AdminCreateSettingInput = {
  dateFormat?: Maybe<DateFormat>
  name?: Maybe<Scalars['String']>
  startWeekOn?: Maybe<StartWeekOn>
  timeFormat?: Maybe<TimeFormat>
}

export type AdminCreateUserCalendarInput = {
  calendarId?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['String']>
}

export type AdminCreateUserInput = {
  email: Scalars['String']
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  role: Role
  username?: Maybe<Scalars['String']>
}

export type AdminListCalendarEventExceptionInput = {
  limit?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  skip?: Maybe<Scalars['Int']>
}

export type AdminListCalendarEventInput = {
  limit?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  skip?: Maybe<Scalars['Int']>
}

export type AdminListCalendarInput = {
  limit?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  skip?: Maybe<Scalars['Int']>
}

export type AdminListCalendarWeekdayInput = {
  limit?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  skip?: Maybe<Scalars['Int']>
}

export type AdminListSettingInput = {
  limit?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  skip?: Maybe<Scalars['Int']>
}

export type AdminListUserCalendarInput = {
  limit?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  skip?: Maybe<Scalars['Int']>
}

export type AdminUpdateCalendarEventExceptionInput = {
  eventId?: Maybe<Scalars['String']>
  exdate?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
}

export type AdminUpdateCalendarEventInput = {
  allDay?: Maybe<Scalars['Boolean']>
  calendarId?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  end?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  isFirstInstance?: Maybe<Scalars['Boolean']>
  recurrence?: Maybe<Scalars['String']>
  recurringEventId?: Maybe<Scalars['String']>
  start?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type AdminUpdateCalendarInput = {
  color?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  visible?: Maybe<Scalars['Boolean']>
}

export type AdminUpdateCalendarWeekdayInput = {
  abbr?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type AdminUpdateSettingInput = {
  dateFormat?: Maybe<DateFormat>
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  startWeekOn?: Maybe<StartWeekOn>
  timeFormat?: Maybe<TimeFormat>
}

export type AdminUpdateUserCalendarInput = {
  calendarId?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['String']>
}

export type AdminUpdateUserInput = {
  avatarUrl?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  role?: Maybe<Role>
  username?: Maybe<Scalars['String']>
}

export type AuthToken = {
  __typename?: 'AuthToken'
  /** JWT Bearer token */
  token: Scalars['String']
}

export type Calendar = {
  __typename?: 'Calendar'
  color?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  visible?: Maybe<Scalars['Boolean']>
}

export type CalendarEvent = {
  __typename?: 'CalendarEvent'
  allDay?: Maybe<Scalars['Boolean']>
  calendarId?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  end?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  isFirstInstance?: Maybe<Scalars['Boolean']>
  recurrence?: Maybe<Scalars['String']>
  recurringEventId?: Maybe<Scalars['String']>
  start?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type CalendarEventException = {
  __typename?: 'CalendarEventException'
  eventId?: Maybe<Scalars['String']>
  exdate?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
}

export type CalendarWeekday = {
  __typename?: 'CalendarWeekday'
  abbr?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type CorePaging = {
  __typename?: 'CorePaging'
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  total?: Maybe<Scalars['Int']>
}

export type CorePagingInput = {
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export enum DateFormat {
  Ddmmyyyy = 'DDMMYYYY',
  Mmddyyyy = 'MMDDYYYY',
  Yyyymmdd = 'YYYYMMDD',
  Ll = 'll',
}

export type Email = {
  __typename?: 'Email'
  createdAt?: Maybe<Scalars['DateTime']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  primary?: Maybe<Scalars['Boolean']>
  public?: Maybe<Scalars['Boolean']>
  updatedAt?: Maybe<Scalars['DateTime']>
  verified?: Maybe<Scalars['Boolean']>
}

export type IntercomMessage = {
  __typename?: 'IntercomMessage'
  payload?: Maybe<Scalars['JSON']>
  scope?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type LoginInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  accountCreateEmail?: Maybe<Email>
  accountDeleteEmail?: Maybe<Email>
  accountMarkEmailPrimary?: Maybe<Email>
  accountMarkEmailPrivate?: Maybe<Email>
  accountMarkEmailPublic?: Maybe<Email>
  accountResetPassword?: Maybe<Scalars['Boolean']>
  accountUpdatePassword?: Maybe<Scalars['Boolean']>
  accountUpdateProfile?: Maybe<User>
  accountUpdateUsername?: Maybe<User>
  adminCreateCalendar?: Maybe<Calendar>
  adminCreateCalendarEvent?: Maybe<CalendarEvent>
  adminCreateCalendarEventException?: Maybe<CalendarEventException>
  adminCreateCalendarWeekday?: Maybe<CalendarWeekday>
  adminCreateSetting?: Maybe<Setting>
  adminCreateUser?: Maybe<User>
  adminCreateUserCalendar?: Maybe<UserCalendar>
  adminDeleteCalendar?: Maybe<Calendar>
  adminDeleteCalendarEvent?: Maybe<CalendarEvent>
  adminDeleteCalendarEventException?: Maybe<CalendarEventException>
  adminDeleteCalendarWeekday?: Maybe<CalendarWeekday>
  adminDeleteSetting?: Maybe<Setting>
  adminDeleteUser?: Maybe<User>
  adminDeleteUserCalendar?: Maybe<UserCalendar>
  adminSetUserPassword?: Maybe<User>
  adminUpdateCalendar?: Maybe<Calendar>
  adminUpdateCalendarEvent?: Maybe<CalendarEvent>
  adminUpdateCalendarEventException?: Maybe<CalendarEventException>
  adminUpdateCalendarWeekday?: Maybe<CalendarWeekday>
  adminUpdateSetting?: Maybe<Setting>
  adminUpdateUser?: Maybe<User>
  adminUpdateUserCalendar?: Maybe<UserCalendar>
  intercomPub?: Maybe<IntercomMessage>
  login?: Maybe<AuthToken>
  logout?: Maybe<Scalars['Boolean']>
  register?: Maybe<AuthToken>
  userCreateCalendar?: Maybe<Calendar>
  userCreateCalendarEvent?: Maybe<CalendarEvent>
  userCreateCalendarEventException?: Maybe<CalendarEventException>
  userCreateCalendarWeekday?: Maybe<CalendarWeekday>
  userCreateSetting?: Maybe<Setting>
  userCreateUserCalendar?: Maybe<UserCalendar>
  userDeleteCalendar?: Maybe<Calendar>
  userDeleteCalendarEvent?: Maybe<CalendarEvent>
  userDeleteCalendarEventException?: Maybe<CalendarEventException>
  userDeleteCalendarWeekday?: Maybe<CalendarWeekday>
  userDeleteSetting?: Maybe<Setting>
  userDeleteUserCalendar?: Maybe<UserCalendar>
  userUpdateCalendar?: Maybe<Calendar>
  userUpdateCalendarEvent?: Maybe<CalendarEvent>
  userUpdateCalendarEventException?: Maybe<CalendarEventException>
  userUpdateCalendarWeekday?: Maybe<CalendarWeekday>
  userUpdateSetting?: Maybe<Setting>
  userUpdateUserCalendar?: Maybe<UserCalendar>
}

export type MutationAccountCreateEmailArgs = {
  input: AccountCreateEmailInput
}

export type MutationAccountDeleteEmailArgs = {
  emailId: Scalars['String']
}

export type MutationAccountMarkEmailPrimaryArgs = {
  emailId: Scalars['String']
}

export type MutationAccountMarkEmailPrivateArgs = {
  emailId: Scalars['String']
}

export type MutationAccountMarkEmailPublicArgs = {
  emailId: Scalars['String']
}

export type MutationAccountUpdatePasswordArgs = {
  input: AccountUpdatePasswordInput
}

export type MutationAccountUpdateProfileArgs = {
  input: AccountUpdateProfileInput
}

export type MutationAccountUpdateUsernameArgs = {
  username: Scalars['String']
}

export type MutationAdminCreateCalendarArgs = {
  input: AdminCreateCalendarInput
}

export type MutationAdminCreateCalendarEventArgs = {
  input: AdminCreateCalendarEventInput
}

export type MutationAdminCreateCalendarEventExceptionArgs = {
  input: AdminCreateCalendarEventExceptionInput
}

export type MutationAdminCreateCalendarWeekdayArgs = {
  input: AdminCreateCalendarWeekdayInput
}

export type MutationAdminCreateSettingArgs = {
  input: AdminCreateSettingInput
}

export type MutationAdminCreateUserArgs = {
  input: AdminCreateUserInput
}

export type MutationAdminCreateUserCalendarArgs = {
  input: AdminCreateUserCalendarInput
}

export type MutationAdminDeleteCalendarArgs = {
  calendarId: Scalars['String']
}

export type MutationAdminDeleteCalendarEventArgs = {
  calendarEventId: Scalars['String']
}

export type MutationAdminDeleteCalendarEventExceptionArgs = {
  calendarEventExceptionId: Scalars['String']
}

export type MutationAdminDeleteCalendarWeekdayArgs = {
  calendarWeekdayId: Scalars['String']
}

export type MutationAdminDeleteSettingArgs = {
  settingId: Scalars['String']
}

export type MutationAdminDeleteUserArgs = {
  userId: Scalars['String']
}

export type MutationAdminDeleteUserCalendarArgs = {
  userCalendarId: Scalars['String']
}

export type MutationAdminSetUserPasswordArgs = {
  password: Scalars['String']
  userId: Scalars['String']
}

export type MutationAdminUpdateCalendarArgs = {
  calendarId: Scalars['String']
  input: AdminUpdateCalendarInput
}

export type MutationAdminUpdateCalendarEventArgs = {
  calendarEventId: Scalars['String']
  input: AdminUpdateCalendarEventInput
}

export type MutationAdminUpdateCalendarEventExceptionArgs = {
  calendarEventExceptionId: Scalars['String']
  input: AdminUpdateCalendarEventExceptionInput
}

export type MutationAdminUpdateCalendarWeekdayArgs = {
  calendarWeekdayId: Scalars['String']
  input: AdminUpdateCalendarWeekdayInput
}

export type MutationAdminUpdateSettingArgs = {
  input: AdminUpdateSettingInput
  settingId: Scalars['String']
}

export type MutationAdminUpdateUserArgs = {
  input: AdminUpdateUserInput
  userId: Scalars['String']
}

export type MutationAdminUpdateUserCalendarArgs = {
  input: AdminUpdateUserCalendarInput
  userCalendarId: Scalars['String']
}

export type MutationIntercomPubArgs = {
  payload?: Maybe<Scalars['JSON']>
  scope?: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type MutationLoginArgs = {
  input: LoginInput
}

export type MutationRegisterArgs = {
  input: RegisterInput
}

export type MutationUserCreateCalendarArgs = {
  input: UserCreateCalendarInput
}

export type MutationUserCreateCalendarEventArgs = {
  input: UserCreateCalendarEventInput
}

export type MutationUserCreateCalendarEventExceptionArgs = {
  input: UserCreateCalendarEventExceptionInput
}

export type MutationUserCreateCalendarWeekdayArgs = {
  input: UserCreateCalendarWeekdayInput
}

export type MutationUserCreateSettingArgs = {
  input: UserCreateSettingInput
}

export type MutationUserCreateUserCalendarArgs = {
  input: UserCreateUserCalendarInput
}

export type MutationUserDeleteCalendarArgs = {
  calendarId: Scalars['String']
}

export type MutationUserDeleteCalendarEventArgs = {
  calendarEventId: Scalars['String']
}

export type MutationUserDeleteCalendarEventExceptionArgs = {
  calendarEventExceptionId: Scalars['String']
}

export type MutationUserDeleteCalendarWeekdayArgs = {
  calendarWeekdayId: Scalars['String']
}

export type MutationUserDeleteSettingArgs = {
  settingId: Scalars['String']
}

export type MutationUserDeleteUserCalendarArgs = {
  userCalendarId: Scalars['String']
}

export type MutationUserUpdateCalendarArgs = {
  calendarId: Scalars['String']
  input: UserUpdateCalendarInput
}

export type MutationUserUpdateCalendarEventArgs = {
  calendarEventId: Scalars['String']
  input: UserUpdateCalendarEventInput
}

export type MutationUserUpdateCalendarEventExceptionArgs = {
  calendarEventExceptionId: Scalars['String']
  input: UserUpdateCalendarEventExceptionInput
}

export type MutationUserUpdateCalendarWeekdayArgs = {
  calendarWeekdayId: Scalars['String']
  input: UserUpdateCalendarWeekdayInput
}

export type MutationUserUpdateSettingArgs = {
  input: UserUpdateSettingInput
  settingId: Scalars['String']
}

export type MutationUserUpdateUserCalendarArgs = {
  input: UserUpdateUserCalendarInput
  userCalendarId: Scalars['String']
}

export type Query = {
  __typename?: 'Query'
  accountEmails?: Maybe<Array<Email>>
  accountProfile?: Maybe<User>
  accountUsernameAvailable?: Maybe<Scalars['Boolean']>
  adminCalendar?: Maybe<Calendar>
  adminCalendarEvent?: Maybe<CalendarEvent>
  adminCalendarEventException?: Maybe<CalendarEventException>
  adminCalendarEventExceptions?: Maybe<Array<CalendarEventException>>
  adminCalendarEvents?: Maybe<Array<CalendarEvent>>
  adminCalendarWeekday?: Maybe<CalendarWeekday>
  adminCalendarWeekdays?: Maybe<Array<CalendarWeekday>>
  adminCalendars?: Maybe<Array<Calendar>>
  adminCountCalendarEventExceptions?: Maybe<CorePaging>
  adminCountCalendarEvents?: Maybe<CorePaging>
  adminCountCalendarWeekdays?: Maybe<CorePaging>
  adminCountCalendars?: Maybe<CorePaging>
  adminCountSettings?: Maybe<CorePaging>
  adminCountUserCalendars?: Maybe<CorePaging>
  adminCountUsers?: Maybe<CorePaging>
  adminSetting?: Maybe<Setting>
  adminSettings?: Maybe<Array<Setting>>
  adminUser?: Maybe<User>
  adminUserCalendar?: Maybe<UserCalendar>
  adminUserCalendars?: Maybe<Array<UserCalendar>>
  adminUsers?: Maybe<Array<User>>
  me?: Maybe<User>
  uptime?: Maybe<Scalars['Float']>
  userCalendar?: Maybe<Calendar>
  userCalendarEvent?: Maybe<CalendarEvent>
  userCalendarEventException?: Maybe<CalendarEventException>
  userCalendarEventExceptions?: Maybe<Array<CalendarEventException>>
  userCalendarEvents?: Maybe<Array<CalendarEvent>>
  userCalendarWeekday?: Maybe<CalendarWeekday>
  userCalendarWeekdays?: Maybe<Array<CalendarWeekday>>
  userCalendars?: Maybe<Array<Calendar>>
  userCountCalendarEventExceptions?: Maybe<CorePaging>
  userCountCalendarEvents?: Maybe<CorePaging>
  userCountCalendarWeekdays?: Maybe<CorePaging>
  userCountCalendars?: Maybe<CorePaging>
  userCountSettings?: Maybe<CorePaging>
  userCountUserCalendars?: Maybe<CorePaging>
  userSetting?: Maybe<Setting>
  userSettings?: Maybe<Array<Setting>>
  userUserCalendar?: Maybe<UserCalendar>
  userUserCalendars?: Maybe<Array<UserCalendar>>
}

export type QueryAccountUsernameAvailableArgs = {
  username: Scalars['String']
}

export type QueryAdminCalendarArgs = {
  calendarId: Scalars['String']
}

export type QueryAdminCalendarEventArgs = {
  calendarEventId: Scalars['String']
}

export type QueryAdminCalendarEventExceptionArgs = {
  calendarEventExceptionId: Scalars['String']
}

export type QueryAdminCalendarEventExceptionsArgs = {
  input?: Maybe<AdminListCalendarEventExceptionInput>
}

export type QueryAdminCalendarEventsArgs = {
  input?: Maybe<AdminListCalendarEventInput>
}

export type QueryAdminCalendarWeekdayArgs = {
  calendarWeekdayId: Scalars['String']
}

export type QueryAdminCalendarWeekdaysArgs = {
  input?: Maybe<AdminListCalendarWeekdayInput>
}

export type QueryAdminCalendarsArgs = {
  input?: Maybe<AdminListCalendarInput>
}

export type QueryAdminCountCalendarEventExceptionsArgs = {
  input?: Maybe<AdminListCalendarEventExceptionInput>
}

export type QueryAdminCountCalendarEventsArgs = {
  input?: Maybe<AdminListCalendarEventInput>
}

export type QueryAdminCountCalendarWeekdaysArgs = {
  input?: Maybe<AdminListCalendarWeekdayInput>
}

export type QueryAdminCountCalendarsArgs = {
  input?: Maybe<AdminListCalendarInput>
}

export type QueryAdminCountSettingsArgs = {
  input?: Maybe<AdminListSettingInput>
}

export type QueryAdminCountUserCalendarsArgs = {
  input?: Maybe<AdminListUserCalendarInput>
}

export type QueryAdminCountUsersArgs = {
  paging?: Maybe<CorePagingInput>
}

export type QueryAdminSettingArgs = {
  settingId: Scalars['String']
}

export type QueryAdminSettingsArgs = {
  input?: Maybe<AdminListSettingInput>
}

export type QueryAdminUserArgs = {
  userId: Scalars['String']
}

export type QueryAdminUserCalendarArgs = {
  userCalendarId: Scalars['String']
}

export type QueryAdminUserCalendarsArgs = {
  input?: Maybe<AdminListUserCalendarInput>
}

export type QueryAdminUsersArgs = {
  paging?: Maybe<CorePagingInput>
}

export type QueryUserCalendarArgs = {
  calendarId: Scalars['String']
}

export type QueryUserCalendarEventArgs = {
  calendarEventId: Scalars['String']
}

export type QueryUserCalendarEventExceptionArgs = {
  calendarEventExceptionId: Scalars['String']
}

export type QueryUserCalendarEventExceptionsArgs = {
  input?: Maybe<UserListCalendarEventExceptionInput>
}

export type QueryUserCalendarEventsArgs = {
  input?: Maybe<UserListCalendarEventInput>
}

export type QueryUserCalendarWeekdayArgs = {
  calendarWeekdayId: Scalars['String']
}

export type QueryUserCalendarWeekdaysArgs = {
  input?: Maybe<UserListCalendarWeekdayInput>
}

export type QueryUserCalendarsArgs = {
  input?: Maybe<UserListCalendarInput>
}

export type QueryUserCountCalendarEventExceptionsArgs = {
  input?: Maybe<UserListCalendarEventExceptionInput>
}

export type QueryUserCountCalendarEventsArgs = {
  input?: Maybe<UserListCalendarEventInput>
}

export type QueryUserCountCalendarWeekdaysArgs = {
  input?: Maybe<UserListCalendarWeekdayInput>
}

export type QueryUserCountCalendarsArgs = {
  input?: Maybe<UserListCalendarInput>
}

export type QueryUserCountSettingsArgs = {
  input?: Maybe<UserListSettingInput>
}

export type QueryUserCountUserCalendarsArgs = {
  input?: Maybe<UserListUserCalendarInput>
}

export type QueryUserSettingArgs = {
  settingId: Scalars['String']
}

export type QueryUserSettingsArgs = {
  input?: Maybe<UserListSettingInput>
}

export type QueryUserUserCalendarArgs = {
  userCalendarId: Scalars['String']
}

export type QueryUserUserCalendarsArgs = {
  input?: Maybe<UserListUserCalendarInput>
}

export type RegisterInput = {
  avatarUrl?: Maybe<Scalars['String']>
  email: Scalars['String']
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  password: Scalars['String']
  phone?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
}

export enum Role {
  Admin = 'Admin',
  User = 'User',
}

export type Setting = {
  __typename?: 'Setting'
  createdAt?: Maybe<Scalars['DateTime']>
  dateFormat?: Maybe<DateFormat>
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  startWeekOn?: Maybe<StartWeekOn>
  timeFormat?: Maybe<TimeFormat>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export enum StartWeekOn {
  One = 'One',
  Six = 'Six',
  Zero = 'Zero',
}

export type Subscription = {
  __typename?: 'Subscription'
  intercomSub?: Maybe<IntercomMessage>
}

export type SubscriptionIntercomSubArgs = {
  scope?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export enum TimeFormat {
  Twelve = 'Twelve',
  TwentyFour = 'TwentyFour',
}

export type User = {
  __typename?: 'User'
  avatarUrl?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  email?: Maybe<Scalars['String']>
  emails?: Maybe<Array<Email>>
  firstName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  role?: Maybe<Role>
  updatedAt?: Maybe<Scalars['DateTime']>
  username?: Maybe<Scalars['String']>
}

export type UserCalendar = {
  __typename?: 'UserCalendar'
  calendarId?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  userId?: Maybe<Scalars['String']>
}

export type UserCreateCalendarEventExceptionInput = {
  eventId?: Maybe<Scalars['String']>
  exdate?: Maybe<Scalars['String']>
}

export type UserCreateCalendarEventInput = {
  allDay?: Maybe<Scalars['Boolean']>
  calendarId?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  end?: Maybe<Scalars['String']>
  isFirstInstance?: Maybe<Scalars['Boolean']>
  recurrence?: Maybe<Scalars['String']>
  recurringEventId?: Maybe<Scalars['String']>
  start?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type UserCreateCalendarInput = {
  color?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  visible?: Maybe<Scalars['Boolean']>
}

export type UserCreateCalendarWeekdayInput = {
  abbr?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type UserCreateSettingInput = {
  dateFormat?: Maybe<DateFormat>
  name?: Maybe<Scalars['String']>
  startWeekOn?: Maybe<StartWeekOn>
  timeFormat?: Maybe<TimeFormat>
}

export type UserCreateUserCalendarInput = {
  calendarId?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['String']>
}

export type UserListCalendarEventExceptionInput = {
  limit?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  skip?: Maybe<Scalars['Int']>
}

export type UserListCalendarEventInput = {
  limit?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  skip?: Maybe<Scalars['Int']>
}

export type UserListCalendarInput = {
  limit?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  skip?: Maybe<Scalars['Int']>
}

export type UserListCalendarWeekdayInput = {
  limit?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  skip?: Maybe<Scalars['Int']>
}

export type UserListSettingInput = {
  limit?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  skip?: Maybe<Scalars['Int']>
}

export type UserListUserCalendarInput = {
  limit?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  skip?: Maybe<Scalars['Int']>
}

export type UserUpdateCalendarEventExceptionInput = {
  eventId?: Maybe<Scalars['String']>
  exdate?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
}

export type UserUpdateCalendarEventInput = {
  allDay?: Maybe<Scalars['Boolean']>
  calendarId?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  end?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  isFirstInstance?: Maybe<Scalars['Boolean']>
  recurrence?: Maybe<Scalars['String']>
  recurringEventId?: Maybe<Scalars['String']>
  start?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type UserUpdateCalendarInput = {
  color?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  visible?: Maybe<Scalars['Boolean']>
}

export type UserUpdateCalendarWeekdayInput = {
  abbr?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type UserUpdateSettingInput = {
  dateFormat?: Maybe<DateFormat>
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  startWeekOn?: Maybe<StartWeekOn>
  timeFormat?: Maybe<TimeFormat>
}

export type UserUpdateUserCalendarInput = {
  calendarId?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['String']>
}

export type AccountEmailsQueryVariables = Exact<{ [key: string]: never }>

export type AccountEmailsQuery = { __typename?: 'Query' } & {
  accountEmails?: Maybe<Array<{ __typename?: 'Email' } & EmailDetailsFragment>>
}

export type AccountProfileQueryVariables = Exact<{ [key: string]: never }>

export type AccountProfileQuery = { __typename?: 'Query' } & {
  accountProfile?: Maybe<
    { __typename?: 'User' } & {
      emails?: Maybe<Array<{ __typename?: 'Email' } & EmailDetailsFragment>>
    } & UserDetailsFragment
  >
}

export type AccountUsernameAvailableQueryVariables = Exact<{
  username: Scalars['String']
}>

export type AccountUsernameAvailableQuery = { __typename?: 'Query' } & Pick<Query, 'accountUsernameAvailable'>

export type AccountCreateEmailMutationVariables = Exact<{
  input: AccountCreateEmailInput
}>

export type AccountCreateEmailMutation = { __typename?: 'Mutation' } & {
  accountCreateEmail?: Maybe<{ __typename?: 'Email' } & EmailDetailsFragment>
}

export type AccountDeleteEmailMutationVariables = Exact<{
  emailId: Scalars['String']
}>

export type AccountDeleteEmailMutation = { __typename?: 'Mutation' } & {
  accountDeleteEmail?: Maybe<{ __typename?: 'Email' } & EmailDetailsFragment>
}

export type AccountMarkEmailPrimaryMutationVariables = Exact<{
  emailId: Scalars['String']
}>

export type AccountMarkEmailPrimaryMutation = { __typename?: 'Mutation' } & {
  accountMarkEmailPrimary?: Maybe<{ __typename?: 'Email' } & EmailDetailsFragment>
}

export type AccountMarkEmailPrivateMutationVariables = Exact<{
  emailId: Scalars['String']
}>

export type AccountMarkEmailPrivateMutation = { __typename?: 'Mutation' } & {
  accountMarkEmailPrivate?: Maybe<{ __typename?: 'Email' } & EmailDetailsFragment>
}

export type AccountMarkEmailPublicMutationVariables = Exact<{
  emailId: Scalars['String']
}>

export type AccountMarkEmailPublicMutation = { __typename?: 'Mutation' } & {
  accountMarkEmailPublic?: Maybe<{ __typename?: 'Email' } & EmailDetailsFragment>
}

export type AccountUpdateProfileMutationVariables = Exact<{
  input: AccountUpdateProfileInput
}>

export type AccountUpdateProfileMutation = { __typename?: 'Mutation' } & {
  accountUpdateProfile?: Maybe<{ __typename?: 'User' } & UserDetailsFragment>
}

export type AccountUpdateUsernameMutationVariables = Exact<{
  username: Scalars['String']
}>

export type AccountUpdateUsernameMutation = { __typename?: 'Mutation' } & {
  accountUpdateUsername?: Maybe<{ __typename?: 'User' } & UserDetailsFragment>
}

export type AccountUpdatePasswordMutationVariables = Exact<{
  input: AccountUpdatePasswordInput
}>

export type AccountUpdatePasswordMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'accountUpdatePassword'>

export type AuthTokenDetailsFragment = { __typename?: 'AuthToken' } & Pick<AuthToken, 'token'>

export type MeQueryVariables = Exact<{ [key: string]: never }>

export type MeQuery = { __typename?: 'Query' } & { me?: Maybe<{ __typename?: 'User' } & UserDetailsFragment> }

export type LogoutMutationVariables = Exact<{ [key: string]: never }>

export type LogoutMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'logout'>

export type LoginMutationVariables = Exact<{
  input: LoginInput
}>

export type LoginMutation = { __typename?: 'Mutation' } & {
  login?: Maybe<{ __typename?: 'AuthToken' } & AuthTokenDetailsFragment>
}

export type RegisterMutationVariables = Exact<{
  input: RegisterInput
}>

export type RegisterMutation = { __typename?: 'Mutation' } & {
  register?: Maybe<{ __typename?: 'AuthToken' } & AuthTokenDetailsFragment>
}

export type CalendarEventExceptionDetailsFragment = { __typename?: 'CalendarEventException' } & Pick<
  CalendarEventException,
  'id' | 'eventId' | 'exdate'
>

export type AdminCalendarEventExceptionsQueryVariables = Exact<{
  input?: Maybe<AdminListCalendarEventExceptionInput>
}>

export type AdminCalendarEventExceptionsQuery = { __typename?: 'Query' } & {
  items?: Maybe<Array<{ __typename?: 'CalendarEventException' } & CalendarEventExceptionDetailsFragment>>
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type AdminCountCalendarEventExceptionsQueryVariables = Exact<{
  input?: Maybe<AdminListCalendarEventExceptionInput>
}>

export type AdminCountCalendarEventExceptionsQuery = { __typename?: 'Query' } & {
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type AdminCalendarEventExceptionQueryVariables = Exact<{
  calendarEventExceptionId: Scalars['String']
}>

export type AdminCalendarEventExceptionQuery = { __typename?: 'Query' } & {
  item?: Maybe<{ __typename?: 'CalendarEventException' } & CalendarEventExceptionDetailsFragment>
}

export type AdminCreateCalendarEventExceptionMutationVariables = Exact<{
  input: AdminCreateCalendarEventExceptionInput
}>

export type AdminCreateCalendarEventExceptionMutation = { __typename?: 'Mutation' } & {
  created?: Maybe<{ __typename?: 'CalendarEventException' } & CalendarEventExceptionDetailsFragment>
}

export type AdminUpdateCalendarEventExceptionMutationVariables = Exact<{
  calendarEventExceptionId: Scalars['String']
  input: AdminUpdateCalendarEventExceptionInput
}>

export type AdminUpdateCalendarEventExceptionMutation = { __typename?: 'Mutation' } & {
  updated?: Maybe<{ __typename?: 'CalendarEventException' } & CalendarEventExceptionDetailsFragment>
}

export type AdminDeleteCalendarEventExceptionMutationVariables = Exact<{
  calendarEventExceptionId: Scalars['String']
}>

export type AdminDeleteCalendarEventExceptionMutation = { __typename?: 'Mutation' } & {
  deleted?: Maybe<{ __typename?: 'CalendarEventException' } & CalendarEventExceptionDetailsFragment>
}

export type UserCalendarEventExceptionsQueryVariables = Exact<{
  input?: Maybe<UserListCalendarEventExceptionInput>
}>

export type UserCalendarEventExceptionsQuery = { __typename?: 'Query' } & {
  items?: Maybe<Array<{ __typename?: 'CalendarEventException' } & CalendarEventExceptionDetailsFragment>>
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type UserCountCalendarEventExceptionsQueryVariables = Exact<{
  input?: Maybe<UserListCalendarEventExceptionInput>
}>

export type UserCountCalendarEventExceptionsQuery = { __typename?: 'Query' } & {
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type UserCalendarEventExceptionQueryVariables = Exact<{
  calendarEventExceptionId: Scalars['String']
}>

export type UserCalendarEventExceptionQuery = { __typename?: 'Query' } & {
  item?: Maybe<{ __typename?: 'CalendarEventException' } & CalendarEventExceptionDetailsFragment>
}

export type UserCreateCalendarEventExceptionMutationVariables = Exact<{
  input: UserCreateCalendarEventExceptionInput
}>

export type UserCreateCalendarEventExceptionMutation = { __typename?: 'Mutation' } & {
  created?: Maybe<{ __typename?: 'CalendarEventException' } & CalendarEventExceptionDetailsFragment>
}

export type UserUpdateCalendarEventExceptionMutationVariables = Exact<{
  calendarEventExceptionId: Scalars['String']
  input: UserUpdateCalendarEventExceptionInput
}>

export type UserUpdateCalendarEventExceptionMutation = { __typename?: 'Mutation' } & {
  updated?: Maybe<{ __typename?: 'CalendarEventException' } & CalendarEventExceptionDetailsFragment>
}

export type UserDeleteCalendarEventExceptionMutationVariables = Exact<{
  calendarEventExceptionId: Scalars['String']
}>

export type UserDeleteCalendarEventExceptionMutation = { __typename?: 'Mutation' } & {
  deleted?: Maybe<{ __typename?: 'CalendarEventException' } & CalendarEventExceptionDetailsFragment>
}

export type CalendarEventDetailsFragment = { __typename?: 'CalendarEvent' } & Pick<
  CalendarEvent,
  | 'id'
  | 'calendarId'
  | 'recurringEventId'
  | 'isFirstInstance'
  | 'title'
  | 'description'
  | 'start'
  | 'end'
  | 'allDay'
  | 'recurrence'
>

export type AdminCalendarEventsQueryVariables = Exact<{
  input?: Maybe<AdminListCalendarEventInput>
}>

export type AdminCalendarEventsQuery = { __typename?: 'Query' } & {
  items?: Maybe<Array<{ __typename?: 'CalendarEvent' } & CalendarEventDetailsFragment>>
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type AdminCountCalendarEventsQueryVariables = Exact<{
  input?: Maybe<AdminListCalendarEventInput>
}>

export type AdminCountCalendarEventsQuery = { __typename?: 'Query' } & {
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type AdminCalendarEventQueryVariables = Exact<{
  calendarEventId: Scalars['String']
}>

export type AdminCalendarEventQuery = { __typename?: 'Query' } & {
  item?: Maybe<{ __typename?: 'CalendarEvent' } & CalendarEventDetailsFragment>
}

export type AdminCreateCalendarEventMutationVariables = Exact<{
  input: AdminCreateCalendarEventInput
}>

export type AdminCreateCalendarEventMutation = { __typename?: 'Mutation' } & {
  created?: Maybe<{ __typename?: 'CalendarEvent' } & CalendarEventDetailsFragment>
}

export type AdminUpdateCalendarEventMutationVariables = Exact<{
  calendarEventId: Scalars['String']
  input: AdminUpdateCalendarEventInput
}>

export type AdminUpdateCalendarEventMutation = { __typename?: 'Mutation' } & {
  updated?: Maybe<{ __typename?: 'CalendarEvent' } & CalendarEventDetailsFragment>
}

export type AdminDeleteCalendarEventMutationVariables = Exact<{
  calendarEventId: Scalars['String']
}>

export type AdminDeleteCalendarEventMutation = { __typename?: 'Mutation' } & {
  deleted?: Maybe<{ __typename?: 'CalendarEvent' } & CalendarEventDetailsFragment>
}

export type UserCalendarEventsQueryVariables = Exact<{
  input?: Maybe<UserListCalendarEventInput>
}>

export type UserCalendarEventsQuery = { __typename?: 'Query' } & {
  items?: Maybe<Array<{ __typename?: 'CalendarEvent' } & CalendarEventDetailsFragment>>
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type UserCountCalendarEventsQueryVariables = Exact<{
  input?: Maybe<UserListCalendarEventInput>
}>

export type UserCountCalendarEventsQuery = { __typename?: 'Query' } & {
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type UserCalendarEventQueryVariables = Exact<{
  calendarEventId: Scalars['String']
}>

export type UserCalendarEventQuery = { __typename?: 'Query' } & {
  item?: Maybe<{ __typename?: 'CalendarEvent' } & CalendarEventDetailsFragment>
}

export type UserCreateCalendarEventMutationVariables = Exact<{
  input: UserCreateCalendarEventInput
}>

export type UserCreateCalendarEventMutation = { __typename?: 'Mutation' } & {
  created?: Maybe<{ __typename?: 'CalendarEvent' } & CalendarEventDetailsFragment>
}

export type UserUpdateCalendarEventMutationVariables = Exact<{
  calendarEventId: Scalars['String']
  input: UserUpdateCalendarEventInput
}>

export type UserUpdateCalendarEventMutation = { __typename?: 'Mutation' } & {
  updated?: Maybe<{ __typename?: 'CalendarEvent' } & CalendarEventDetailsFragment>
}

export type UserDeleteCalendarEventMutationVariables = Exact<{
  calendarEventId: Scalars['String']
}>

export type UserDeleteCalendarEventMutation = { __typename?: 'Mutation' } & {
  deleted?: Maybe<{ __typename?: 'CalendarEvent' } & CalendarEventDetailsFragment>
}

export type CalendarWeekdayDetailsFragment = { __typename?: 'CalendarWeekday' } & Pick<
  CalendarWeekday,
  'id' | 'abbr' | 'label' | 'value'
>

export type AdminCalendarWeekdaysQueryVariables = Exact<{
  input?: Maybe<AdminListCalendarWeekdayInput>
}>

export type AdminCalendarWeekdaysQuery = { __typename?: 'Query' } & {
  items?: Maybe<Array<{ __typename?: 'CalendarWeekday' } & CalendarWeekdayDetailsFragment>>
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type AdminCountCalendarWeekdaysQueryVariables = Exact<{
  input?: Maybe<AdminListCalendarWeekdayInput>
}>

export type AdminCountCalendarWeekdaysQuery = { __typename?: 'Query' } & {
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type AdminCalendarWeekdayQueryVariables = Exact<{
  calendarWeekdayId: Scalars['String']
}>

export type AdminCalendarWeekdayQuery = { __typename?: 'Query' } & {
  item?: Maybe<{ __typename?: 'CalendarWeekday' } & CalendarWeekdayDetailsFragment>
}

export type AdminCreateCalendarWeekdayMutationVariables = Exact<{
  input: AdminCreateCalendarWeekdayInput
}>

export type AdminCreateCalendarWeekdayMutation = { __typename?: 'Mutation' } & {
  created?: Maybe<{ __typename?: 'CalendarWeekday' } & CalendarWeekdayDetailsFragment>
}

export type AdminUpdateCalendarWeekdayMutationVariables = Exact<{
  calendarWeekdayId: Scalars['String']
  input: AdminUpdateCalendarWeekdayInput
}>

export type AdminUpdateCalendarWeekdayMutation = { __typename?: 'Mutation' } & {
  updated?: Maybe<{ __typename?: 'CalendarWeekday' } & CalendarWeekdayDetailsFragment>
}

export type AdminDeleteCalendarWeekdayMutationVariables = Exact<{
  calendarWeekdayId: Scalars['String']
}>

export type AdminDeleteCalendarWeekdayMutation = { __typename?: 'Mutation' } & {
  deleted?: Maybe<{ __typename?: 'CalendarWeekday' } & CalendarWeekdayDetailsFragment>
}

export type UserCalendarWeekdaysQueryVariables = Exact<{
  input?: Maybe<UserListCalendarWeekdayInput>
}>

export type UserCalendarWeekdaysQuery = { __typename?: 'Query' } & {
  items?: Maybe<Array<{ __typename?: 'CalendarWeekday' } & CalendarWeekdayDetailsFragment>>
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type UserCountCalendarWeekdaysQueryVariables = Exact<{
  input?: Maybe<UserListCalendarWeekdayInput>
}>

export type UserCountCalendarWeekdaysQuery = { __typename?: 'Query' } & {
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type UserCalendarWeekdayQueryVariables = Exact<{
  calendarWeekdayId: Scalars['String']
}>

export type UserCalendarWeekdayQuery = { __typename?: 'Query' } & {
  item?: Maybe<{ __typename?: 'CalendarWeekday' } & CalendarWeekdayDetailsFragment>
}

export type UserCreateCalendarWeekdayMutationVariables = Exact<{
  input: UserCreateCalendarWeekdayInput
}>

export type UserCreateCalendarWeekdayMutation = { __typename?: 'Mutation' } & {
  created?: Maybe<{ __typename?: 'CalendarWeekday' } & CalendarWeekdayDetailsFragment>
}

export type UserUpdateCalendarWeekdayMutationVariables = Exact<{
  calendarWeekdayId: Scalars['String']
  input: UserUpdateCalendarWeekdayInput
}>

export type UserUpdateCalendarWeekdayMutation = { __typename?: 'Mutation' } & {
  updated?: Maybe<{ __typename?: 'CalendarWeekday' } & CalendarWeekdayDetailsFragment>
}

export type UserDeleteCalendarWeekdayMutationVariables = Exact<{
  calendarWeekdayId: Scalars['String']
}>

export type UserDeleteCalendarWeekdayMutation = { __typename?: 'Mutation' } & {
  deleted?: Maybe<{ __typename?: 'CalendarWeekday' } & CalendarWeekdayDetailsFragment>
}

export type CalendarDetailsFragment = { __typename?: 'Calendar' } & Pick<Calendar, 'id' | 'title' | 'color' | 'visible'>

export type AdminCalendarsQueryVariables = Exact<{
  input?: Maybe<AdminListCalendarInput>
}>

export type AdminCalendarsQuery = { __typename?: 'Query' } & {
  items?: Maybe<Array<{ __typename?: 'Calendar' } & CalendarDetailsFragment>>
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type AdminCountCalendarsQueryVariables = Exact<{
  input?: Maybe<AdminListCalendarInput>
}>

export type AdminCountCalendarsQuery = { __typename?: 'Query' } & {
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type AdminCalendarQueryVariables = Exact<{
  calendarId: Scalars['String']
}>

export type AdminCalendarQuery = { __typename?: 'Query' } & {
  item?: Maybe<{ __typename?: 'Calendar' } & CalendarDetailsFragment>
}

export type AdminCreateCalendarMutationVariables = Exact<{
  input: AdminCreateCalendarInput
}>

export type AdminCreateCalendarMutation = { __typename?: 'Mutation' } & {
  created?: Maybe<{ __typename?: 'Calendar' } & CalendarDetailsFragment>
}

export type AdminUpdateCalendarMutationVariables = Exact<{
  calendarId: Scalars['String']
  input: AdminUpdateCalendarInput
}>

export type AdminUpdateCalendarMutation = { __typename?: 'Mutation' } & {
  updated?: Maybe<{ __typename?: 'Calendar' } & CalendarDetailsFragment>
}

export type AdminDeleteCalendarMutationVariables = Exact<{
  calendarId: Scalars['String']
}>

export type AdminDeleteCalendarMutation = { __typename?: 'Mutation' } & {
  deleted?: Maybe<{ __typename?: 'Calendar' } & CalendarDetailsFragment>
}

export type UserCalendarsQueryVariables = Exact<{
  input?: Maybe<UserListCalendarInput>
}>

export type UserCalendarsQuery = { __typename?: 'Query' } & {
  items?: Maybe<Array<{ __typename?: 'Calendar' } & CalendarDetailsFragment>>
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type UserCountCalendarsQueryVariables = Exact<{
  input?: Maybe<UserListCalendarInput>
}>

export type UserCountCalendarsQuery = { __typename?: 'Query' } & {
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type UserCalendarQueryVariables = Exact<{
  calendarId: Scalars['String']
}>

export type UserCalendarQuery = { __typename?: 'Query' } & {
  item?: Maybe<{ __typename?: 'Calendar' } & CalendarDetailsFragment>
}

export type UserCreateCalendarMutationVariables = Exact<{
  input: UserCreateCalendarInput
}>

export type UserCreateCalendarMutation = { __typename?: 'Mutation' } & {
  created?: Maybe<{ __typename?: 'Calendar' } & CalendarDetailsFragment>
}

export type UserUpdateCalendarMutationVariables = Exact<{
  calendarId: Scalars['String']
  input: UserUpdateCalendarInput
}>

export type UserUpdateCalendarMutation = { __typename?: 'Mutation' } & {
  updated?: Maybe<{ __typename?: 'Calendar' } & CalendarDetailsFragment>
}

export type UserDeleteCalendarMutationVariables = Exact<{
  calendarId: Scalars['String']
}>

export type UserDeleteCalendarMutation = { __typename?: 'Mutation' } & {
  deleted?: Maybe<{ __typename?: 'Calendar' } & CalendarDetailsFragment>
}

export type UptimeQueryVariables = Exact<{ [key: string]: never }>

export type UptimeQuery = { __typename?: 'Query' } & Pick<Query, 'uptime'>

export type CorePagingDetailsFragment = { __typename?: 'CorePaging' } & Pick<CorePaging, 'limit' | 'skip' | 'total'>

export type IntercomDetailsFragment = { __typename?: 'IntercomMessage' } & Pick<
  IntercomMessage,
  'type' | 'scope' | 'payload'
>

export type IntercomPubMutationVariables = Exact<{
  type: Scalars['String']
  scope?: Maybe<Scalars['String']>
  payload?: Maybe<Scalars['JSON']>
}>

export type IntercomPubMutation = { __typename?: 'Mutation' } & {
  intercomPub?: Maybe<{ __typename?: 'IntercomMessage' } & IntercomDetailsFragment>
}

export type IntercomSubSubscriptionVariables = Exact<{ [key: string]: never }>

export type IntercomSubSubscription = { __typename?: 'Subscription' } & {
  intercomSub?: Maybe<{ __typename?: 'IntercomMessage' } & IntercomDetailsFragment>
}

export type SettingDetailsFragment = { __typename?: 'Setting' } & Pick<
  Setting,
  'id' | 'dateFormat' | 'timeFormat' | 'startWeekOn' | 'createdAt' | 'updatedAt' | 'name'
>

export type AdminSettingsQueryVariables = Exact<{
  input?: Maybe<AdminListSettingInput>
}>

export type AdminSettingsQuery = { __typename?: 'Query' } & {
  items?: Maybe<Array<{ __typename?: 'Setting' } & SettingDetailsFragment>>
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type AdminCountSettingsQueryVariables = Exact<{
  input?: Maybe<AdminListSettingInput>
}>

export type AdminCountSettingsQuery = { __typename?: 'Query' } & {
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type AdminSettingQueryVariables = Exact<{
  settingId: Scalars['String']
}>

export type AdminSettingQuery = { __typename?: 'Query' } & {
  item?: Maybe<{ __typename?: 'Setting' } & SettingDetailsFragment>
}

export type AdminCreateSettingMutationVariables = Exact<{
  input: AdminCreateSettingInput
}>

export type AdminCreateSettingMutation = { __typename?: 'Mutation' } & {
  created?: Maybe<{ __typename?: 'Setting' } & SettingDetailsFragment>
}

export type AdminUpdateSettingMutationVariables = Exact<{
  settingId: Scalars['String']
  input: AdminUpdateSettingInput
}>

export type AdminUpdateSettingMutation = { __typename?: 'Mutation' } & {
  updated?: Maybe<{ __typename?: 'Setting' } & SettingDetailsFragment>
}

export type AdminDeleteSettingMutationVariables = Exact<{
  settingId: Scalars['String']
}>

export type AdminDeleteSettingMutation = { __typename?: 'Mutation' } & {
  deleted?: Maybe<{ __typename?: 'Setting' } & SettingDetailsFragment>
}

export type UserSettingsQueryVariables = Exact<{
  input?: Maybe<UserListSettingInput>
}>

export type UserSettingsQuery = { __typename?: 'Query' } & {
  items?: Maybe<Array<{ __typename?: 'Setting' } & SettingDetailsFragment>>
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type UserCountSettingsQueryVariables = Exact<{
  input?: Maybe<UserListSettingInput>
}>

export type UserCountSettingsQuery = { __typename?: 'Query' } & {
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type UserSettingQueryVariables = Exact<{
  settingId: Scalars['String']
}>

export type UserSettingQuery = { __typename?: 'Query' } & {
  item?: Maybe<{ __typename?: 'Setting' } & SettingDetailsFragment>
}

export type UserCreateSettingMutationVariables = Exact<{
  input: UserCreateSettingInput
}>

export type UserCreateSettingMutation = { __typename?: 'Mutation' } & {
  created?: Maybe<{ __typename?: 'Setting' } & SettingDetailsFragment>
}

export type UserUpdateSettingMutationVariables = Exact<{
  settingId: Scalars['String']
  input: UserUpdateSettingInput
}>

export type UserUpdateSettingMutation = { __typename?: 'Mutation' } & {
  updated?: Maybe<{ __typename?: 'Setting' } & SettingDetailsFragment>
}

export type UserDeleteSettingMutationVariables = Exact<{
  settingId: Scalars['String']
}>

export type UserDeleteSettingMutation = { __typename?: 'Mutation' } & {
  deleted?: Maybe<{ __typename?: 'Setting' } & SettingDetailsFragment>
}

export type UserCalendarDetailsFragment = { __typename?: 'UserCalendar' } & Pick<
  UserCalendar,
  'id' | 'createdAt' | 'updatedAt' | 'name' | 'userId' | 'calendarId'
>

export type AdminUserCalendarsQueryVariables = Exact<{
  input?: Maybe<AdminListUserCalendarInput>
}>

export type AdminUserCalendarsQuery = { __typename?: 'Query' } & {
  items?: Maybe<Array<{ __typename?: 'UserCalendar' } & UserCalendarDetailsFragment>>
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type AdminCountUserCalendarsQueryVariables = Exact<{
  input?: Maybe<AdminListUserCalendarInput>
}>

export type AdminCountUserCalendarsQuery = { __typename?: 'Query' } & {
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type AdminUserCalendarQueryVariables = Exact<{
  userCalendarId: Scalars['String']
}>

export type AdminUserCalendarQuery = { __typename?: 'Query' } & {
  item?: Maybe<{ __typename?: 'UserCalendar' } & UserCalendarDetailsFragment>
}

export type AdminCreateUserCalendarMutationVariables = Exact<{
  input: AdminCreateUserCalendarInput
}>

export type AdminCreateUserCalendarMutation = { __typename?: 'Mutation' } & {
  created?: Maybe<{ __typename?: 'UserCalendar' } & UserCalendarDetailsFragment>
}

export type AdminUpdateUserCalendarMutationVariables = Exact<{
  userCalendarId: Scalars['String']
  input: AdminUpdateUserCalendarInput
}>

export type AdminUpdateUserCalendarMutation = { __typename?: 'Mutation' } & {
  updated?: Maybe<{ __typename?: 'UserCalendar' } & UserCalendarDetailsFragment>
}

export type AdminDeleteUserCalendarMutationVariables = Exact<{
  userCalendarId: Scalars['String']
}>

export type AdminDeleteUserCalendarMutation = { __typename?: 'Mutation' } & {
  deleted?: Maybe<{ __typename?: 'UserCalendar' } & UserCalendarDetailsFragment>
}

export type UserUserCalendarsQueryVariables = Exact<{
  input?: Maybe<UserListUserCalendarInput>
}>

export type UserUserCalendarsQuery = { __typename?: 'Query' } & {
  items?: Maybe<Array<{ __typename?: 'UserCalendar' } & UserCalendarDetailsFragment>>
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type UserCountUserCalendarsQueryVariables = Exact<{
  input?: Maybe<UserListUserCalendarInput>
}>

export type UserCountUserCalendarsQuery = { __typename?: 'Query' } & {
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type UserUserCalendarQueryVariables = Exact<{
  userCalendarId: Scalars['String']
}>

export type UserUserCalendarQuery = { __typename?: 'Query' } & {
  item?: Maybe<{ __typename?: 'UserCalendar' } & UserCalendarDetailsFragment>
}

export type UserCreateUserCalendarMutationVariables = Exact<{
  input: UserCreateUserCalendarInput
}>

export type UserCreateUserCalendarMutation = { __typename?: 'Mutation' } & {
  created?: Maybe<{ __typename?: 'UserCalendar' } & UserCalendarDetailsFragment>
}

export type UserUpdateUserCalendarMutationVariables = Exact<{
  userCalendarId: Scalars['String']
  input: UserUpdateUserCalendarInput
}>

export type UserUpdateUserCalendarMutation = { __typename?: 'Mutation' } & {
  updated?: Maybe<{ __typename?: 'UserCalendar' } & UserCalendarDetailsFragment>
}

export type UserDeleteUserCalendarMutationVariables = Exact<{
  userCalendarId: Scalars['String']
}>

export type UserDeleteUserCalendarMutation = { __typename?: 'Mutation' } & {
  deleted?: Maybe<{ __typename?: 'UserCalendar' } & UserCalendarDetailsFragment>
}

export type UserDetailsFragment = { __typename?: 'User' } & Pick<
  User,
  'id' | 'firstName' | 'lastName' | 'name' | 'username' | 'avatarUrl' | 'email' | 'location' | 'phone' | 'bio' | 'role'
>

export type EmailDetailsFragment = { __typename?: 'Email' } & Pick<
  Email,
  'id' | 'createdAt' | 'updatedAt' | 'email' | 'public' | 'primary' | 'verified'
>

export type AdminUsersQueryVariables = Exact<{
  paging?: Maybe<CorePagingInput>
}>

export type AdminUsersQuery = { __typename?: 'Query' } & {
  users?: Maybe<Array<{ __typename?: 'User' } & UserDetailsFragment>>
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type AdminUserQueryVariables = Exact<{
  userId: Scalars['String']
}>

export type AdminUserQuery = { __typename?: 'Query' } & {
  adminUser?: Maybe<
    { __typename?: 'User' } & {
      emails?: Maybe<Array<{ __typename?: 'Email' } & EmailDetailsFragment>>
    } & UserDetailsFragment
  >
}

export type AdminCreateUserMutationVariables = Exact<{
  input: AdminCreateUserInput
}>

export type AdminCreateUserMutation = { __typename?: 'Mutation' } & {
  adminCreateUser?: Maybe<{ __typename?: 'User' } & UserDetailsFragment>
}

export type AdminUpdateUserMutationVariables = Exact<{
  userId: Scalars['String']
  input: AdminUpdateUserInput
}>

export type AdminUpdateUserMutation = { __typename?: 'Mutation' } & {
  adminUpdateUser?: Maybe<{ __typename?: 'User' } & UserDetailsFragment>
}

export type AdminSetUserPasswordMutationVariables = Exact<{
  userId: Scalars['String']
  password: Scalars['String']
}>

export type AdminSetUserPasswordMutation = { __typename?: 'Mutation' } & {
  adminSetUserPassword?: Maybe<{ __typename?: 'User' } & UserDetailsFragment>
}

export type AdminDeleteUserMutationVariables = Exact<{
  userId: Scalars['String']
}>

export type AdminDeleteUserMutation = { __typename?: 'Mutation' } & {
  adminDeleteUser?: Maybe<{ __typename?: 'User' } & UserDetailsFragment>
}

export const AuthTokenDetailsFragmentDoc = gql`
  fragment AuthTokenDetails on AuthToken {
    token
  }
`
export const CalendarEventExceptionDetailsFragmentDoc = gql`
  fragment CalendarEventExceptionDetails on CalendarEventException {
    id
    eventId
    exdate
  }
`
export const CalendarEventDetailsFragmentDoc = gql`
  fragment CalendarEventDetails on CalendarEvent {
    id
    calendarId
    recurringEventId
    isFirstInstance
    title
    description
    start
    end
    allDay
    recurrence
  }
`
export const CalendarWeekdayDetailsFragmentDoc = gql`
  fragment CalendarWeekdayDetails on CalendarWeekday {
    id
    abbr
    label
    value
  }
`
export const CalendarDetailsFragmentDoc = gql`
  fragment CalendarDetails on Calendar {
    id
    title
    color
    visible
  }
`
export const CorePagingDetailsFragmentDoc = gql`
  fragment CorePagingDetails on CorePaging {
    limit
    skip
    total
  }
`
export const IntercomDetailsFragmentDoc = gql`
  fragment IntercomDetails on IntercomMessage {
    type
    scope
    payload
  }
`
export const SettingDetailsFragmentDoc = gql`
  fragment SettingDetails on Setting {
    id
    dateFormat
    timeFormat
    startWeekOn
    createdAt
    updatedAt
    name
  }
`
export const UserCalendarDetailsFragmentDoc = gql`
  fragment UserCalendarDetails on UserCalendar {
    id
    createdAt
    updatedAt
    name
    userId
    calendarId
  }
`
export const UserDetailsFragmentDoc = gql`
  fragment UserDetails on User {
    id
    firstName
    lastName
    name
    username
    avatarUrl
    email
    location
    phone
    bio
    role
  }
`
export const EmailDetailsFragmentDoc = gql`
  fragment EmailDetails on Email {
    id
    createdAt
    updatedAt
    email
    public
    primary
    verified
  }
`
export const AccountEmailsDocument = gql`
  query AccountEmails {
    accountEmails {
      ...EmailDetails
    }
  }
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountEmailsGQL extends Apollo.Query<AccountEmailsQuery, AccountEmailsQueryVariables> {
  document = AccountEmailsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountProfileDocument = gql`
  query AccountProfile {
    accountProfile {
      ...UserDetails
      emails {
        ...EmailDetails
      }
    }
  }
  ${UserDetailsFragmentDoc}
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountProfileGQL extends Apollo.Query<AccountProfileQuery, AccountProfileQueryVariables> {
  document = AccountProfileDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountUsernameAvailableDocument = gql`
  query AccountUsernameAvailable($username: String!) {
    accountUsernameAvailable(username: $username)
  }
`

@Injectable({
  providedIn: 'root',
})
export class AccountUsernameAvailableGQL extends Apollo.Query<
  AccountUsernameAvailableQuery,
  AccountUsernameAvailableQueryVariables
> {
  document = AccountUsernameAvailableDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountCreateEmailDocument = gql`
  mutation AccountCreateEmail($input: AccountCreateEmailInput!) {
    accountCreateEmail(input: $input) {
      ...EmailDetails
    }
  }
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountCreateEmailGQL extends Apollo.Mutation<
  AccountCreateEmailMutation,
  AccountCreateEmailMutationVariables
> {
  document = AccountCreateEmailDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountDeleteEmailDocument = gql`
  mutation AccountDeleteEmail($emailId: String!) {
    accountDeleteEmail(emailId: $emailId) {
      ...EmailDetails
    }
  }
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountDeleteEmailGQL extends Apollo.Mutation<
  AccountDeleteEmailMutation,
  AccountDeleteEmailMutationVariables
> {
  document = AccountDeleteEmailDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountMarkEmailPrimaryDocument = gql`
  mutation AccountMarkEmailPrimary($emailId: String!) {
    accountMarkEmailPrimary(emailId: $emailId) {
      ...EmailDetails
    }
  }
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountMarkEmailPrimaryGQL extends Apollo.Mutation<
  AccountMarkEmailPrimaryMutation,
  AccountMarkEmailPrimaryMutationVariables
> {
  document = AccountMarkEmailPrimaryDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountMarkEmailPrivateDocument = gql`
  mutation AccountMarkEmailPrivate($emailId: String!) {
    accountMarkEmailPrivate(emailId: $emailId) {
      ...EmailDetails
    }
  }
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountMarkEmailPrivateGQL extends Apollo.Mutation<
  AccountMarkEmailPrivateMutation,
  AccountMarkEmailPrivateMutationVariables
> {
  document = AccountMarkEmailPrivateDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountMarkEmailPublicDocument = gql`
  mutation AccountMarkEmailPublic($emailId: String!) {
    accountMarkEmailPublic(emailId: $emailId) {
      ...EmailDetails
    }
  }
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountMarkEmailPublicGQL extends Apollo.Mutation<
  AccountMarkEmailPublicMutation,
  AccountMarkEmailPublicMutationVariables
> {
  document = AccountMarkEmailPublicDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountUpdateProfileDocument = gql`
  mutation AccountUpdateProfile($input: AccountUpdateProfileInput!) {
    accountUpdateProfile(input: $input) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountUpdateProfileGQL extends Apollo.Mutation<
  AccountUpdateProfileMutation,
  AccountUpdateProfileMutationVariables
> {
  document = AccountUpdateProfileDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountUpdateUsernameDocument = gql`
  mutation AccountUpdateUsername($username: String!) {
    accountUpdateUsername(username: $username) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountUpdateUsernameGQL extends Apollo.Mutation<
  AccountUpdateUsernameMutation,
  AccountUpdateUsernameMutationVariables
> {
  document = AccountUpdateUsernameDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountUpdatePasswordDocument = gql`
  mutation AccountUpdatePassword($input: AccountUpdatePasswordInput!) {
    accountUpdatePassword(input: $input)
  }
`

@Injectable({
  providedIn: 'root',
})
export class AccountUpdatePasswordGQL extends Apollo.Mutation<
  AccountUpdatePasswordMutation,
  AccountUpdatePasswordMutationVariables
> {
  document = AccountUpdatePasswordDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const MeDocument = gql`
  query me {
    me {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class MeGQL extends Apollo.Query<MeQuery, MeQueryVariables> {
  document = MeDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const LogoutDocument = gql`
  mutation Logout {
    logout
  }
`

@Injectable({
  providedIn: 'root',
})
export class LogoutGQL extends Apollo.Mutation<LogoutMutation, LogoutMutationVariables> {
  document = LogoutDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const LoginDocument = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      ...AuthTokenDetails
    }
  }
  ${AuthTokenDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
  document = LoginDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const RegisterDocument = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      ...AuthTokenDetails
    }
  }
  ${AuthTokenDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class RegisterGQL extends Apollo.Mutation<RegisterMutation, RegisterMutationVariables> {
  document = RegisterDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCalendarEventExceptionsDocument = gql`
  query AdminCalendarEventExceptions($input: AdminListCalendarEventExceptionInput) {
    items: adminCalendarEventExceptions(input: $input) {
      ...CalendarEventExceptionDetails
    }
    count: adminCountCalendarEventExceptions(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CalendarEventExceptionDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCalendarEventExceptionsGQL extends Apollo.Query<
  AdminCalendarEventExceptionsQuery,
  AdminCalendarEventExceptionsQueryVariables
> {
  document = AdminCalendarEventExceptionsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCountCalendarEventExceptionsDocument = gql`
  query AdminCountCalendarEventExceptions($input: AdminListCalendarEventExceptionInput) {
    count: adminCountCalendarEventExceptions(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCountCalendarEventExceptionsGQL extends Apollo.Query<
  AdminCountCalendarEventExceptionsQuery,
  AdminCountCalendarEventExceptionsQueryVariables
> {
  document = AdminCountCalendarEventExceptionsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCalendarEventExceptionDocument = gql`
  query AdminCalendarEventException($calendarEventExceptionId: String!) {
    item: adminCalendarEventException(calendarEventExceptionId: $calendarEventExceptionId) {
      ...CalendarEventExceptionDetails
    }
  }
  ${CalendarEventExceptionDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCalendarEventExceptionGQL extends Apollo.Query<
  AdminCalendarEventExceptionQuery,
  AdminCalendarEventExceptionQueryVariables
> {
  document = AdminCalendarEventExceptionDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCreateCalendarEventExceptionDocument = gql`
  mutation AdminCreateCalendarEventException($input: AdminCreateCalendarEventExceptionInput!) {
    created: adminCreateCalendarEventException(input: $input) {
      ...CalendarEventExceptionDetails
    }
  }
  ${CalendarEventExceptionDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCreateCalendarEventExceptionGQL extends Apollo.Mutation<
  AdminCreateCalendarEventExceptionMutation,
  AdminCreateCalendarEventExceptionMutationVariables
> {
  document = AdminCreateCalendarEventExceptionDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminUpdateCalendarEventExceptionDocument = gql`
  mutation AdminUpdateCalendarEventException(
    $calendarEventExceptionId: String!
    $input: AdminUpdateCalendarEventExceptionInput!
  ) {
    updated: adminUpdateCalendarEventException(calendarEventExceptionId: $calendarEventExceptionId, input: $input) {
      ...CalendarEventExceptionDetails
    }
  }
  ${CalendarEventExceptionDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminUpdateCalendarEventExceptionGQL extends Apollo.Mutation<
  AdminUpdateCalendarEventExceptionMutation,
  AdminUpdateCalendarEventExceptionMutationVariables
> {
  document = AdminUpdateCalendarEventExceptionDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminDeleteCalendarEventExceptionDocument = gql`
  mutation AdminDeleteCalendarEventException($calendarEventExceptionId: String!) {
    deleted: adminDeleteCalendarEventException(calendarEventExceptionId: $calendarEventExceptionId) {
      ...CalendarEventExceptionDetails
    }
  }
  ${CalendarEventExceptionDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminDeleteCalendarEventExceptionGQL extends Apollo.Mutation<
  AdminDeleteCalendarEventExceptionMutation,
  AdminDeleteCalendarEventExceptionMutationVariables
> {
  document = AdminDeleteCalendarEventExceptionDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserCalendarEventExceptionsDocument = gql`
  query UserCalendarEventExceptions($input: UserListCalendarEventExceptionInput) {
    items: userCalendarEventExceptions(input: $input) {
      ...CalendarEventExceptionDetails
    }
    count: userCountCalendarEventExceptions(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CalendarEventExceptionDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserCalendarEventExceptionsGQL extends Apollo.Query<
  UserCalendarEventExceptionsQuery,
  UserCalendarEventExceptionsQueryVariables
> {
  document = UserCalendarEventExceptionsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserCountCalendarEventExceptionsDocument = gql`
  query UserCountCalendarEventExceptions($input: UserListCalendarEventExceptionInput) {
    count: userCountCalendarEventExceptions(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserCountCalendarEventExceptionsGQL extends Apollo.Query<
  UserCountCalendarEventExceptionsQuery,
  UserCountCalendarEventExceptionsQueryVariables
> {
  document = UserCountCalendarEventExceptionsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserCalendarEventExceptionDocument = gql`
  query UserCalendarEventException($calendarEventExceptionId: String!) {
    item: userCalendarEventException(calendarEventExceptionId: $calendarEventExceptionId) {
      ...CalendarEventExceptionDetails
    }
  }
  ${CalendarEventExceptionDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserCalendarEventExceptionGQL extends Apollo.Query<
  UserCalendarEventExceptionQuery,
  UserCalendarEventExceptionQueryVariables
> {
  document = UserCalendarEventExceptionDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserCreateCalendarEventExceptionDocument = gql`
  mutation UserCreateCalendarEventException($input: UserCreateCalendarEventExceptionInput!) {
    created: userCreateCalendarEventException(input: $input) {
      ...CalendarEventExceptionDetails
    }
  }
  ${CalendarEventExceptionDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserCreateCalendarEventExceptionGQL extends Apollo.Mutation<
  UserCreateCalendarEventExceptionMutation,
  UserCreateCalendarEventExceptionMutationVariables
> {
  document = UserCreateCalendarEventExceptionDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserUpdateCalendarEventExceptionDocument = gql`
  mutation UserUpdateCalendarEventException(
    $calendarEventExceptionId: String!
    $input: UserUpdateCalendarEventExceptionInput!
  ) {
    updated: userUpdateCalendarEventException(calendarEventExceptionId: $calendarEventExceptionId, input: $input) {
      ...CalendarEventExceptionDetails
    }
  }
  ${CalendarEventExceptionDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserUpdateCalendarEventExceptionGQL extends Apollo.Mutation<
  UserUpdateCalendarEventExceptionMutation,
  UserUpdateCalendarEventExceptionMutationVariables
> {
  document = UserUpdateCalendarEventExceptionDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserDeleteCalendarEventExceptionDocument = gql`
  mutation UserDeleteCalendarEventException($calendarEventExceptionId: String!) {
    deleted: userDeleteCalendarEventException(calendarEventExceptionId: $calendarEventExceptionId) {
      ...CalendarEventExceptionDetails
    }
  }
  ${CalendarEventExceptionDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserDeleteCalendarEventExceptionGQL extends Apollo.Mutation<
  UserDeleteCalendarEventExceptionMutation,
  UserDeleteCalendarEventExceptionMutationVariables
> {
  document = UserDeleteCalendarEventExceptionDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCalendarEventsDocument = gql`
  query AdminCalendarEvents($input: AdminListCalendarEventInput) {
    items: adminCalendarEvents(input: $input) {
      ...CalendarEventDetails
    }
    count: adminCountCalendarEvents(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CalendarEventDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCalendarEventsGQL extends Apollo.Query<AdminCalendarEventsQuery, AdminCalendarEventsQueryVariables> {
  document = AdminCalendarEventsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCountCalendarEventsDocument = gql`
  query AdminCountCalendarEvents($input: AdminListCalendarEventInput) {
    count: adminCountCalendarEvents(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCountCalendarEventsGQL extends Apollo.Query<
  AdminCountCalendarEventsQuery,
  AdminCountCalendarEventsQueryVariables
> {
  document = AdminCountCalendarEventsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCalendarEventDocument = gql`
  query AdminCalendarEvent($calendarEventId: String!) {
    item: adminCalendarEvent(calendarEventId: $calendarEventId) {
      ...CalendarEventDetails
    }
  }
  ${CalendarEventDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCalendarEventGQL extends Apollo.Query<AdminCalendarEventQuery, AdminCalendarEventQueryVariables> {
  document = AdminCalendarEventDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCreateCalendarEventDocument = gql`
  mutation AdminCreateCalendarEvent($input: AdminCreateCalendarEventInput!) {
    created: adminCreateCalendarEvent(input: $input) {
      ...CalendarEventDetails
    }
  }
  ${CalendarEventDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCreateCalendarEventGQL extends Apollo.Mutation<
  AdminCreateCalendarEventMutation,
  AdminCreateCalendarEventMutationVariables
> {
  document = AdminCreateCalendarEventDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminUpdateCalendarEventDocument = gql`
  mutation AdminUpdateCalendarEvent($calendarEventId: String!, $input: AdminUpdateCalendarEventInput!) {
    updated: adminUpdateCalendarEvent(calendarEventId: $calendarEventId, input: $input) {
      ...CalendarEventDetails
    }
  }
  ${CalendarEventDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminUpdateCalendarEventGQL extends Apollo.Mutation<
  AdminUpdateCalendarEventMutation,
  AdminUpdateCalendarEventMutationVariables
> {
  document = AdminUpdateCalendarEventDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminDeleteCalendarEventDocument = gql`
  mutation AdminDeleteCalendarEvent($calendarEventId: String!) {
    deleted: adminDeleteCalendarEvent(calendarEventId: $calendarEventId) {
      ...CalendarEventDetails
    }
  }
  ${CalendarEventDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminDeleteCalendarEventGQL extends Apollo.Mutation<
  AdminDeleteCalendarEventMutation,
  AdminDeleteCalendarEventMutationVariables
> {
  document = AdminDeleteCalendarEventDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserCalendarEventsDocument = gql`
  query UserCalendarEvents($input: UserListCalendarEventInput) {
    items: userCalendarEvents(input: $input) {
      ...CalendarEventDetails
    }
    count: userCountCalendarEvents(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CalendarEventDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserCalendarEventsGQL extends Apollo.Query<UserCalendarEventsQuery, UserCalendarEventsQueryVariables> {
  document = UserCalendarEventsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserCountCalendarEventsDocument = gql`
  query UserCountCalendarEvents($input: UserListCalendarEventInput) {
    count: userCountCalendarEvents(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserCountCalendarEventsGQL extends Apollo.Query<
  UserCountCalendarEventsQuery,
  UserCountCalendarEventsQueryVariables
> {
  document = UserCountCalendarEventsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserCalendarEventDocument = gql`
  query UserCalendarEvent($calendarEventId: String!) {
    item: userCalendarEvent(calendarEventId: $calendarEventId) {
      ...CalendarEventDetails
    }
  }
  ${CalendarEventDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserCalendarEventGQL extends Apollo.Query<UserCalendarEventQuery, UserCalendarEventQueryVariables> {
  document = UserCalendarEventDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserCreateCalendarEventDocument = gql`
  mutation UserCreateCalendarEvent($input: UserCreateCalendarEventInput!) {
    created: userCreateCalendarEvent(input: $input) {
      ...CalendarEventDetails
    }
  }
  ${CalendarEventDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserCreateCalendarEventGQL extends Apollo.Mutation<
  UserCreateCalendarEventMutation,
  UserCreateCalendarEventMutationVariables
> {
  document = UserCreateCalendarEventDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserUpdateCalendarEventDocument = gql`
  mutation UserUpdateCalendarEvent($calendarEventId: String!, $input: UserUpdateCalendarEventInput!) {
    updated: userUpdateCalendarEvent(calendarEventId: $calendarEventId, input: $input) {
      ...CalendarEventDetails
    }
  }
  ${CalendarEventDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserUpdateCalendarEventGQL extends Apollo.Mutation<
  UserUpdateCalendarEventMutation,
  UserUpdateCalendarEventMutationVariables
> {
  document = UserUpdateCalendarEventDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserDeleteCalendarEventDocument = gql`
  mutation UserDeleteCalendarEvent($calendarEventId: String!) {
    deleted: userDeleteCalendarEvent(calendarEventId: $calendarEventId) {
      ...CalendarEventDetails
    }
  }
  ${CalendarEventDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserDeleteCalendarEventGQL extends Apollo.Mutation<
  UserDeleteCalendarEventMutation,
  UserDeleteCalendarEventMutationVariables
> {
  document = UserDeleteCalendarEventDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCalendarWeekdaysDocument = gql`
  query AdminCalendarWeekdays($input: AdminListCalendarWeekdayInput) {
    items: adminCalendarWeekdays(input: $input) {
      ...CalendarWeekdayDetails
    }
    count: adminCountCalendarWeekdays(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CalendarWeekdayDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCalendarWeekdaysGQL extends Apollo.Query<
  AdminCalendarWeekdaysQuery,
  AdminCalendarWeekdaysQueryVariables
> {
  document = AdminCalendarWeekdaysDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCountCalendarWeekdaysDocument = gql`
  query AdminCountCalendarWeekdays($input: AdminListCalendarWeekdayInput) {
    count: adminCountCalendarWeekdays(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCountCalendarWeekdaysGQL extends Apollo.Query<
  AdminCountCalendarWeekdaysQuery,
  AdminCountCalendarWeekdaysQueryVariables
> {
  document = AdminCountCalendarWeekdaysDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCalendarWeekdayDocument = gql`
  query AdminCalendarWeekday($calendarWeekdayId: String!) {
    item: adminCalendarWeekday(calendarWeekdayId: $calendarWeekdayId) {
      ...CalendarWeekdayDetails
    }
  }
  ${CalendarWeekdayDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCalendarWeekdayGQL extends Apollo.Query<
  AdminCalendarWeekdayQuery,
  AdminCalendarWeekdayQueryVariables
> {
  document = AdminCalendarWeekdayDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCreateCalendarWeekdayDocument = gql`
  mutation AdminCreateCalendarWeekday($input: AdminCreateCalendarWeekdayInput!) {
    created: adminCreateCalendarWeekday(input: $input) {
      ...CalendarWeekdayDetails
    }
  }
  ${CalendarWeekdayDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCreateCalendarWeekdayGQL extends Apollo.Mutation<
  AdminCreateCalendarWeekdayMutation,
  AdminCreateCalendarWeekdayMutationVariables
> {
  document = AdminCreateCalendarWeekdayDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminUpdateCalendarWeekdayDocument = gql`
  mutation AdminUpdateCalendarWeekday($calendarWeekdayId: String!, $input: AdminUpdateCalendarWeekdayInput!) {
    updated: adminUpdateCalendarWeekday(calendarWeekdayId: $calendarWeekdayId, input: $input) {
      ...CalendarWeekdayDetails
    }
  }
  ${CalendarWeekdayDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminUpdateCalendarWeekdayGQL extends Apollo.Mutation<
  AdminUpdateCalendarWeekdayMutation,
  AdminUpdateCalendarWeekdayMutationVariables
> {
  document = AdminUpdateCalendarWeekdayDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminDeleteCalendarWeekdayDocument = gql`
  mutation AdminDeleteCalendarWeekday($calendarWeekdayId: String!) {
    deleted: adminDeleteCalendarWeekday(calendarWeekdayId: $calendarWeekdayId) {
      ...CalendarWeekdayDetails
    }
  }
  ${CalendarWeekdayDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminDeleteCalendarWeekdayGQL extends Apollo.Mutation<
  AdminDeleteCalendarWeekdayMutation,
  AdminDeleteCalendarWeekdayMutationVariables
> {
  document = AdminDeleteCalendarWeekdayDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserCalendarWeekdaysDocument = gql`
  query UserCalendarWeekdays($input: UserListCalendarWeekdayInput) {
    items: userCalendarWeekdays(input: $input) {
      ...CalendarWeekdayDetails
    }
    count: userCountCalendarWeekdays(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CalendarWeekdayDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserCalendarWeekdaysGQL extends Apollo.Query<
  UserCalendarWeekdaysQuery,
  UserCalendarWeekdaysQueryVariables
> {
  document = UserCalendarWeekdaysDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserCountCalendarWeekdaysDocument = gql`
  query UserCountCalendarWeekdays($input: UserListCalendarWeekdayInput) {
    count: userCountCalendarWeekdays(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserCountCalendarWeekdaysGQL extends Apollo.Query<
  UserCountCalendarWeekdaysQuery,
  UserCountCalendarWeekdaysQueryVariables
> {
  document = UserCountCalendarWeekdaysDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserCalendarWeekdayDocument = gql`
  query UserCalendarWeekday($calendarWeekdayId: String!) {
    item: userCalendarWeekday(calendarWeekdayId: $calendarWeekdayId) {
      ...CalendarWeekdayDetails
    }
  }
  ${CalendarWeekdayDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserCalendarWeekdayGQL extends Apollo.Query<UserCalendarWeekdayQuery, UserCalendarWeekdayQueryVariables> {
  document = UserCalendarWeekdayDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserCreateCalendarWeekdayDocument = gql`
  mutation UserCreateCalendarWeekday($input: UserCreateCalendarWeekdayInput!) {
    created: userCreateCalendarWeekday(input: $input) {
      ...CalendarWeekdayDetails
    }
  }
  ${CalendarWeekdayDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserCreateCalendarWeekdayGQL extends Apollo.Mutation<
  UserCreateCalendarWeekdayMutation,
  UserCreateCalendarWeekdayMutationVariables
> {
  document = UserCreateCalendarWeekdayDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserUpdateCalendarWeekdayDocument = gql`
  mutation UserUpdateCalendarWeekday($calendarWeekdayId: String!, $input: UserUpdateCalendarWeekdayInput!) {
    updated: userUpdateCalendarWeekday(calendarWeekdayId: $calendarWeekdayId, input: $input) {
      ...CalendarWeekdayDetails
    }
  }
  ${CalendarWeekdayDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserUpdateCalendarWeekdayGQL extends Apollo.Mutation<
  UserUpdateCalendarWeekdayMutation,
  UserUpdateCalendarWeekdayMutationVariables
> {
  document = UserUpdateCalendarWeekdayDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserDeleteCalendarWeekdayDocument = gql`
  mutation UserDeleteCalendarWeekday($calendarWeekdayId: String!) {
    deleted: userDeleteCalendarWeekday(calendarWeekdayId: $calendarWeekdayId) {
      ...CalendarWeekdayDetails
    }
  }
  ${CalendarWeekdayDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserDeleteCalendarWeekdayGQL extends Apollo.Mutation<
  UserDeleteCalendarWeekdayMutation,
  UserDeleteCalendarWeekdayMutationVariables
> {
  document = UserDeleteCalendarWeekdayDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCalendarsDocument = gql`
  query AdminCalendars($input: AdminListCalendarInput) {
    items: adminCalendars(input: $input) {
      ...CalendarDetails
    }
    count: adminCountCalendars(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CalendarDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCalendarsGQL extends Apollo.Query<AdminCalendarsQuery, AdminCalendarsQueryVariables> {
  document = AdminCalendarsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCountCalendarsDocument = gql`
  query AdminCountCalendars($input: AdminListCalendarInput) {
    count: adminCountCalendars(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCountCalendarsGQL extends Apollo.Query<AdminCountCalendarsQuery, AdminCountCalendarsQueryVariables> {
  document = AdminCountCalendarsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCalendarDocument = gql`
  query AdminCalendar($calendarId: String!) {
    item: adminCalendar(calendarId: $calendarId) {
      ...CalendarDetails
    }
  }
  ${CalendarDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCalendarGQL extends Apollo.Query<AdminCalendarQuery, AdminCalendarQueryVariables> {
  document = AdminCalendarDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCreateCalendarDocument = gql`
  mutation AdminCreateCalendar($input: AdminCreateCalendarInput!) {
    created: adminCreateCalendar(input: $input) {
      ...CalendarDetails
    }
  }
  ${CalendarDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCreateCalendarGQL extends Apollo.Mutation<
  AdminCreateCalendarMutation,
  AdminCreateCalendarMutationVariables
> {
  document = AdminCreateCalendarDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminUpdateCalendarDocument = gql`
  mutation AdminUpdateCalendar($calendarId: String!, $input: AdminUpdateCalendarInput!) {
    updated: adminUpdateCalendar(calendarId: $calendarId, input: $input) {
      ...CalendarDetails
    }
  }
  ${CalendarDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminUpdateCalendarGQL extends Apollo.Mutation<
  AdminUpdateCalendarMutation,
  AdminUpdateCalendarMutationVariables
> {
  document = AdminUpdateCalendarDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminDeleteCalendarDocument = gql`
  mutation AdminDeleteCalendar($calendarId: String!) {
    deleted: adminDeleteCalendar(calendarId: $calendarId) {
      ...CalendarDetails
    }
  }
  ${CalendarDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminDeleteCalendarGQL extends Apollo.Mutation<
  AdminDeleteCalendarMutation,
  AdminDeleteCalendarMutationVariables
> {
  document = AdminDeleteCalendarDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserCalendarsDocument = gql`
  query UserCalendars($input: UserListCalendarInput) {
    items: userCalendars(input: $input) {
      ...CalendarDetails
    }
    count: userCountCalendars(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CalendarDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserCalendarsGQL extends Apollo.Query<UserCalendarsQuery, UserCalendarsQueryVariables> {
  document = UserCalendarsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserCountCalendarsDocument = gql`
  query UserCountCalendars($input: UserListCalendarInput) {
    count: userCountCalendars(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserCountCalendarsGQL extends Apollo.Query<UserCountCalendarsQuery, UserCountCalendarsQueryVariables> {
  document = UserCountCalendarsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserCalendarDocument = gql`
  query UserCalendar($calendarId: String!) {
    item: userCalendar(calendarId: $calendarId) {
      ...CalendarDetails
    }
  }
  ${CalendarDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserCalendarGQL extends Apollo.Query<UserCalendarQuery, UserCalendarQueryVariables> {
  document = UserCalendarDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserCreateCalendarDocument = gql`
  mutation UserCreateCalendar($input: UserCreateCalendarInput!) {
    created: userCreateCalendar(input: $input) {
      ...CalendarDetails
    }
  }
  ${CalendarDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserCreateCalendarGQL extends Apollo.Mutation<
  UserCreateCalendarMutation,
  UserCreateCalendarMutationVariables
> {
  document = UserCreateCalendarDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserUpdateCalendarDocument = gql`
  mutation UserUpdateCalendar($calendarId: String!, $input: UserUpdateCalendarInput!) {
    updated: userUpdateCalendar(calendarId: $calendarId, input: $input) {
      ...CalendarDetails
    }
  }
  ${CalendarDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserUpdateCalendarGQL extends Apollo.Mutation<
  UserUpdateCalendarMutation,
  UserUpdateCalendarMutationVariables
> {
  document = UserUpdateCalendarDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserDeleteCalendarDocument = gql`
  mutation UserDeleteCalendar($calendarId: String!) {
    deleted: userDeleteCalendar(calendarId: $calendarId) {
      ...CalendarDetails
    }
  }
  ${CalendarDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserDeleteCalendarGQL extends Apollo.Mutation<
  UserDeleteCalendarMutation,
  UserDeleteCalendarMutationVariables
> {
  document = UserDeleteCalendarDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UptimeDocument = gql`
  query Uptime {
    uptime
  }
`

@Injectable({
  providedIn: 'root',
})
export class UptimeGQL extends Apollo.Query<UptimeQuery, UptimeQueryVariables> {
  document = UptimeDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const IntercomPubDocument = gql`
  mutation IntercomPub($type: String!, $scope: String, $payload: JSON) {
    intercomPub(type: $type, scope: $scope, payload: $payload) {
      ...IntercomDetails
    }
  }
  ${IntercomDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class IntercomPubGQL extends Apollo.Mutation<IntercomPubMutation, IntercomPubMutationVariables> {
  document = IntercomPubDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const IntercomSubDocument = gql`
  subscription IntercomSub {
    intercomSub {
      ...IntercomDetails
    }
  }
  ${IntercomDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class IntercomSubGQL extends Apollo.Subscription<IntercomSubSubscription, IntercomSubSubscriptionVariables> {
  document = IntercomSubDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminSettingsDocument = gql`
  query AdminSettings($input: AdminListSettingInput) {
    items: adminSettings(input: $input) {
      ...SettingDetails
    }
    count: adminCountSettings(input: $input) {
      ...CorePagingDetails
    }
  }
  ${SettingDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminSettingsGQL extends Apollo.Query<AdminSettingsQuery, AdminSettingsQueryVariables> {
  document = AdminSettingsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCountSettingsDocument = gql`
  query AdminCountSettings($input: AdminListSettingInput) {
    count: adminCountSettings(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCountSettingsGQL extends Apollo.Query<AdminCountSettingsQuery, AdminCountSettingsQueryVariables> {
  document = AdminCountSettingsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminSettingDocument = gql`
  query AdminSetting($settingId: String!) {
    item: adminSetting(settingId: $settingId) {
      ...SettingDetails
    }
  }
  ${SettingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminSettingGQL extends Apollo.Query<AdminSettingQuery, AdminSettingQueryVariables> {
  document = AdminSettingDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCreateSettingDocument = gql`
  mutation AdminCreateSetting($input: AdminCreateSettingInput!) {
    created: adminCreateSetting(input: $input) {
      ...SettingDetails
    }
  }
  ${SettingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCreateSettingGQL extends Apollo.Mutation<
  AdminCreateSettingMutation,
  AdminCreateSettingMutationVariables
> {
  document = AdminCreateSettingDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminUpdateSettingDocument = gql`
  mutation AdminUpdateSetting($settingId: String!, $input: AdminUpdateSettingInput!) {
    updated: adminUpdateSetting(settingId: $settingId, input: $input) {
      ...SettingDetails
    }
  }
  ${SettingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminUpdateSettingGQL extends Apollo.Mutation<
  AdminUpdateSettingMutation,
  AdminUpdateSettingMutationVariables
> {
  document = AdminUpdateSettingDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminDeleteSettingDocument = gql`
  mutation AdminDeleteSetting($settingId: String!) {
    deleted: adminDeleteSetting(settingId: $settingId) {
      ...SettingDetails
    }
  }
  ${SettingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminDeleteSettingGQL extends Apollo.Mutation<
  AdminDeleteSettingMutation,
  AdminDeleteSettingMutationVariables
> {
  document = AdminDeleteSettingDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserSettingsDocument = gql`
  query UserSettings($input: UserListSettingInput) {
    items: userSettings(input: $input) {
      ...SettingDetails
    }
    count: userCountSettings(input: $input) {
      ...CorePagingDetails
    }
  }
  ${SettingDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserSettingsGQL extends Apollo.Query<UserSettingsQuery, UserSettingsQueryVariables> {
  document = UserSettingsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserCountSettingsDocument = gql`
  query UserCountSettings($input: UserListSettingInput) {
    count: userCountSettings(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserCountSettingsGQL extends Apollo.Query<UserCountSettingsQuery, UserCountSettingsQueryVariables> {
  document = UserCountSettingsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserSettingDocument = gql`
  query UserSetting($settingId: String!) {
    item: userSetting(settingId: $settingId) {
      ...SettingDetails
    }
  }
  ${SettingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserSettingGQL extends Apollo.Query<UserSettingQuery, UserSettingQueryVariables> {
  document = UserSettingDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserCreateSettingDocument = gql`
  mutation UserCreateSetting($input: UserCreateSettingInput!) {
    created: userCreateSetting(input: $input) {
      ...SettingDetails
    }
  }
  ${SettingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserCreateSettingGQL extends Apollo.Mutation<
  UserCreateSettingMutation,
  UserCreateSettingMutationVariables
> {
  document = UserCreateSettingDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserUpdateSettingDocument = gql`
  mutation UserUpdateSetting($settingId: String!, $input: UserUpdateSettingInput!) {
    updated: userUpdateSetting(settingId: $settingId, input: $input) {
      ...SettingDetails
    }
  }
  ${SettingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserUpdateSettingGQL extends Apollo.Mutation<
  UserUpdateSettingMutation,
  UserUpdateSettingMutationVariables
> {
  document = UserUpdateSettingDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserDeleteSettingDocument = gql`
  mutation UserDeleteSetting($settingId: String!) {
    deleted: userDeleteSetting(settingId: $settingId) {
      ...SettingDetails
    }
  }
  ${SettingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserDeleteSettingGQL extends Apollo.Mutation<
  UserDeleteSettingMutation,
  UserDeleteSettingMutationVariables
> {
  document = UserDeleteSettingDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminUserCalendarsDocument = gql`
  query AdminUserCalendars($input: AdminListUserCalendarInput) {
    items: adminUserCalendars(input: $input) {
      ...UserCalendarDetails
    }
    count: adminCountUserCalendars(input: $input) {
      ...CorePagingDetails
    }
  }
  ${UserCalendarDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminUserCalendarsGQL extends Apollo.Query<AdminUserCalendarsQuery, AdminUserCalendarsQueryVariables> {
  document = AdminUserCalendarsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCountUserCalendarsDocument = gql`
  query AdminCountUserCalendars($input: AdminListUserCalendarInput) {
    count: adminCountUserCalendars(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCountUserCalendarsGQL extends Apollo.Query<
  AdminCountUserCalendarsQuery,
  AdminCountUserCalendarsQueryVariables
> {
  document = AdminCountUserCalendarsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminUserCalendarDocument = gql`
  query AdminUserCalendar($userCalendarId: String!) {
    item: adminUserCalendar(userCalendarId: $userCalendarId) {
      ...UserCalendarDetails
    }
  }
  ${UserCalendarDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminUserCalendarGQL extends Apollo.Query<AdminUserCalendarQuery, AdminUserCalendarQueryVariables> {
  document = AdminUserCalendarDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCreateUserCalendarDocument = gql`
  mutation AdminCreateUserCalendar($input: AdminCreateUserCalendarInput!) {
    created: adminCreateUserCalendar(input: $input) {
      ...UserCalendarDetails
    }
  }
  ${UserCalendarDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCreateUserCalendarGQL extends Apollo.Mutation<
  AdminCreateUserCalendarMutation,
  AdminCreateUserCalendarMutationVariables
> {
  document = AdminCreateUserCalendarDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminUpdateUserCalendarDocument = gql`
  mutation AdminUpdateUserCalendar($userCalendarId: String!, $input: AdminUpdateUserCalendarInput!) {
    updated: adminUpdateUserCalendar(userCalendarId: $userCalendarId, input: $input) {
      ...UserCalendarDetails
    }
  }
  ${UserCalendarDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminUpdateUserCalendarGQL extends Apollo.Mutation<
  AdminUpdateUserCalendarMutation,
  AdminUpdateUserCalendarMutationVariables
> {
  document = AdminUpdateUserCalendarDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminDeleteUserCalendarDocument = gql`
  mutation AdminDeleteUserCalendar($userCalendarId: String!) {
    deleted: adminDeleteUserCalendar(userCalendarId: $userCalendarId) {
      ...UserCalendarDetails
    }
  }
  ${UserCalendarDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminDeleteUserCalendarGQL extends Apollo.Mutation<
  AdminDeleteUserCalendarMutation,
  AdminDeleteUserCalendarMutationVariables
> {
  document = AdminDeleteUserCalendarDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserUserCalendarsDocument = gql`
  query UserUserCalendars($input: UserListUserCalendarInput) {
    items: userUserCalendars(input: $input) {
      ...UserCalendarDetails
    }
    count: userCountUserCalendars(input: $input) {
      ...CorePagingDetails
    }
  }
  ${UserCalendarDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserUserCalendarsGQL extends Apollo.Query<UserUserCalendarsQuery, UserUserCalendarsQueryVariables> {
  document = UserUserCalendarsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserCountUserCalendarsDocument = gql`
  query UserCountUserCalendars($input: UserListUserCalendarInput) {
    count: userCountUserCalendars(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserCountUserCalendarsGQL extends Apollo.Query<
  UserCountUserCalendarsQuery,
  UserCountUserCalendarsQueryVariables
> {
  document = UserCountUserCalendarsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserUserCalendarDocument = gql`
  query UserUserCalendar($userCalendarId: String!) {
    item: userUserCalendar(userCalendarId: $userCalendarId) {
      ...UserCalendarDetails
    }
  }
  ${UserCalendarDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserUserCalendarGQL extends Apollo.Query<UserUserCalendarQuery, UserUserCalendarQueryVariables> {
  document = UserUserCalendarDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserCreateUserCalendarDocument = gql`
  mutation UserCreateUserCalendar($input: UserCreateUserCalendarInput!) {
    created: userCreateUserCalendar(input: $input) {
      ...UserCalendarDetails
    }
  }
  ${UserCalendarDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserCreateUserCalendarGQL extends Apollo.Mutation<
  UserCreateUserCalendarMutation,
  UserCreateUserCalendarMutationVariables
> {
  document = UserCreateUserCalendarDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserUpdateUserCalendarDocument = gql`
  mutation UserUpdateUserCalendar($userCalendarId: String!, $input: UserUpdateUserCalendarInput!) {
    updated: userUpdateUserCalendar(userCalendarId: $userCalendarId, input: $input) {
      ...UserCalendarDetails
    }
  }
  ${UserCalendarDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserUpdateUserCalendarGQL extends Apollo.Mutation<
  UserUpdateUserCalendarMutation,
  UserUpdateUserCalendarMutationVariables
> {
  document = UserUpdateUserCalendarDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserDeleteUserCalendarDocument = gql`
  mutation UserDeleteUserCalendar($userCalendarId: String!) {
    deleted: userDeleteUserCalendar(userCalendarId: $userCalendarId) {
      ...UserCalendarDetails
    }
  }
  ${UserCalendarDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserDeleteUserCalendarGQL extends Apollo.Mutation<
  UserDeleteUserCalendarMutation,
  UserDeleteUserCalendarMutationVariables
> {
  document = UserDeleteUserCalendarDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminUsersDocument = gql`
  query AdminUsers($paging: CorePagingInput) {
    users: adminUsers(paging: $paging) {
      ...UserDetails
    }
    count: adminCountUsers(paging: $paging) {
      ...CorePagingDetails
    }
  }
  ${UserDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminUsersGQL extends Apollo.Query<AdminUsersQuery, AdminUsersQueryVariables> {
  document = AdminUsersDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminUserDocument = gql`
  query AdminUser($userId: String!) {
    adminUser(userId: $userId) {
      ...UserDetails
      emails {
        ...EmailDetails
      }
    }
  }
  ${UserDetailsFragmentDoc}
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminUserGQL extends Apollo.Query<AdminUserQuery, AdminUserQueryVariables> {
  document = AdminUserDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCreateUserDocument = gql`
  mutation AdminCreateUser($input: AdminCreateUserInput!) {
    adminCreateUser(input: $input) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCreateUserGQL extends Apollo.Mutation<AdminCreateUserMutation, AdminCreateUserMutationVariables> {
  document = AdminCreateUserDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminUpdateUserDocument = gql`
  mutation AdminUpdateUser($userId: String!, $input: AdminUpdateUserInput!) {
    adminUpdateUser(userId: $userId, input: $input) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminUpdateUserGQL extends Apollo.Mutation<AdminUpdateUserMutation, AdminUpdateUserMutationVariables> {
  document = AdminUpdateUserDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminSetUserPasswordDocument = gql`
  mutation AdminSetUserPassword($userId: String!, $password: String!) {
    adminSetUserPassword(userId: $userId, password: $password) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminSetUserPasswordGQL extends Apollo.Mutation<
  AdminSetUserPasswordMutation,
  AdminSetUserPasswordMutationVariables
> {
  document = AdminSetUserPasswordDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminDeleteUserDocument = gql`
  mutation AdminDeleteUser($userId: String!) {
    adminDeleteUser(userId: $userId) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminDeleteUserGQL extends Apollo.Mutation<AdminDeleteUserMutation, AdminDeleteUserMutationVariables> {
  document = AdminDeleteUserDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

interface WatchQueryOptionsAlone<V> extends Omit<ApolloCore.WatchQueryOptions<V>, 'query' | 'variables'> {}

interface QueryOptionsAlone<V> extends Omit<ApolloCore.QueryOptions<V>, 'query' | 'variables'> {}

interface MutationOptionsAlone<T, V> extends Omit<ApolloCore.MutationOptions<T, V>, 'mutation' | 'variables'> {}

interface SubscriptionOptionsAlone<V> extends Omit<ApolloCore.SubscriptionOptions<V>, 'query' | 'variables'> {}

@Injectable({ providedIn: 'root' })
export class ApolloAngularSDK {
  constructor(
    private accountEmailsGql: AccountEmailsGQL,
    private accountProfileGql: AccountProfileGQL,
    private accountUsernameAvailableGql: AccountUsernameAvailableGQL,
    private accountCreateEmailGql: AccountCreateEmailGQL,
    private accountDeleteEmailGql: AccountDeleteEmailGQL,
    private accountMarkEmailPrimaryGql: AccountMarkEmailPrimaryGQL,
    private accountMarkEmailPrivateGql: AccountMarkEmailPrivateGQL,
    private accountMarkEmailPublicGql: AccountMarkEmailPublicGQL,
    private accountUpdateProfileGql: AccountUpdateProfileGQL,
    private accountUpdateUsernameGql: AccountUpdateUsernameGQL,
    private accountUpdatePasswordGql: AccountUpdatePasswordGQL,
    private meGql: MeGQL,
    private logoutGql: LogoutGQL,
    private loginGql: LoginGQL,
    private registerGql: RegisterGQL,
    private adminCalendarEventExceptionsGql: AdminCalendarEventExceptionsGQL,
    private adminCountCalendarEventExceptionsGql: AdminCountCalendarEventExceptionsGQL,
    private adminCalendarEventExceptionGql: AdminCalendarEventExceptionGQL,
    private adminCreateCalendarEventExceptionGql: AdminCreateCalendarEventExceptionGQL,
    private adminUpdateCalendarEventExceptionGql: AdminUpdateCalendarEventExceptionGQL,
    private adminDeleteCalendarEventExceptionGql: AdminDeleteCalendarEventExceptionGQL,
    private userCalendarEventExceptionsGql: UserCalendarEventExceptionsGQL,
    private userCountCalendarEventExceptionsGql: UserCountCalendarEventExceptionsGQL,
    private userCalendarEventExceptionGql: UserCalendarEventExceptionGQL,
    private userCreateCalendarEventExceptionGql: UserCreateCalendarEventExceptionGQL,
    private userUpdateCalendarEventExceptionGql: UserUpdateCalendarEventExceptionGQL,
    private userDeleteCalendarEventExceptionGql: UserDeleteCalendarEventExceptionGQL,
    private adminCalendarEventsGql: AdminCalendarEventsGQL,
    private adminCountCalendarEventsGql: AdminCountCalendarEventsGQL,
    private adminCalendarEventGql: AdminCalendarEventGQL,
    private adminCreateCalendarEventGql: AdminCreateCalendarEventGQL,
    private adminUpdateCalendarEventGql: AdminUpdateCalendarEventGQL,
    private adminDeleteCalendarEventGql: AdminDeleteCalendarEventGQL,
    private userCalendarEventsGql: UserCalendarEventsGQL,
    private userCountCalendarEventsGql: UserCountCalendarEventsGQL,
    private userCalendarEventGql: UserCalendarEventGQL,
    private userCreateCalendarEventGql: UserCreateCalendarEventGQL,
    private userUpdateCalendarEventGql: UserUpdateCalendarEventGQL,
    private userDeleteCalendarEventGql: UserDeleteCalendarEventGQL,
    private adminCalendarWeekdaysGql: AdminCalendarWeekdaysGQL,
    private adminCountCalendarWeekdaysGql: AdminCountCalendarWeekdaysGQL,
    private adminCalendarWeekdayGql: AdminCalendarWeekdayGQL,
    private adminCreateCalendarWeekdayGql: AdminCreateCalendarWeekdayGQL,
    private adminUpdateCalendarWeekdayGql: AdminUpdateCalendarWeekdayGQL,
    private adminDeleteCalendarWeekdayGql: AdminDeleteCalendarWeekdayGQL,
    private userCalendarWeekdaysGql: UserCalendarWeekdaysGQL,
    private userCountCalendarWeekdaysGql: UserCountCalendarWeekdaysGQL,
    private userCalendarWeekdayGql: UserCalendarWeekdayGQL,
    private userCreateCalendarWeekdayGql: UserCreateCalendarWeekdayGQL,
    private userUpdateCalendarWeekdayGql: UserUpdateCalendarWeekdayGQL,
    private userDeleteCalendarWeekdayGql: UserDeleteCalendarWeekdayGQL,
    private adminCalendarsGql: AdminCalendarsGQL,
    private adminCountCalendarsGql: AdminCountCalendarsGQL,
    private adminCalendarGql: AdminCalendarGQL,
    private adminCreateCalendarGql: AdminCreateCalendarGQL,
    private adminUpdateCalendarGql: AdminUpdateCalendarGQL,
    private adminDeleteCalendarGql: AdminDeleteCalendarGQL,
    private userCalendarsGql: UserCalendarsGQL,
    private userCountCalendarsGql: UserCountCalendarsGQL,
    private userCalendarGql: UserCalendarGQL,
    private userCreateCalendarGql: UserCreateCalendarGQL,
    private userUpdateCalendarGql: UserUpdateCalendarGQL,
    private userDeleteCalendarGql: UserDeleteCalendarGQL,
    private uptimeGql: UptimeGQL,
    private intercomPubGql: IntercomPubGQL,
    private intercomSubGql: IntercomSubGQL,
    private adminSettingsGql: AdminSettingsGQL,
    private adminCountSettingsGql: AdminCountSettingsGQL,
    private adminSettingGql: AdminSettingGQL,
    private adminCreateSettingGql: AdminCreateSettingGQL,
    private adminUpdateSettingGql: AdminUpdateSettingGQL,
    private adminDeleteSettingGql: AdminDeleteSettingGQL,
    private userSettingsGql: UserSettingsGQL,
    private userCountSettingsGql: UserCountSettingsGQL,
    private userSettingGql: UserSettingGQL,
    private userCreateSettingGql: UserCreateSettingGQL,
    private userUpdateSettingGql: UserUpdateSettingGQL,
    private userDeleteSettingGql: UserDeleteSettingGQL,
    private adminUserCalendarsGql: AdminUserCalendarsGQL,
    private adminCountUserCalendarsGql: AdminCountUserCalendarsGQL,
    private adminUserCalendarGql: AdminUserCalendarGQL,
    private adminCreateUserCalendarGql: AdminCreateUserCalendarGQL,
    private adminUpdateUserCalendarGql: AdminUpdateUserCalendarGQL,
    private adminDeleteUserCalendarGql: AdminDeleteUserCalendarGQL,
    private userUserCalendarsGql: UserUserCalendarsGQL,
    private userCountUserCalendarsGql: UserCountUserCalendarsGQL,
    private userUserCalendarGql: UserUserCalendarGQL,
    private userCreateUserCalendarGql: UserCreateUserCalendarGQL,
    private userUpdateUserCalendarGql: UserUpdateUserCalendarGQL,
    private userDeleteUserCalendarGql: UserDeleteUserCalendarGQL,
    private adminUsersGql: AdminUsersGQL,
    private adminUserGql: AdminUserGQL,
    private adminCreateUserGql: AdminCreateUserGQL,
    private adminUpdateUserGql: AdminUpdateUserGQL,
    private adminSetUserPasswordGql: AdminSetUserPasswordGQL,
    private adminDeleteUserGql: AdminDeleteUserGQL,
  ) {}

  accountEmails(variables?: AccountEmailsQueryVariables, options?: QueryOptionsAlone<AccountEmailsQueryVariables>) {
    return this.accountEmailsGql.fetch(variables, options)
  }

  accountEmailsWatch(
    variables?: AccountEmailsQueryVariables,
    options?: WatchQueryOptionsAlone<AccountEmailsQueryVariables>,
  ) {
    return this.accountEmailsGql.watch(variables, options)
  }

  accountProfile(variables?: AccountProfileQueryVariables, options?: QueryOptionsAlone<AccountProfileQueryVariables>) {
    return this.accountProfileGql.fetch(variables, options)
  }

  accountProfileWatch(
    variables?: AccountProfileQueryVariables,
    options?: WatchQueryOptionsAlone<AccountProfileQueryVariables>,
  ) {
    return this.accountProfileGql.watch(variables, options)
  }

  accountUsernameAvailable(
    variables: AccountUsernameAvailableQueryVariables,
    options?: QueryOptionsAlone<AccountUsernameAvailableQueryVariables>,
  ) {
    return this.accountUsernameAvailableGql.fetch(variables, options)
  }

  accountUsernameAvailableWatch(
    variables: AccountUsernameAvailableQueryVariables,
    options?: WatchQueryOptionsAlone<AccountUsernameAvailableQueryVariables>,
  ) {
    return this.accountUsernameAvailableGql.watch(variables, options)
  }

  accountCreateEmail(
    variables: AccountCreateEmailMutationVariables,
    options?: MutationOptionsAlone<AccountCreateEmailMutation, AccountCreateEmailMutationVariables>,
  ) {
    return this.accountCreateEmailGql.mutate(variables, options)
  }

  accountDeleteEmail(
    variables: AccountDeleteEmailMutationVariables,
    options?: MutationOptionsAlone<AccountDeleteEmailMutation, AccountDeleteEmailMutationVariables>,
  ) {
    return this.accountDeleteEmailGql.mutate(variables, options)
  }

  accountMarkEmailPrimary(
    variables: AccountMarkEmailPrimaryMutationVariables,
    options?: MutationOptionsAlone<AccountMarkEmailPrimaryMutation, AccountMarkEmailPrimaryMutationVariables>,
  ) {
    return this.accountMarkEmailPrimaryGql.mutate(variables, options)
  }

  accountMarkEmailPrivate(
    variables: AccountMarkEmailPrivateMutationVariables,
    options?: MutationOptionsAlone<AccountMarkEmailPrivateMutation, AccountMarkEmailPrivateMutationVariables>,
  ) {
    return this.accountMarkEmailPrivateGql.mutate(variables, options)
  }

  accountMarkEmailPublic(
    variables: AccountMarkEmailPublicMutationVariables,
    options?: MutationOptionsAlone<AccountMarkEmailPublicMutation, AccountMarkEmailPublicMutationVariables>,
  ) {
    return this.accountMarkEmailPublicGql.mutate(variables, options)
  }

  accountUpdateProfile(
    variables: AccountUpdateProfileMutationVariables,
    options?: MutationOptionsAlone<AccountUpdateProfileMutation, AccountUpdateProfileMutationVariables>,
  ) {
    return this.accountUpdateProfileGql.mutate(variables, options)
  }

  accountUpdateUsername(
    variables: AccountUpdateUsernameMutationVariables,
    options?: MutationOptionsAlone<AccountUpdateUsernameMutation, AccountUpdateUsernameMutationVariables>,
  ) {
    return this.accountUpdateUsernameGql.mutate(variables, options)
  }

  accountUpdatePassword(
    variables: AccountUpdatePasswordMutationVariables,
    options?: MutationOptionsAlone<AccountUpdatePasswordMutation, AccountUpdatePasswordMutationVariables>,
  ) {
    return this.accountUpdatePasswordGql.mutate(variables, options)
  }

  me(variables?: MeQueryVariables, options?: QueryOptionsAlone<MeQueryVariables>) {
    return this.meGql.fetch(variables, options)
  }

  meWatch(variables?: MeQueryVariables, options?: WatchQueryOptionsAlone<MeQueryVariables>) {
    return this.meGql.watch(variables, options)
  }

  logout(variables?: LogoutMutationVariables, options?: MutationOptionsAlone<LogoutMutation, LogoutMutationVariables>) {
    return this.logoutGql.mutate(variables, options)
  }

  login(variables: LoginMutationVariables, options?: MutationOptionsAlone<LoginMutation, LoginMutationVariables>) {
    return this.loginGql.mutate(variables, options)
  }

  register(
    variables: RegisterMutationVariables,
    options?: MutationOptionsAlone<RegisterMutation, RegisterMutationVariables>,
  ) {
    return this.registerGql.mutate(variables, options)
  }

  adminCalendarEventExceptions(
    variables?: AdminCalendarEventExceptionsQueryVariables,
    options?: QueryOptionsAlone<AdminCalendarEventExceptionsQueryVariables>,
  ) {
    return this.adminCalendarEventExceptionsGql.fetch(variables, options)
  }

  adminCalendarEventExceptionsWatch(
    variables?: AdminCalendarEventExceptionsQueryVariables,
    options?: WatchQueryOptionsAlone<AdminCalendarEventExceptionsQueryVariables>,
  ) {
    return this.adminCalendarEventExceptionsGql.watch(variables, options)
  }

  adminCountCalendarEventExceptions(
    variables?: AdminCountCalendarEventExceptionsQueryVariables,
    options?: QueryOptionsAlone<AdminCountCalendarEventExceptionsQueryVariables>,
  ) {
    return this.adminCountCalendarEventExceptionsGql.fetch(variables, options)
  }

  adminCountCalendarEventExceptionsWatch(
    variables?: AdminCountCalendarEventExceptionsQueryVariables,
    options?: WatchQueryOptionsAlone<AdminCountCalendarEventExceptionsQueryVariables>,
  ) {
    return this.adminCountCalendarEventExceptionsGql.watch(variables, options)
  }

  adminCalendarEventException(
    variables: AdminCalendarEventExceptionQueryVariables,
    options?: QueryOptionsAlone<AdminCalendarEventExceptionQueryVariables>,
  ) {
    return this.adminCalendarEventExceptionGql.fetch(variables, options)
  }

  adminCalendarEventExceptionWatch(
    variables: AdminCalendarEventExceptionQueryVariables,
    options?: WatchQueryOptionsAlone<AdminCalendarEventExceptionQueryVariables>,
  ) {
    return this.adminCalendarEventExceptionGql.watch(variables, options)
  }

  adminCreateCalendarEventException(
    variables: AdminCreateCalendarEventExceptionMutationVariables,
    options?: MutationOptionsAlone<
      AdminCreateCalendarEventExceptionMutation,
      AdminCreateCalendarEventExceptionMutationVariables
    >,
  ) {
    return this.adminCreateCalendarEventExceptionGql.mutate(variables, options)
  }

  adminUpdateCalendarEventException(
    variables: AdminUpdateCalendarEventExceptionMutationVariables,
    options?: MutationOptionsAlone<
      AdminUpdateCalendarEventExceptionMutation,
      AdminUpdateCalendarEventExceptionMutationVariables
    >,
  ) {
    return this.adminUpdateCalendarEventExceptionGql.mutate(variables, options)
  }

  adminDeleteCalendarEventException(
    variables: AdminDeleteCalendarEventExceptionMutationVariables,
    options?: MutationOptionsAlone<
      AdminDeleteCalendarEventExceptionMutation,
      AdminDeleteCalendarEventExceptionMutationVariables
    >,
  ) {
    return this.adminDeleteCalendarEventExceptionGql.mutate(variables, options)
  }

  userCalendarEventExceptions(
    variables?: UserCalendarEventExceptionsQueryVariables,
    options?: QueryOptionsAlone<UserCalendarEventExceptionsQueryVariables>,
  ) {
    return this.userCalendarEventExceptionsGql.fetch(variables, options)
  }

  userCalendarEventExceptionsWatch(
    variables?: UserCalendarEventExceptionsQueryVariables,
    options?: WatchQueryOptionsAlone<UserCalendarEventExceptionsQueryVariables>,
  ) {
    return this.userCalendarEventExceptionsGql.watch(variables, options)
  }

  userCountCalendarEventExceptions(
    variables?: UserCountCalendarEventExceptionsQueryVariables,
    options?: QueryOptionsAlone<UserCountCalendarEventExceptionsQueryVariables>,
  ) {
    return this.userCountCalendarEventExceptionsGql.fetch(variables, options)
  }

  userCountCalendarEventExceptionsWatch(
    variables?: UserCountCalendarEventExceptionsQueryVariables,
    options?: WatchQueryOptionsAlone<UserCountCalendarEventExceptionsQueryVariables>,
  ) {
    return this.userCountCalendarEventExceptionsGql.watch(variables, options)
  }

  userCalendarEventException(
    variables: UserCalendarEventExceptionQueryVariables,
    options?: QueryOptionsAlone<UserCalendarEventExceptionQueryVariables>,
  ) {
    return this.userCalendarEventExceptionGql.fetch(variables, options)
  }

  userCalendarEventExceptionWatch(
    variables: UserCalendarEventExceptionQueryVariables,
    options?: WatchQueryOptionsAlone<UserCalendarEventExceptionQueryVariables>,
  ) {
    return this.userCalendarEventExceptionGql.watch(variables, options)
  }

  userCreateCalendarEventException(
    variables: UserCreateCalendarEventExceptionMutationVariables,
    options?: MutationOptionsAlone<
      UserCreateCalendarEventExceptionMutation,
      UserCreateCalendarEventExceptionMutationVariables
    >,
  ) {
    return this.userCreateCalendarEventExceptionGql.mutate(variables, options)
  }

  userUpdateCalendarEventException(
    variables: UserUpdateCalendarEventExceptionMutationVariables,
    options?: MutationOptionsAlone<
      UserUpdateCalendarEventExceptionMutation,
      UserUpdateCalendarEventExceptionMutationVariables
    >,
  ) {
    return this.userUpdateCalendarEventExceptionGql.mutate(variables, options)
  }

  userDeleteCalendarEventException(
    variables: UserDeleteCalendarEventExceptionMutationVariables,
    options?: MutationOptionsAlone<
      UserDeleteCalendarEventExceptionMutation,
      UserDeleteCalendarEventExceptionMutationVariables
    >,
  ) {
    return this.userDeleteCalendarEventExceptionGql.mutate(variables, options)
  }

  adminCalendarEvents(
    variables?: AdminCalendarEventsQueryVariables,
    options?: QueryOptionsAlone<AdminCalendarEventsQueryVariables>,
  ) {
    return this.adminCalendarEventsGql.fetch(variables, options)
  }

  adminCalendarEventsWatch(
    variables?: AdminCalendarEventsQueryVariables,
    options?: WatchQueryOptionsAlone<AdminCalendarEventsQueryVariables>,
  ) {
    return this.adminCalendarEventsGql.watch(variables, options)
  }

  adminCountCalendarEvents(
    variables?: AdminCountCalendarEventsQueryVariables,
    options?: QueryOptionsAlone<AdminCountCalendarEventsQueryVariables>,
  ) {
    return this.adminCountCalendarEventsGql.fetch(variables, options)
  }

  adminCountCalendarEventsWatch(
    variables?: AdminCountCalendarEventsQueryVariables,
    options?: WatchQueryOptionsAlone<AdminCountCalendarEventsQueryVariables>,
  ) {
    return this.adminCountCalendarEventsGql.watch(variables, options)
  }

  adminCalendarEvent(
    variables: AdminCalendarEventQueryVariables,
    options?: QueryOptionsAlone<AdminCalendarEventQueryVariables>,
  ) {
    return this.adminCalendarEventGql.fetch(variables, options)
  }

  adminCalendarEventWatch(
    variables: AdminCalendarEventQueryVariables,
    options?: WatchQueryOptionsAlone<AdminCalendarEventQueryVariables>,
  ) {
    return this.adminCalendarEventGql.watch(variables, options)
  }

  adminCreateCalendarEvent(
    variables: AdminCreateCalendarEventMutationVariables,
    options?: MutationOptionsAlone<AdminCreateCalendarEventMutation, AdminCreateCalendarEventMutationVariables>,
  ) {
    return this.adminCreateCalendarEventGql.mutate(variables, options)
  }

  adminUpdateCalendarEvent(
    variables: AdminUpdateCalendarEventMutationVariables,
    options?: MutationOptionsAlone<AdminUpdateCalendarEventMutation, AdminUpdateCalendarEventMutationVariables>,
  ) {
    return this.adminUpdateCalendarEventGql.mutate(variables, options)
  }

  adminDeleteCalendarEvent(
    variables: AdminDeleteCalendarEventMutationVariables,
    options?: MutationOptionsAlone<AdminDeleteCalendarEventMutation, AdminDeleteCalendarEventMutationVariables>,
  ) {
    return this.adminDeleteCalendarEventGql.mutate(variables, options)
  }

  userCalendarEvents(
    variables?: UserCalendarEventsQueryVariables,
    options?: QueryOptionsAlone<UserCalendarEventsQueryVariables>,
  ) {
    return this.userCalendarEventsGql.fetch(variables, options)
  }

  userCalendarEventsWatch(
    variables?: UserCalendarEventsQueryVariables,
    options?: WatchQueryOptionsAlone<UserCalendarEventsQueryVariables>,
  ) {
    return this.userCalendarEventsGql.watch(variables, options)
  }

  userCountCalendarEvents(
    variables?: UserCountCalendarEventsQueryVariables,
    options?: QueryOptionsAlone<UserCountCalendarEventsQueryVariables>,
  ) {
    return this.userCountCalendarEventsGql.fetch(variables, options)
  }

  userCountCalendarEventsWatch(
    variables?: UserCountCalendarEventsQueryVariables,
    options?: WatchQueryOptionsAlone<UserCountCalendarEventsQueryVariables>,
  ) {
    return this.userCountCalendarEventsGql.watch(variables, options)
  }

  userCalendarEvent(
    variables: UserCalendarEventQueryVariables,
    options?: QueryOptionsAlone<UserCalendarEventQueryVariables>,
  ) {
    return this.userCalendarEventGql.fetch(variables, options)
  }

  userCalendarEventWatch(
    variables: UserCalendarEventQueryVariables,
    options?: WatchQueryOptionsAlone<UserCalendarEventQueryVariables>,
  ) {
    return this.userCalendarEventGql.watch(variables, options)
  }

  userCreateCalendarEvent(
    variables: UserCreateCalendarEventMutationVariables,
    options?: MutationOptionsAlone<UserCreateCalendarEventMutation, UserCreateCalendarEventMutationVariables>,
  ) {
    return this.userCreateCalendarEventGql.mutate(variables, options)
  }

  userUpdateCalendarEvent(
    variables: UserUpdateCalendarEventMutationVariables,
    options?: MutationOptionsAlone<UserUpdateCalendarEventMutation, UserUpdateCalendarEventMutationVariables>,
  ) {
    return this.userUpdateCalendarEventGql.mutate(variables, options)
  }

  userDeleteCalendarEvent(
    variables: UserDeleteCalendarEventMutationVariables,
    options?: MutationOptionsAlone<UserDeleteCalendarEventMutation, UserDeleteCalendarEventMutationVariables>,
  ) {
    return this.userDeleteCalendarEventGql.mutate(variables, options)
  }

  adminCalendarWeekdays(
    variables?: AdminCalendarWeekdaysQueryVariables,
    options?: QueryOptionsAlone<AdminCalendarWeekdaysQueryVariables>,
  ) {
    return this.adminCalendarWeekdaysGql.fetch(variables, options)
  }

  adminCalendarWeekdaysWatch(
    variables?: AdminCalendarWeekdaysQueryVariables,
    options?: WatchQueryOptionsAlone<AdminCalendarWeekdaysQueryVariables>,
  ) {
    return this.adminCalendarWeekdaysGql.watch(variables, options)
  }

  adminCountCalendarWeekdays(
    variables?: AdminCountCalendarWeekdaysQueryVariables,
    options?: QueryOptionsAlone<AdminCountCalendarWeekdaysQueryVariables>,
  ) {
    return this.adminCountCalendarWeekdaysGql.fetch(variables, options)
  }

  adminCountCalendarWeekdaysWatch(
    variables?: AdminCountCalendarWeekdaysQueryVariables,
    options?: WatchQueryOptionsAlone<AdminCountCalendarWeekdaysQueryVariables>,
  ) {
    return this.adminCountCalendarWeekdaysGql.watch(variables, options)
  }

  adminCalendarWeekday(
    variables: AdminCalendarWeekdayQueryVariables,
    options?: QueryOptionsAlone<AdminCalendarWeekdayQueryVariables>,
  ) {
    return this.adminCalendarWeekdayGql.fetch(variables, options)
  }

  adminCalendarWeekdayWatch(
    variables: AdminCalendarWeekdayQueryVariables,
    options?: WatchQueryOptionsAlone<AdminCalendarWeekdayQueryVariables>,
  ) {
    return this.adminCalendarWeekdayGql.watch(variables, options)
  }

  adminCreateCalendarWeekday(
    variables: AdminCreateCalendarWeekdayMutationVariables,
    options?: MutationOptionsAlone<AdminCreateCalendarWeekdayMutation, AdminCreateCalendarWeekdayMutationVariables>,
  ) {
    return this.adminCreateCalendarWeekdayGql.mutate(variables, options)
  }

  adminUpdateCalendarWeekday(
    variables: AdminUpdateCalendarWeekdayMutationVariables,
    options?: MutationOptionsAlone<AdminUpdateCalendarWeekdayMutation, AdminUpdateCalendarWeekdayMutationVariables>,
  ) {
    return this.adminUpdateCalendarWeekdayGql.mutate(variables, options)
  }

  adminDeleteCalendarWeekday(
    variables: AdminDeleteCalendarWeekdayMutationVariables,
    options?: MutationOptionsAlone<AdminDeleteCalendarWeekdayMutation, AdminDeleteCalendarWeekdayMutationVariables>,
  ) {
    return this.adminDeleteCalendarWeekdayGql.mutate(variables, options)
  }

  userCalendarWeekdays(
    variables?: UserCalendarWeekdaysQueryVariables,
    options?: QueryOptionsAlone<UserCalendarWeekdaysQueryVariables>,
  ) {
    return this.userCalendarWeekdaysGql.fetch(variables, options)
  }

  userCalendarWeekdaysWatch(
    variables?: UserCalendarWeekdaysQueryVariables,
    options?: WatchQueryOptionsAlone<UserCalendarWeekdaysQueryVariables>,
  ) {
    return this.userCalendarWeekdaysGql.watch(variables, options)
  }

  userCountCalendarWeekdays(
    variables?: UserCountCalendarWeekdaysQueryVariables,
    options?: QueryOptionsAlone<UserCountCalendarWeekdaysQueryVariables>,
  ) {
    return this.userCountCalendarWeekdaysGql.fetch(variables, options)
  }

  userCountCalendarWeekdaysWatch(
    variables?: UserCountCalendarWeekdaysQueryVariables,
    options?: WatchQueryOptionsAlone<UserCountCalendarWeekdaysQueryVariables>,
  ) {
    return this.userCountCalendarWeekdaysGql.watch(variables, options)
  }

  userCalendarWeekday(
    variables: UserCalendarWeekdayQueryVariables,
    options?: QueryOptionsAlone<UserCalendarWeekdayQueryVariables>,
  ) {
    return this.userCalendarWeekdayGql.fetch(variables, options)
  }

  userCalendarWeekdayWatch(
    variables: UserCalendarWeekdayQueryVariables,
    options?: WatchQueryOptionsAlone<UserCalendarWeekdayQueryVariables>,
  ) {
    return this.userCalendarWeekdayGql.watch(variables, options)
  }

  userCreateCalendarWeekday(
    variables: UserCreateCalendarWeekdayMutationVariables,
    options?: MutationOptionsAlone<UserCreateCalendarWeekdayMutation, UserCreateCalendarWeekdayMutationVariables>,
  ) {
    return this.userCreateCalendarWeekdayGql.mutate(variables, options)
  }

  userUpdateCalendarWeekday(
    variables: UserUpdateCalendarWeekdayMutationVariables,
    options?: MutationOptionsAlone<UserUpdateCalendarWeekdayMutation, UserUpdateCalendarWeekdayMutationVariables>,
  ) {
    return this.userUpdateCalendarWeekdayGql.mutate(variables, options)
  }

  userDeleteCalendarWeekday(
    variables: UserDeleteCalendarWeekdayMutationVariables,
    options?: MutationOptionsAlone<UserDeleteCalendarWeekdayMutation, UserDeleteCalendarWeekdayMutationVariables>,
  ) {
    return this.userDeleteCalendarWeekdayGql.mutate(variables, options)
  }

  adminCalendars(variables?: AdminCalendarsQueryVariables, options?: QueryOptionsAlone<AdminCalendarsQueryVariables>) {
    return this.adminCalendarsGql.fetch(variables, options)
  }

  adminCalendarsWatch(
    variables?: AdminCalendarsQueryVariables,
    options?: WatchQueryOptionsAlone<AdminCalendarsQueryVariables>,
  ) {
    return this.adminCalendarsGql.watch(variables, options)
  }

  adminCountCalendars(
    variables?: AdminCountCalendarsQueryVariables,
    options?: QueryOptionsAlone<AdminCountCalendarsQueryVariables>,
  ) {
    return this.adminCountCalendarsGql.fetch(variables, options)
  }

  adminCountCalendarsWatch(
    variables?: AdminCountCalendarsQueryVariables,
    options?: WatchQueryOptionsAlone<AdminCountCalendarsQueryVariables>,
  ) {
    return this.adminCountCalendarsGql.watch(variables, options)
  }

  adminCalendar(variables: AdminCalendarQueryVariables, options?: QueryOptionsAlone<AdminCalendarQueryVariables>) {
    return this.adminCalendarGql.fetch(variables, options)
  }

  adminCalendarWatch(
    variables: AdminCalendarQueryVariables,
    options?: WatchQueryOptionsAlone<AdminCalendarQueryVariables>,
  ) {
    return this.adminCalendarGql.watch(variables, options)
  }

  adminCreateCalendar(
    variables: AdminCreateCalendarMutationVariables,
    options?: MutationOptionsAlone<AdminCreateCalendarMutation, AdminCreateCalendarMutationVariables>,
  ) {
    return this.adminCreateCalendarGql.mutate(variables, options)
  }

  adminUpdateCalendar(
    variables: AdminUpdateCalendarMutationVariables,
    options?: MutationOptionsAlone<AdminUpdateCalendarMutation, AdminUpdateCalendarMutationVariables>,
  ) {
    return this.adminUpdateCalendarGql.mutate(variables, options)
  }

  adminDeleteCalendar(
    variables: AdminDeleteCalendarMutationVariables,
    options?: MutationOptionsAlone<AdminDeleteCalendarMutation, AdminDeleteCalendarMutationVariables>,
  ) {
    return this.adminDeleteCalendarGql.mutate(variables, options)
  }

  userCalendars(variables?: UserCalendarsQueryVariables, options?: QueryOptionsAlone<UserCalendarsQueryVariables>) {
    return this.userCalendarsGql.fetch(variables, options)
  }

  userCalendarsWatch(
    variables?: UserCalendarsQueryVariables,
    options?: WatchQueryOptionsAlone<UserCalendarsQueryVariables>,
  ) {
    return this.userCalendarsGql.watch(variables, options)
  }

  userCountCalendars(
    variables?: UserCountCalendarsQueryVariables,
    options?: QueryOptionsAlone<UserCountCalendarsQueryVariables>,
  ) {
    return this.userCountCalendarsGql.fetch(variables, options)
  }

  userCountCalendarsWatch(
    variables?: UserCountCalendarsQueryVariables,
    options?: WatchQueryOptionsAlone<UserCountCalendarsQueryVariables>,
  ) {
    return this.userCountCalendarsGql.watch(variables, options)
  }

  userCalendar(variables: UserCalendarQueryVariables, options?: QueryOptionsAlone<UserCalendarQueryVariables>) {
    return this.userCalendarGql.fetch(variables, options)
  }

  userCalendarWatch(
    variables: UserCalendarQueryVariables,
    options?: WatchQueryOptionsAlone<UserCalendarQueryVariables>,
  ) {
    return this.userCalendarGql.watch(variables, options)
  }

  userCreateCalendar(
    variables: UserCreateCalendarMutationVariables,
    options?: MutationOptionsAlone<UserCreateCalendarMutation, UserCreateCalendarMutationVariables>,
  ) {
    return this.userCreateCalendarGql.mutate(variables, options)
  }

  userUpdateCalendar(
    variables: UserUpdateCalendarMutationVariables,
    options?: MutationOptionsAlone<UserUpdateCalendarMutation, UserUpdateCalendarMutationVariables>,
  ) {
    return this.userUpdateCalendarGql.mutate(variables, options)
  }

  userDeleteCalendar(
    variables: UserDeleteCalendarMutationVariables,
    options?: MutationOptionsAlone<UserDeleteCalendarMutation, UserDeleteCalendarMutationVariables>,
  ) {
    return this.userDeleteCalendarGql.mutate(variables, options)
  }

  uptime(variables?: UptimeQueryVariables, options?: QueryOptionsAlone<UptimeQueryVariables>) {
    return this.uptimeGql.fetch(variables, options)
  }

  uptimeWatch(variables?: UptimeQueryVariables, options?: WatchQueryOptionsAlone<UptimeQueryVariables>) {
    return this.uptimeGql.watch(variables, options)
  }

  intercomPub(
    variables: IntercomPubMutationVariables,
    options?: MutationOptionsAlone<IntercomPubMutation, IntercomPubMutationVariables>,
  ) {
    return this.intercomPubGql.mutate(variables, options)
  }

  intercomSub(
    variables?: IntercomSubSubscriptionVariables,
    options?: SubscriptionOptionsAlone<IntercomSubSubscriptionVariables>,
  ) {
    return this.intercomSubGql.subscribe(variables, options)
  }

  adminSettings(variables?: AdminSettingsQueryVariables, options?: QueryOptionsAlone<AdminSettingsQueryVariables>) {
    return this.adminSettingsGql.fetch(variables, options)
  }

  adminSettingsWatch(
    variables?: AdminSettingsQueryVariables,
    options?: WatchQueryOptionsAlone<AdminSettingsQueryVariables>,
  ) {
    return this.adminSettingsGql.watch(variables, options)
  }

  adminCountSettings(
    variables?: AdminCountSettingsQueryVariables,
    options?: QueryOptionsAlone<AdminCountSettingsQueryVariables>,
  ) {
    return this.adminCountSettingsGql.fetch(variables, options)
  }

  adminCountSettingsWatch(
    variables?: AdminCountSettingsQueryVariables,
    options?: WatchQueryOptionsAlone<AdminCountSettingsQueryVariables>,
  ) {
    return this.adminCountSettingsGql.watch(variables, options)
  }

  adminSetting(variables: AdminSettingQueryVariables, options?: QueryOptionsAlone<AdminSettingQueryVariables>) {
    return this.adminSettingGql.fetch(variables, options)
  }

  adminSettingWatch(
    variables: AdminSettingQueryVariables,
    options?: WatchQueryOptionsAlone<AdminSettingQueryVariables>,
  ) {
    return this.adminSettingGql.watch(variables, options)
  }

  adminCreateSetting(
    variables: AdminCreateSettingMutationVariables,
    options?: MutationOptionsAlone<AdminCreateSettingMutation, AdminCreateSettingMutationVariables>,
  ) {
    return this.adminCreateSettingGql.mutate(variables, options)
  }

  adminUpdateSetting(
    variables: AdminUpdateSettingMutationVariables,
    options?: MutationOptionsAlone<AdminUpdateSettingMutation, AdminUpdateSettingMutationVariables>,
  ) {
    return this.adminUpdateSettingGql.mutate(variables, options)
  }

  adminDeleteSetting(
    variables: AdminDeleteSettingMutationVariables,
    options?: MutationOptionsAlone<AdminDeleteSettingMutation, AdminDeleteSettingMutationVariables>,
  ) {
    return this.adminDeleteSettingGql.mutate(variables, options)
  }

  userSettings(variables?: UserSettingsQueryVariables, options?: QueryOptionsAlone<UserSettingsQueryVariables>) {
    return this.userSettingsGql.fetch(variables, options)
  }

  userSettingsWatch(
    variables?: UserSettingsQueryVariables,
    options?: WatchQueryOptionsAlone<UserSettingsQueryVariables>,
  ) {
    return this.userSettingsGql.watch(variables, options)
  }

  userCountSettings(
    variables?: UserCountSettingsQueryVariables,
    options?: QueryOptionsAlone<UserCountSettingsQueryVariables>,
  ) {
    return this.userCountSettingsGql.fetch(variables, options)
  }

  userCountSettingsWatch(
    variables?: UserCountSettingsQueryVariables,
    options?: WatchQueryOptionsAlone<UserCountSettingsQueryVariables>,
  ) {
    return this.userCountSettingsGql.watch(variables, options)
  }

  userSetting(variables: UserSettingQueryVariables, options?: QueryOptionsAlone<UserSettingQueryVariables>) {
    return this.userSettingGql.fetch(variables, options)
  }

  userSettingWatch(variables: UserSettingQueryVariables, options?: WatchQueryOptionsAlone<UserSettingQueryVariables>) {
    return this.userSettingGql.watch(variables, options)
  }

  userCreateSetting(
    variables: UserCreateSettingMutationVariables,
    options?: MutationOptionsAlone<UserCreateSettingMutation, UserCreateSettingMutationVariables>,
  ) {
    return this.userCreateSettingGql.mutate(variables, options)
  }

  userUpdateSetting(
    variables: UserUpdateSettingMutationVariables,
    options?: MutationOptionsAlone<UserUpdateSettingMutation, UserUpdateSettingMutationVariables>,
  ) {
    return this.userUpdateSettingGql.mutate(variables, options)
  }

  userDeleteSetting(
    variables: UserDeleteSettingMutationVariables,
    options?: MutationOptionsAlone<UserDeleteSettingMutation, UserDeleteSettingMutationVariables>,
  ) {
    return this.userDeleteSettingGql.mutate(variables, options)
  }

  adminUserCalendars(
    variables?: AdminUserCalendarsQueryVariables,
    options?: QueryOptionsAlone<AdminUserCalendarsQueryVariables>,
  ) {
    return this.adminUserCalendarsGql.fetch(variables, options)
  }

  adminUserCalendarsWatch(
    variables?: AdminUserCalendarsQueryVariables,
    options?: WatchQueryOptionsAlone<AdminUserCalendarsQueryVariables>,
  ) {
    return this.adminUserCalendarsGql.watch(variables, options)
  }

  adminCountUserCalendars(
    variables?: AdminCountUserCalendarsQueryVariables,
    options?: QueryOptionsAlone<AdminCountUserCalendarsQueryVariables>,
  ) {
    return this.adminCountUserCalendarsGql.fetch(variables, options)
  }

  adminCountUserCalendarsWatch(
    variables?: AdminCountUserCalendarsQueryVariables,
    options?: WatchQueryOptionsAlone<AdminCountUserCalendarsQueryVariables>,
  ) {
    return this.adminCountUserCalendarsGql.watch(variables, options)
  }

  adminUserCalendar(
    variables: AdminUserCalendarQueryVariables,
    options?: QueryOptionsAlone<AdminUserCalendarQueryVariables>,
  ) {
    return this.adminUserCalendarGql.fetch(variables, options)
  }

  adminUserCalendarWatch(
    variables: AdminUserCalendarQueryVariables,
    options?: WatchQueryOptionsAlone<AdminUserCalendarQueryVariables>,
  ) {
    return this.adminUserCalendarGql.watch(variables, options)
  }

  adminCreateUserCalendar(
    variables: AdminCreateUserCalendarMutationVariables,
    options?: MutationOptionsAlone<AdminCreateUserCalendarMutation, AdminCreateUserCalendarMutationVariables>,
  ) {
    return this.adminCreateUserCalendarGql.mutate(variables, options)
  }

  adminUpdateUserCalendar(
    variables: AdminUpdateUserCalendarMutationVariables,
    options?: MutationOptionsAlone<AdminUpdateUserCalendarMutation, AdminUpdateUserCalendarMutationVariables>,
  ) {
    return this.adminUpdateUserCalendarGql.mutate(variables, options)
  }

  adminDeleteUserCalendar(
    variables: AdminDeleteUserCalendarMutationVariables,
    options?: MutationOptionsAlone<AdminDeleteUserCalendarMutation, AdminDeleteUserCalendarMutationVariables>,
  ) {
    return this.adminDeleteUserCalendarGql.mutate(variables, options)
  }

  userUserCalendars(
    variables?: UserUserCalendarsQueryVariables,
    options?: QueryOptionsAlone<UserUserCalendarsQueryVariables>,
  ) {
    return this.userUserCalendarsGql.fetch(variables, options)
  }

  userUserCalendarsWatch(
    variables?: UserUserCalendarsQueryVariables,
    options?: WatchQueryOptionsAlone<UserUserCalendarsQueryVariables>,
  ) {
    return this.userUserCalendarsGql.watch(variables, options)
  }

  userCountUserCalendars(
    variables?: UserCountUserCalendarsQueryVariables,
    options?: QueryOptionsAlone<UserCountUserCalendarsQueryVariables>,
  ) {
    return this.userCountUserCalendarsGql.fetch(variables, options)
  }

  userCountUserCalendarsWatch(
    variables?: UserCountUserCalendarsQueryVariables,
    options?: WatchQueryOptionsAlone<UserCountUserCalendarsQueryVariables>,
  ) {
    return this.userCountUserCalendarsGql.watch(variables, options)
  }

  userUserCalendar(
    variables: UserUserCalendarQueryVariables,
    options?: QueryOptionsAlone<UserUserCalendarQueryVariables>,
  ) {
    return this.userUserCalendarGql.fetch(variables, options)
  }

  userUserCalendarWatch(
    variables: UserUserCalendarQueryVariables,
    options?: WatchQueryOptionsAlone<UserUserCalendarQueryVariables>,
  ) {
    return this.userUserCalendarGql.watch(variables, options)
  }

  userCreateUserCalendar(
    variables: UserCreateUserCalendarMutationVariables,
    options?: MutationOptionsAlone<UserCreateUserCalendarMutation, UserCreateUserCalendarMutationVariables>,
  ) {
    return this.userCreateUserCalendarGql.mutate(variables, options)
  }

  userUpdateUserCalendar(
    variables: UserUpdateUserCalendarMutationVariables,
    options?: MutationOptionsAlone<UserUpdateUserCalendarMutation, UserUpdateUserCalendarMutationVariables>,
  ) {
    return this.userUpdateUserCalendarGql.mutate(variables, options)
  }

  userDeleteUserCalendar(
    variables: UserDeleteUserCalendarMutationVariables,
    options?: MutationOptionsAlone<UserDeleteUserCalendarMutation, UserDeleteUserCalendarMutationVariables>,
  ) {
    return this.userDeleteUserCalendarGql.mutate(variables, options)
  }

  adminUsers(variables?: AdminUsersQueryVariables, options?: QueryOptionsAlone<AdminUsersQueryVariables>) {
    return this.adminUsersGql.fetch(variables, options)
  }

  adminUsersWatch(variables?: AdminUsersQueryVariables, options?: WatchQueryOptionsAlone<AdminUsersQueryVariables>) {
    return this.adminUsersGql.watch(variables, options)
  }

  adminUser(variables: AdminUserQueryVariables, options?: QueryOptionsAlone<AdminUserQueryVariables>) {
    return this.adminUserGql.fetch(variables, options)
  }

  adminUserWatch(variables: AdminUserQueryVariables, options?: WatchQueryOptionsAlone<AdminUserQueryVariables>) {
    return this.adminUserGql.watch(variables, options)
  }

  adminCreateUser(
    variables: AdminCreateUserMutationVariables,
    options?: MutationOptionsAlone<AdminCreateUserMutation, AdminCreateUserMutationVariables>,
  ) {
    return this.adminCreateUserGql.mutate(variables, options)
  }

  adminUpdateUser(
    variables: AdminUpdateUserMutationVariables,
    options?: MutationOptionsAlone<AdminUpdateUserMutation, AdminUpdateUserMutationVariables>,
  ) {
    return this.adminUpdateUserGql.mutate(variables, options)
  }

  adminSetUserPassword(
    variables: AdminSetUserPasswordMutationVariables,
    options?: MutationOptionsAlone<AdminSetUserPasswordMutation, AdminSetUserPasswordMutationVariables>,
  ) {
    return this.adminSetUserPasswordGql.mutate(variables, options)
  }

  adminDeleteUser(
    variables: AdminDeleteUserMutationVariables,
    options?: MutationOptionsAlone<AdminDeleteUserMutation, AdminDeleteUserMutationVariables>,
  ) {
    return this.adminDeleteUserGql.mutate(variables, options)
  }
}
