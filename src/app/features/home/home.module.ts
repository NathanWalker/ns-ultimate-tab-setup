import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule, NSEmptyOutletComponent } from '@nativescript/angular';

import { SharedModule } from '../shared/shared.module';
import { HOME_COMPONENTS, HomeComponent, ListComponent } from './components';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'list',
        outlet: 'listTab',
        children: [
          {
            path: '', 
            component: ListComponent,
          },
        ],
      },
      {
        path: 'favorites',
        component: NSEmptyOutletComponent,
        loadChildren: () => import('../favorites/favorites.module').then((m) => m.FavoritesModule),
        outlet: 'favoritesTab',
      },
      {
        path: 'settings',
        component: NSEmptyOutletComponent,
        loadChildren: () => import('../settings/settings.module').then((m) => m.SettingsModule),
        outlet: 'settingsTab',
      },
    ],
  },
];

@NgModule({
  imports: [SharedModule, NativeScriptRouterModule.forChild(routes)],
  declarations: [...HOME_COMPONENTS],
  exports: [...HOME_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
