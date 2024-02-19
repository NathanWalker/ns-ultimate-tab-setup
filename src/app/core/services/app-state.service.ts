import { Injectable } from "@angular/core";
import { BottomNavigation } from "@nativescript-community/ui-material-bottom-navigation";
import { CoreTypes, GridLayout, Screen, Utils } from "@nativescript/core";

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
            duration: 200,
            curve: CoreTypes.AnimationCurve.easeInOut,
          })
          .then(resolve)
          .catch(resolve);
      }
    });
  }
}
