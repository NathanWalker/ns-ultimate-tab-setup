import { Component, inject, NgZone, NO_ERRORS_SCHEMA } from "@angular/core";
import { LottieView } from "@nativescript-community/ui-lottie";
import { RouterExtensions } from "@nativescript/angular";
import { Animation, ContentView, CoreTypes } from "@nativescript/core";

@Component({
  moduleId: module.id,
  selector: "ns-launch-screen",
  templateUrl: "./launch-screen.component.html",
  schemas: [NO_ERRORS_SCHEMA]
})
export class LaunchScreenComponent {
  router = inject(RouterExtensions);
  ngZone = inject(NgZone);
  private _lottieView: LottieView;

  goToHome() {
    this.ngZone.run(() => {
      this.router.navigate(
        [
          "/home",
          {
            outlets: { listTab: ["list"] },
          },
        ],
        {
          clearHistory: true,
          transition: {
            name: "fade",
          },
        }
      );
    });
  }

  loadedLottie(args) {
    this._lottieView = <LottieView>args.object;
    this._lottieView.completionBlock = (finished) => {
      if (finished) {
        const animate = new Animation([
          {
            target: this._lottieView,
            opacity: 0,
            scale: { x: 0.7, y: 0.7 },
            duration: 400,
            curve: CoreTypes.AnimationCurve.linear,
          },
        ]);
        animate
          .play()
          .then(() => {
            this.ngZone.run(() => {
              this._lottieView.opacity = 0;
              this._lottieView.scaleX = this._lottieView.scaleY = 1;
              this.goToHome();
            });
          })
          .catch(() => {});
      }
    };
    this.playLottie();
  }

  loadedColor(args) {
    const colorView = <ContentView>args.object;
    colorView.opacity = 0;
    colorView
      .animate({
        scale: { x: 4, y: 4 },
        opacity: 1,
        duration: 700,
        delay: 800,
        curve: CoreTypes.AnimationCurve.easeInOut,
      })
      .then(() => {
        colorView
          .animate({
            scale: { x: 8, y: 8 },
            opacity: 0,
            duration: 500,
            curve: CoreTypes.AnimationCurve.easeInOut,
          })
          .then(() => {})
          .catch(() => {});
      })
      .catch(() => {});
  }

  playLottie() {
    this._lottieView
      .animate({
        opacity: 1,
        duration: 300,
      })
      .then(() => {})
      .catch(() => {});
    this._lottieView.playAnimation();
  }
}
