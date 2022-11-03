import { Component, inject } from "@angular/core";
import { NativeDialogService } from "@nativescript/angular";
import { EventData } from "@nativescript/core";
import { Haptics } from "@nativescript/haptics";
import { uxLabelFadeIn } from "../../../utils";
import { AppStateService } from "../../../core/services/app-state.service";

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
  itemBgColor = "linear-gradient(135deg, #161828, #2f2444)";
  items: Array<IListItem>;

  constructor() {
    this.items = [];
    for (let i = 0; i < 20; i++) {
      this.items.push({
        index: i,
        color: this.itemBgColor,
        image: `https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80`,
      });
    }
  }

  itemTap(args) {
    Haptics.selection();
  }

  loadedTitle(args: EventData) {
    uxLabelFadeIn(args);
  }
}
