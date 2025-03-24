import { Component, inject, NO_ERRORS_SCHEMA } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { EventData } from "@nativescript/core";
import { take } from "rxjs";
import { uxLabelFadeIn } from "../../utils";
import { SHARED_MODULES } from "../shared/shared.module";

@Component({
  moduleId: module.id,
  selector: "ns-settings-detail",
  templateUrl: "./settings-detail.component.html",
  imports: [...SHARED_MODULES],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SettingsDetailComponent {
  name: string;
  activeRoute = inject(ActivatedRoute);
  router = inject(RouterExtensions);
  isAndroid = __ANDROID__;

  ngOnInit() {
    this.activeRoute.params.pipe(take(1)).subscribe((params) => {
      this.name = params.name;
    });
  }

  back() {
    this.router.back({
      outlets: ['settingsTab']
    });
  }

  loadedTitle(args: EventData) {
    uxLabelFadeIn(args, 200);
  }
}
