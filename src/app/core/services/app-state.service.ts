import { Injectable } from "@angular/core";
import { BottomNavigation } from "@nativescript-community/ui-material-bottom-navigation";
import { CoreTypes, GridLayout, Screen } from "@nativescript/core";

@Injectable({
  providedIn: "root",
})
export class AppStateService {
  tabView: BottomNavigation;
  homeTabContainer: GridLayout;
  loadedCollections = false;

  navAwayFromTabs() {
    // allow tab view to fade out when navigating away from them
    return new Promise<void>((resolve) => {
      if (this.homeTabContainer) {
        this.homeTabContainer
          .animate({
            opacity: 0,
            translate: { x: -Screen.mainScreen.widthDIPs, y: 0 },
            duration: 400,
            curve: CoreTypes.AnimationCurve.easeInOut,
          })
          .then(resolve)
          .catch(resolve);
      }
    });
  }
}
