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
        if (global.isIOS) {
          Utils.ios.animateWithSpring({
            animations: () => {
              this.homeTabContainer.opacity = 0;
              this.homeTabContainer.translateX = -Screen.mainScreen.widthDIPs;
            },
            completion: () => {
              // reset to desired position for on the way back
              this.homeTabContainer.opacity = 0;
              this.homeTabContainer.translateX = -(
                Screen.mainScreen.widthDIPs / 3
              );
            },
          });
          resolve();
        } else {
          this.homeTabContainer
            .animate({
              opacity: 0,
              translate: { x: -Screen.mainScreen.widthDIPs, y: 0 },
              duration: 300,
              curve: CoreTypes.AnimationCurve.easeInOut,
            })
            .then(resolve)
            .catch(resolve);
        }
      }
    });
  }
}
