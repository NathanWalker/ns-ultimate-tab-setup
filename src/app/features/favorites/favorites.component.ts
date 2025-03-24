import { Component, inject, NO_ERRORS_SCHEMA, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import {
  EventData,
  PageTransition,
  SharedTransition,
} from "@nativescript/core";
import { AppStateService } from "../../core/services/app-state.service";
import { Item } from "../../core/models";
import { ItemService } from "../../core/services/item.service";
import { uxLabelFadeIn } from "../../utils";
import { Haptics } from "@nativescript/haptics";
import { SHARED_MODULES } from "../shared/shared.module";

@Component({
  moduleId: module.id,
  selector: "ns-favorites",
  templateUrl: "./favorites.component.html",
  imports: [...SHARED_MODULES],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FavoritesComponent implements OnInit {
  itemService = inject(ItemService);
  router = inject(RouterExtensions);
  activatedRoute = inject(ActivatedRoute);
  appStateService = inject(AppStateService);
  items: Array<Item>;
  isIOS = __APPLE__;

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }

  itemTap(args) {
    Haptics.selection();
    const item = this.itemService.getItem(args.index + 1) as Item;
    this.appStateService.navAwayFromTabs().then(() => {
      this.router.navigate(["/favorite-detail", item.id], {
        queryParams: {
          title: 'Favorites'
        },
        transition: SharedTransition.custom(new PageTransition(), {
          pageStart: {
            x: 200,
            y: 0,
            opacity: 0,
          },
          pageEnd: {
            duration: 150,
          },
          pageReturn: {
            duration: 150,
          },
        }),
      });
    });
  }

  loadedTitle(args: EventData) {
    uxLabelFadeIn(args);
  }
}
