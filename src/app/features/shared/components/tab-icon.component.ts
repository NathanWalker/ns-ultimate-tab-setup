import { Component, computed, effect, input, NO_ERRORS_SCHEMA, output } from "@angular/core";
import { NativeScriptCommonModule, registerElement } from "@nativescript/angular";
import { CoreTypes, GridLayout, Image, Label } from "@nativescript/core";

registerElement("ns-tab-icon", () => GridLayout);

@Component({
  moduleId: module.id,
  selector: "ns-tab-icon",
  templateUrl: "./tab-icon.component.html",
  host: {
    rows: "auto,auto",
    '[col]': "col()",
    class: "mt-1 debug:bg-blue-50/50",
    "(tap)": "select.emit()",
  },
  imports: [NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class TabIconComponent {
  col = input<number>(0);
  image = input<string>();
  activeImage = input<string>();
  sfSymbol = input<string>();
  text = input<string>();
  active = input(false);
  loaded = output();
  select = output();
  activeTint = computed(() => {
    return this.active() ? '#007ce5' : '#323232';
  })
  isIOS = __APPLE__;
  _inactiveImage: Image;
  _activeImage: Image;
  _label: Label;

  private _updater = effect(() => {
    const _active = this.active();
    this.update();
  });

  loadedInactiveImage(args) {
    this._inactiveImage = args.object;
    this._inactiveImage.opacity = 0;

    this.update();
  }

  loadedActiveImage(args) {
    this.loaded.emit(args);

    this._activeImage = args.object;
    this._activeImage.opacity = 0;

    this.update();
  }

  _scaleInactive = { x: 0.8, y: 0.8 };
  _scaleActive = { x: 1, y: 1 };

  update() {
    if (this.sfSymbol() && this.isIOS) {
      return;
    }
    if (!(this._activeImage && this._inactiveImage)) {
      return;
    }

    this._activeImage
      ?.animate({
        opacity: this.active() ? 1 : 0,
        scale: this.active() ? this._scaleActive : this._scaleInactive,
        duration: 120,
        curve: CoreTypes.AnimationCurve.easeInOut,
      })
      .catch(() => {});
    this._inactiveImage
      ?.animate({
        opacity: this.active() ? 0 : 1,
        scale: this.active() ? this._scaleActive : this._scaleInactive,
        duration: 120,
        curve: CoreTypes.AnimationCurve.easeInOut,
      })
      .catch(() => {});
  }
}
