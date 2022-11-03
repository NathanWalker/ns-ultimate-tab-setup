import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { LaunchScreenComponent } from './launch-screen.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/launch-screen',
    pathMatch: 'full',
  },
  {
    path: 'launch-screen',
    component: LaunchScreenComponent,
  },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'favorite-detail',
    loadChildren: () => import('./features/favorite-detail/favorite-detail.module').then((m) => m.FavoriteDetailModule),
  }
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
