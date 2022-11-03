import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { EventData } from "@nativescript/core";
import { take } from "rxjs";
import { uxLabelFadeIn } from "../../../utils";

@Component({
  moduleId: module.id,
  selector: "ns-settings-detail",
  templateUrl: "./settings-detail.component.html",
})
export class SettingsDetailComponent {
  name: string;
  activeRoute = inject(ActivatedRoute);
  router = inject(RouterExtensions);

  ngOnInit() {
    this.activeRoute.params.pipe(take(1)).subscribe((params) => {
      this.name = params.name;
    });
  }

  back() {
    this.router.back();
  }

  loadedTitle(args: EventData) {
    uxLabelFadeIn(args);
  }
}
