import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { FormlyModule } from '@ngx-formly/core'
import { AgGridModule } from 'ag-grid-angular'
import { UiFormFieldModule } from '../../wrappers/form-field/ui-form-field.module'
import { UiFormGridComponent } from './ui-form-grid.component'
import { GridFormlyCellComponent } from './grid-formly-cell.component'

@NgModule({
  declarations: [UiFormGridComponent, GridFormlyCellComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([GridFormlyCellComponent]),
    UiFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'grid',
          component: UiFormGridComponent,
          defaultOptions: {
            templateOptions: {
              width: '100%',
              height: '400px',
            },
          },
        },
      ],
    }),
  ],
})
export class UiFormGridModule {}
