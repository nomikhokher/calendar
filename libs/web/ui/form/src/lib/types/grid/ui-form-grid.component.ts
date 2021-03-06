import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core'
import { FieldArrayType } from '@ngx-formly/core'
import { AgGridAngular } from 'ag-grid-angular'
import { GridOptions } from 'ag-grid-community'
import { GridFormlyCellComponent } from './grid-formly-cell.component'

@Component({
  selector: 'formly-field-grid',
  template: `
    <div [ngStyle]="style">
      <button type="button" (click)="this.addRow()">Add Row</button>
      <ag-grid-angular
        #agGrid
        style="width: 100%; height: 100%"
        class="classNames"
        [gridOptions]="gridOptions"
        [rowData]="model"
        (firstDataRendered)="onFirstDataRendered($event)"
      >
      </ag-grid-angular>
    </div>
  `,
})
export class UiFormGridComponent extends FieldArrayType implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular

  get classNames(): string {
    return 'ag-theme-balham'
  }

  gridOptions: GridOptions
  style: any = {}

  ngOnInit() {
    this.style = {
      width: this.to.width,
      height: this.to.height,
    }

    // map cell Renderer to Formly Component
    this.to.gridOptions.columnDefs.forEach((column) => (column.cellRendererFramework = GridFormlyCellComponent))

    // set grid options and context of the parent formly field
    const gridOptions: GridOptions = this.to.gridOptions || {}
    gridOptions.context = {
      parentField: this.field,
    }

    this.gridOptions = gridOptions
  }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit()
  }

  addRow() {
    console.log(this.model)
    console.log(this.field)
    this.add()
  }
}
