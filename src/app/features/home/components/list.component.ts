import { Component, inject } from "@angular/core";
import { NativeDialogService, RouterExtensions } from "@nativescript/angular";
import { EventData, Page, PageTransition, Screen, SharedTransition } from "@nativescript/core";
import { Haptics } from "@nativescript/haptics";
import { uxLabelFadeIn } from "../../../utils";
import { AppStateService } from "../../../core/services/app-state.service";
import { ItemService } from "~/app/core/services/item.service";

interface IListItem {
  index: number;
  color?: string;
  image?: string;
}

@Component({
  moduleId: module.id,
  selector: "ns-list",
  templateUrl: "./list.component.html",
})
export class ListComponent {
  nativeDialog = inject(NativeDialogService);
  appState = inject(AppStateService);
  itemService = inject(ItemService);
  router = inject(RouterExtensions);
  page = inject(Page);
  itemBgColor = "linear-gradient(135deg, #161828, #2f2444)";
  items: Array<IListItem>;
  isIOS = __APPLE__;

  constructor() {
    this.items = [];
    for (let i = 0; i < 20; i++) {
      this.items.push({
        index: i,
        color: this.itemBgColor,
        image: `~/assets/outdoors.jpg`,
      });
    }
  }

  itemTap(args) {
    Haptics.selection();
    const item = this.itemService.getItem(1);
    this.appState.navAwayFromTabs().then(() => {
      this.router.navigate(["/favorite-detail", item.id], {
        queryParams: {
          title: 'Home'
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
          }
        })
      });
    });
  }

  loadedTitle(args: EventData) {
    uxLabelFadeIn(args);
  }
}
