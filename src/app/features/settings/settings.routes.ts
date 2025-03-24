import { Routes } from "@angular/router";
import { SettingsComponent } from './settings.component'
import { SettingsDetailComponent } from './settings-detail.component'

export const settingsRoutes: Routes = [
    {
      path: '',
      redirectTo: 'settings',
      pathMatch: 'full'
    },
    {
      path: 'settings',
      component: SettingsComponent,
    },
    {
      path: 'detail/:name',
      component: SettingsDetailComponent,
    },
  ];