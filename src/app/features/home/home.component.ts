import { Component, inject, NO_ERRORS_SCHEMA } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  PageRouterOutlet,
  RouterExtensions,
  TabViewDirective,
} from "@nativescript/angular";
import {
  CoreTypes,
  GridLayout,
  Image,
  ObservableArray,
  Page,
} from "@nativescript/core";
import { BottomNavigation } from "@nativescript-community/ui-material-bottom-navigation";
import { Haptics } from "@nativescript/haptics";
import { AppStateService } from "../../core/services/app-state.service";
import { SHARED_MODULES } from "../shared/shared.module";

@Component({
  moduleId: module.id,
  selector: "ns-home",
  templateUrl: "./home.component.html",
  imports: [...SHARED_MODULES, PageRouterOutlet, TabViewDirective],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeComponent {
  router = inject(RouterExtensions);
  activeRoute = inject(ActivatedRoute);
  appStateService = inject(AppStateService);
  page = inject(Page);
  displayItems = new ObservableArray([]);
  container: GridLayout;
  isIOS = __APPLE__;

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
    if (
      this.appStateService.tabView.selectedIndex === index &&
      (this.router.canGoBack() || this.router.canGoBackToPreviousPage())
    ) {
      // tapping on existing tab
      if (this.router.canGoBack()) {
        let options;
        if (index === 2) {
          // settings allow for inner outlet back nav
          options = {
            outlets: ["settingsTab"],
          };
        }
        this.router.back(options);
      } else if (this.router.canGoBackToPreviousPage()) {
        this.router.backToPreviousPage();
      }
      return;
    }
    Haptics.selection();
    this.appStateService.tabView.selectedIndex = index;
  }

  loadedTabs(args) {
    this.appStateService.tabView = args.object;
    if (__ANDROID__) {
      const tabView = this.appStateService.tabView;
      if (!tabView || !tabView.items) return;
      tabView.items.forEach((item) => {
        (item as any)["iconFontFamily"] = "ns-playground-font";
      });
    }
  }

  selectedIndexChange(args) {
    const tabView = <BottomNavigation>args.object;
    if (tabView) {
      this._viewTab(tabView.selectedIndex);
    }
  }

  selectedLogo: Image;
  loadedSelectedLogo(args) {
    this.selectedLogo = <Image>args.object;
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

    if (route) {
      this.router.navigate(["/home", route], {
        animated: false,
      });
    }
  }
}
