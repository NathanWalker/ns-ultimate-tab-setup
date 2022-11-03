import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { SharedModule } from '../shared/shared.module';
import { SETTINGS_COMPONENTS, SettingsComponent, SettingsDetailComponent } from './components';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: SettingsComponent,
  },
  {
    path: 'detail/:name',
    component: SettingsDetailComponent,
  },
];

@NgModule({
  imports: [SharedModule, NativeScriptRouterModule.forChild(routes)],
  declarations: [...SETTINGS_COMPONENTS],
  exports: [...SETTINGS_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SettingsModule {}
