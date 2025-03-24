import { Routes } from "@angular/router";
import { LaunchScreenComponent } from "./app/launch-screen.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/launch-screen",
    pathMatch: "full",
  },
  {
    path: "launch-screen",
    component: LaunchScreenComponent,
  },
  {
    path: "home",
    loadChildren: () =>
      import("./app/features/home/home.routes").then((m) => m.homeRoutes),
  },
  {
    path: "favorite-detail",
    loadChildren: () =>
      import("./app/features/favorite-detail/favorite-detail.routes").then(
        (m) => m.favoriteDetailRoutes
      ),
  },
];
