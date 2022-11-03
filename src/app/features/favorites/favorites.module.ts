import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { SharedModule } from '../shared/shared.module';
import { FAVORITES_COMPONENTS, FavoritesComponent } from './components';

export const routes: Routes = [
  {
    path: '',
    component: FavoritesComponent,
  },
];

@NgModule({
  imports: [SharedModule, NativeScriptRouterModule.forChild(routes)],
  declarations: [...FAVORITES_COMPONENTS],
  exports: [...FAVORITES_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA],
})
export class FavoritesModule {}
