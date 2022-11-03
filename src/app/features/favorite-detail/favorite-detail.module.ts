import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { SharedModule } from '../shared/shared.module';
import { FAVORITE_DETAIL_COMPONENTS, FavoriteDetailComponent } from './components';

export const routes: Routes = [
  {
    path: ':id',
    component: FavoriteDetailComponent,
  },
];

@NgModule({
  imports: [SharedModule, NativeScriptRouterModule.forChild(routes)],
  declarations: [...FAVORITE_DETAIL_COMPONENTS],
  exports: [...FAVORITE_DETAIL_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA],
})
export class FavoriteDetailModule {}
