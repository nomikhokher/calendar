import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { FormlyModule } from '@ngx-formly/core'
import { UiFormFieldModule } from '../../wrappers/form-field/ui-form-field.module'
import { UiFormTypeaheadComponent } from './ui-form-typeahead.component'
import { NgSelectModule } from '@ng-select/ng-select'

@NgModule({
  declarations: [UiFormTypeaheadComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiFormFieldModule,
    NgSelectModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'typeahead',
          component: UiFormTypeaheadComponent,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class UiFormTypeaheadModule {}
