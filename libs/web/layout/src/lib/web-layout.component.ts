import { Component } from '@angular/core'
import { WebLayoutStore } from './web-layout.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="flex flex-col h-full dark:bg-gray-900 text-gray-900 dark:text-gray-300">
        <div>
          <layout-header
            [logo]="vm?.layout?.logo"
            [links]="vm?.links?.main"
            [user]="vm?.user"
            [profileLinks]="vm.links?.profile"
          >
          </layout-header>
        </div>
        <hr />
        <main class="flex-1 h-full overflow-auto">
          <router-outlet></router-outlet>
        </main>
        <!-- <footer class="mt-auto">
          <layout-footer [html]="vm?.layout?.footerHtml"></layout-footer>
        </footer> -->
      </div>
    </ng-container>
  `,
  providers: [WebLayoutStore],
})
export class WebLayoutComponent {
  vm$ = this.layoutStore.vm$

  constructor(private readonly layoutStore: WebLayoutStore) {}
}
