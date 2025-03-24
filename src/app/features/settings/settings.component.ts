import { Component, inject, NO_ERRORS_SCHEMA } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { EventData } from "@nativescript/core";
import { uxLabelFadeIn } from "../../utils";
import { Haptics } from "@nativescript/haptics";
import { SHARED_MODULES } from "../shared/shared.module";

@Component({
  moduleId: module.id,
  selector: "ns-settings",
  templateUrl: "./settings.component.html",
  imports: [...SHARED_MODULES],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SettingsComponent {
  router = inject(RouterExtensions);
  activeRoute = inject(ActivatedRoute);

  viewDetail(name: string) {
    Haptics.selection();
    this.router.navigate(["../detail", name], {
      relativeTo: this.activeRoute,
      transition: {
        name: "slideLeft",
      },
    });
  }

  loadedTitle(args: EventData) {
    uxLabelFadeIn(args);
  }
}
