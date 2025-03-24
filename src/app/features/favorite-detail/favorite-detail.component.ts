import { Component, inject, NO_ERRORS_SCHEMA, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { EventData, Label } from "@nativescript/core";
import { take } from "rxjs";
import { uxLabelFadeIn } from "../../utils";
import { Item } from "../../core/models";
import { ItemService } from "../../core/services/item.service";
import { SHARED_MODULES } from "../shared/shared.module";
import { AppStateService } from "~/app/core/services/app-state.service";

@Component({
  moduleId: module.id,
  selector: "ns-favorite-detail",
  templateUrl: "./favorite-detail.component.html",
  imports: [...SHARED_MODULES],
  schemas: [NO_ERRORS_SCHEMA],
})
export class FavoriteDetailComponent implements OnInit {
  itemService = inject(ItemService);
  activeRoute = inject(ActivatedRoute);
  appStateService = inject(AppStateService);
  router = inject(RouterExtensions);
  isAndroid = __ANDROID__;
  item: Item | undefined;
  title: string;

  ngOnInit() {
    this.activeRoute.params.pipe(take(1)).subscribe((params) => {
      this.item = this.itemService.getItem(+params.id);
    });
    this.activeRoute.queryParams.pipe(take(1)).subscribe((params) => {
      this.title = params.title;
    });
  }

  back() {
    this.router.back({
      relativeTo: this.activeRoute,
    });
  }

  loadedTitle(args: EventData) {
    uxLabelFadeIn(args);
  }
}
