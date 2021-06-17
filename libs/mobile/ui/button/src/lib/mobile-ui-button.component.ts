import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'ui-button',
  template: `
    <ng-container *ngIf="link">
      <ion-button [routerLink]="link" fill="outline" [class]="classes">{{ label }}</ion-button>
    </ng-container>
    <ng-container *ngIf="!link">
      <ion-button (click)="handler.emit($event)" [disabled]="disabled" [type]="type" [class]="classes" fill="outline">{{
        label
      }}</ion-button>
    </ng-container>
  `,
})
export class MobileUiButtonComponent {
  @Input() link?: string
  @Input() disabled?: boolean
  @Input() label: string
  @Input() type = 'button'
  @Output() handler = new EventEmitter()

  get classes(): string {
    return ' '
  }
}
