import { Component, inject } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import {
  Color,
  CoreTypes,
  GridLayout,
  Image,
  Label,
  ObservableArray,
  Page,
  Screen,
} from "@nativescript/core";
import { BottomNavigation } from "@nativescript-community/ui-material-bottom-navigation";
import { ActivatedRoute } from "@angular/router";
import { AppStateService } from "../../../core/services/app-state.service";

@Component({
  moduleId: module.id,
  selector: "ns-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  router = inject(RouterExtensions);
  activeRoute = inject(ActivatedRoute);
  appStateService = inject(AppStateService);
  page = inject(Page);
  displayItems = new ObservableArray([]);
  container: GridLayout;
  private _hasInitTab: {
    list?: boolean;
    favorites?: boolean;
    settings?: boolean;
  } = {};

  ngOnInit() {
    this.page.on("navigatedTo", () => {
      if (this.container) {
        this.container
          .animate({
            opacity: 1,
            translate: { x: 0, y: 0 },
            duration: 400,
            curve: CoreTypes.AnimationCurve.easeInOut,
          })
          .then(() => {})
          .catch(() => {});
      }
    });
  }

  loadedHome(args) {
    this.container = <GridLayout>args.object;
    this.appStateService.homeTabContainer = this.container;
  }

  changeTab(index) {
    this.appStateService.tabView.selectedIndex = index;
  }

  loadedTabs(args) {
    this.appStateService.tabView = args.object;
  }

  selectedIndexChange(args) {
    const tabView = <BottomNavigation>args.object;
    if (tabView) {
      // console.log('tabView.selectedIndex:', tabView.selectedIndex);
      // if (index !== this.appFlag.selectedTabIndex) {
      this._viewTab(tabView.selectedIndex);
      // }
    }
  }

  selectedLogo: Image;
  loadedSelectedLogo(args) {
    this.selectedLogo = <Image>args.object;
    // console.log(`HomeComponent loadedLogo`)
    // if (global.isIOS && this.selectedLogo?.ios) {
    //   // Option 1: pass around references
    //   // setLogoTo(image);
    //   // Option 2: set tag to allow transition to use viewcontroller's to find by tag
    //   this.selectedLogo.ios.tag = getLogoId();
    // }
  }

  templateSelector = (item: any, index: number, items: any) => {
    if (item) {
      return "tile";
    }
  };

  private _viewTab(index: number) {
    let route;
    switch (index) {
      case 0:
        if (!this._hasInitTab.list) {
          this._hasInitTab.list = true;
          route = { outlets: { listTab: ["list"] } };
        }
        break;
      case 1:
        if (!this._hasInitTab.favorites) {
          this._hasInitTab.favorites = true;
          route = { outlets: { favoritesTab: ["favorites"] } };
        }
        break;
      case 2:
        if (!this._hasInitTab.settings) {
          this._hasInitTab.settings = true;
          route = { outlets: { settingsTab: ["settings"] } };
        }
        break;
    }

    // this._analytics.track(Tracking.Actions.NAV_TAB_SWITCH, {
    //   category: Tracking.Categories.NAVIGATION,
    //   label: trackName,
    // });
    // this._analytics.setScreenName(trackName);

    // this._log.debug('tab index changed:', index);
    if (route) {
      this.router.navigate(["/home", route], {
        animated: false,
        // relativeTo: this.activeRoute,
      });
    }
    // this._ngZone.run(() => {
    //   if (route) {
    //     // && trackName !== 'discover') {
    //     // needs to activate route the first time
    //     this._store.dispatch(
    //       new RouterActions.Go({
    //         path: [route],
    //         extras: {
    //           animated: false,
    //           relativeTo: this.activeRoute,
    //         },
    //       })
    //     );
    //   }
    // });
  }
}
