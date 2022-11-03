import { platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular';
import { CoreTypes, TouchManager, View } from '@nativescript/core';
import { AppModule } from './app/app.module';
import { setWindowBackgroundColor } from './app/utils';

// default Touch animations for entire app
const originalTransform = Symbol('originalTransform');
TouchManager.enableGlobalTapAnimations = true;
TouchManager.animations = {
  down: (view: View) => {
    if (global.isIOS) {
      UIView.animateWithDurationDelayUsingSpringWithDampingInitialSpringVelocityOptionsAnimationsCompletion(
        0.3,
        0,
        0.5,
        3,
        UIViewAnimationOptions.CurveEaseInOut,
        () => {
          if (view?.ios) {
            view[originalTransform] = view[originalTransform] ?? view.ios.transform;

            view.ios.transform = CGAffineTransformConcat(view[originalTransform], CGAffineTransformMakeScale(0.97, 0.97));
          }
        },
        () => {}
      );
    } else {
      view
        ?.animate({
          scale: { x: 0.97, y: 0.97 },
          duration: 120,
          curve: CoreTypes.AnimationCurve.easeInOut,
        })
        .then(() => {})
        .catch(() => {});
    }
  },
  up: (view: View) => {
    if (global.isIOS) {
      UIView.animateWithDurationDelayUsingSpringWithDampingInitialSpringVelocityOptionsAnimationsCompletion(
        0.3,
        0,
        0.5,
        3,
        UIViewAnimationOptions.CurveEaseInOut,
        () => {
          if (view?.ios) {
            view.ios.transform = view[originalTransform] ?? CGAffineTransformMakeScale(1, 1);
          }
        },
        () => {}
      );
    } else {
      view
        ?.animate({
          scale: { x: 1, y: 1 },
          duration: 120,
          curve: CoreTypes.AnimationCurve.easeInOut,
        })
        .then(() => {})
        .catch(() => {});
    }
  },
};

runNativeScriptAngularApp({
  appModuleBootstrap: () => {
    setWindowBackgroundColor('#3e1839');
    return platformNativeScript().bootstrapModule(AppModule)
  }
});

