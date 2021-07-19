import { Component, OnDestroy, OnInit, AfterViewInit, ChangeDetectionStrategy } from '@angular/core'
import { FormControl } from '@angular/forms'
import { FieldType } from '@ngx-formly/core'
import { Subject, Observable, from } from 'rxjs'
import { takeUntil, filter, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators'

interface Item {
  id: string
  name: string
}

@Component({
  template: `
    <div>
      <label class="block text-sm font-medium leading-5 text-gray-700">
        <ng-container *ngIf="to.required">
          <span class="text-red-600">*</span>
        </ng-container>
      </label>
      <div class="relative mt-1 rounded-md shadow-sm">
        <ng-container *ngIf="to.static">
          <!--Using ng-option and for loop-->
          <ng-select
            (change)="onChange($event)"
            [bindValue]="'id'"
            [formControl]="formControl"
            [multiple]="to.multiple"
            [fieldAttributes]="field"
            [bindLabel]="'name'"
          >
            <ng-option *ngFor="let item of to?.items" [value]="item.id">
              {{ item.name }}
              <!-- <div class="flex">
          <img class="w-1/2" src="{{item.path}}" width="{{item.width}}" height="{{item.height}}"/>   
          <span class="w-1/2">{{item.name}}</span> 
        </div>-->
            </ng-option>
          </ng-select>
        </ng-container>
        <ng-container *ngIf="!to.static">
          <ng-select
            [items]="to?.items | async"
            [placeholder]="to.placeholder"
            [bindValue]="'id'"
            [bindLabel]="'name'"
            [multiple]="to.multiple"
            [virtualScroll]="true"
            [formControl]="formControl"
            [groupBy]="to.groupBy"
            (change)="onChange($event)"
            (search)="to?.onSearch($event)"
          >
          </ng-select>
        </ng-container>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiFormTypeaheadComponent extends FieldType implements OnDestroy, OnInit, AfterViewInit {
  formControl!: FormControl

  onDestroy$ = new Subject<void>()
  search$ = new Subject<string>()
  static = false
  selectedItem: Item
  items: Observable<Item[]>
  options$: Observable<string[]>
  public value: any

  ngOnInit(): void {
    console.log(this.selectedItem)
    console.log('initializing')

    // this.options$ = this.search$.pipe(
    //   takeUntil(this.onDestroy$),
    //   filter((v) => v !== null),
    //   debounceTime(200),
    //   distinctUntilChanged(),
    //   switchMap((name) => this.to?.filter(name)),
    // ) as Observable<string[]>;
  }

  ngAfterViewInit() {
    //this.search$.next()
  }

  ngOnDestroy(): void {
    this.onDestroy$.next()
    this.onDestroy$.complete()
  }

  onChange(selection) {
    console.log('component on change', selection)
    if (this.to.onChange) {
      console.log('on change exists')
      if (selection.id) {
        //this.formControl.setValue(selection.id);
        console.log('calling onchange')
      } else {
        console.log('setting', selection)
        //this.formControl.setValue(selection);
        console.log('calling onchange')
      }

      return this.to.onChange(selection)
    }
    return selection
  }

  onSearch({ term }) {
    console.log('searching', this.formState, this.options$, term)
    //this.search$.next(term);
  }

  inputMapFn(e: any) {
    if (this.to.mapFn) {
      return this.to.mapFn(e)
    }
    return e
  }

  outputMapFn(e: any) {
    if (this.to.convertOutput === true && e && this.to.mapFn) {
      this.formControl.setValue(this.to.mapFn(e))
      this.value = e
      return
    }
    this.formControl.setValue(e)
    this.value = e
  }
}
