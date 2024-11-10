import { Injectable } from "@angular/core";
import { BottomNavigation } from "@nativescript-community/ui-material-bottom-navigation";
import { CoreTypes, GridLayout, Screen } from "@nativescript/core";

@Injectable({
  providedIn: "root",
})
export class AppStateService {
  tabView: BottomNavigation;
  homeTabContainer: GridLayout;

  navAwayFromTabs() {
    return new Promise<void>((resolve) => {
      if (this.homeTabContainer) {
        this.homeTabContainer
          .animate({
            opacity: 0,
            translate: { x: -Screen.mainScreen.widthDIPs / 3, y: 0 },
            duration: 150,
            curve: CoreTypes.AnimationCurve.easeOut,
          })
          .then(resolve)
          .catch(resolve);
      }
    });
  }
}
