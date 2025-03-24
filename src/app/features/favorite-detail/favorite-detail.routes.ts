import { Routes } from "@angular/router";
import { FavoriteDetailComponent } from "./favorite-detail.component";

export const favoriteDetailRoutes: Routes = [
  {
    path: ":id",
    component: FavoriteDetailComponent,
  },
];
