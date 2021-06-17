import { Component } from '@angular/core'

@Component({
  template: `
    <ui-sidebar-page headerTitle="Admin" [links]="links">
      <router-outlet></router-outlet>
    </ui-sidebar-page>
  `,
})
export class WebAdminFeatureComponent {
  links = [
    { label: 'Dashboard', path: 'dashboard', icon: '' },
{ label: 'Settings', path: 'settings', icon: '' },
{ label: 'UserCalendars', path: 'user-calendars', icon: '' },
{ label: 'Settingss', path: 'settingss', icon: '' },
{ label: 'CalendarWeekdays', path: 'calendar-weekdays', icon: '' },
{ label: 'CalendarEventExceptions', path: 'calendar-event-exceptions', icon: '' },
{ label: 'CalendarEvents', path: 'calendar-events', icon: '' },
{ label: 'Calendars', path: 'calendars', icon: '' },
{ label: 'Transactions', path: 'transactions', icon: '' },
{ label: 'Transactionss', path: 'transactionss', icon: '' },
{ label: 'Investments', path: 'investments', icon: '' },
    { label: 'EquipmentTypes', path: 'equipment-types', icon: '' },
    { label: 'EquipmentSizes', path: 'equipment-sizes', icon: '' },
    { label: 'AccessorialFeeTypes', path: 'accessorial-fee-types', icon: '' },
    { label: 'Accessorials', path: 'accessorials', icon: '' },
    { label: 'Quotes', path: 'quotes', icon: '' },
    { label: 'Packaging Types', path: 'packaging-types', icon: '' },
    { label: 'Organizations', path: 'organizations', icon: '' },
    { label: 'Items', path: 'items', icon: '' },
    { label: 'Freight Classes', path: 'freight-classes', icon: '' },
    { label: 'Addresses', path: 'addresses', icon: '' },
    { label: 'National Motor Freight Classifications', path: 'national-motor-freight-classifications', icon: '' },
    { label: 'Users', path: 'users', icon: '' },
  ]
}
