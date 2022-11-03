import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CoreTypes, Image } from "@nativescript/core";

@Component({
  moduleId: module.id,
  selector: "ns-tab-icon",
  templateUrl: "./tab-icon.component.html",
})
export class TabIconComponent {
  @Input() image: string;
  @Input() activeImage: string;
  @Input("class") className: string;

  _active: boolean = false;

  @Input()
  set active(value: boolean) {
    this._active = value;

    this.update();
  }

  @Output() loaded = new EventEmitter();

  _inactiveImage: Image;
  _activeImage: Image;

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
    if (!(this._activeImage && this._inactiveImage)) {
      return;
    }

    this._activeImage
      ?.animate({
        opacity: this._active ? 1 : 0,
        scale: this._active ? this._scaleActive : this._scaleInactive,
        duration: 120,
        curve: CoreTypes.AnimationCurve.easeInOut,
      })
      .catch(() => {});
    this._inactiveImage
      ?.animate({
        opacity: this._active ? 0 : 1,
        scale: this._active ? this._scaleActive : this._scaleInactive,
        duration: 120,
        curve: CoreTypes.AnimationCurve.easeInOut,
      })
      .catch(() => {});
  }
}
