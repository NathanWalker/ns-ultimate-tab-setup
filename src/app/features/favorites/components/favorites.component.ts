import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { EventData, Label } from "@nativescript/core";
import { AppStateService } from "../../../core/services/app-state.service";
import { Item } from "../../../core/models";
import { ItemService } from "../../../core/services/item.service";
import { uxLabelFadeIn } from "../../../utils";

@Component({
  moduleId: module.id,
  selector: "ns-favorites",
  templateUrl: "./favorites.component.html",
})
export class FavoritesComponent implements OnInit {
  itemService = inject(ItemService);
  router = inject(RouterExtensions);
  activatedRoute = inject(ActivatedRoute);
  appStateService = inject(AppStateService);
  items: Array<Item>;

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }

  itemTap(args) {
    const item = this.itemService.getItem(args.index + 1);
    this.appStateService.navAwayFromTabs().then(() => {
      this.router.navigate(["/favorite-detail", item.id], {
        transition: {
          name: "slide",
        },
      });
    });
  }

  loadedTitle(args: EventData) {
    uxLabelFadeIn(args);
  }
}
