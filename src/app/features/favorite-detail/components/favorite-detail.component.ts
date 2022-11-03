import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { EventData, Label } from "@nativescript/core";
import { take } from "rxjs";
import { uxLabelFadeIn } from "../../../utils";
import { Item } from "../../../core/models";
import { ItemService } from "../../../core/services/item.service";

@Component({
  moduleId: module.id,
  selector: "ns-favorite-detail",
  templateUrl: "./favorite-detail.component.html",
})
export class FavoriteDetailComponent implements OnInit {
  itemService = inject(ItemService);
  activeRoute = inject(ActivatedRoute);
  router = inject(RouterExtensions);
  item: Item;

  ngOnInit() {
    this.activeRoute.params.pipe(take(1)).subscribe((params) => {
      this.item = this.itemService.getItem(+params.id);
    });
  }

  back() {
    this.router.back();
  }
  
  loadedTitle(args: EventData) {
    uxLabelFadeIn(args);
  }
}
