import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { ListComponent } from "./list.component";
import { NSEmptyOutletComponent } from "@nativescript/angular";

export const homeRoutes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "list",
        outlet: "listTab",
        children: [
          {
            path: "",
            component: ListComponent,
          },
        ],
      },
      {
        path: "favorites",
        loadComponent: () =>
          import("../favorites/favorites.component").then(
            (m) => m.FavoritesComponent
          ),
        outlet: "favoritesTab",
      },
      {
        path: "settings",
        component: NSEmptyOutletComponent,
        loadChildren: () =>
          import("../settings/settings.routes").then((m) => m.settingsRoutes),
        outlet: "settingsTab",
      },
    ],
  },
];
