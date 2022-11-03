import { Color, isIOS } from "@nativescript/core";

export function setWindowBackgroundColor(value: string) {
  if (isIOS) {
    const nativeApp = UIApplication.sharedApplication;
    // console.log('nativeApp.keyWindow:', nativeApp.keyWindow);
    const firstWindow =
      nativeApp.keyWindow ||
      (nativeApp.windows.count > 0 && nativeApp.windows[0]);
    // console.log('nativeApp.windows.count:', nativeApp.windows.count);
    // console.log('firstWindow', firstWindow);
    if (firstWindow && firstWindow.rootViewController) {
      firstWindow.rootViewController.view.backgroundColor = new Color(
        value
      ).ios;
      // console.log('firstWindow.rootViewController.view.backgroundColor:', firstWindow.rootViewController.view.backgroundColor);
      return;
    }
    if (firstWindow) {
      firstWindow.backgroundColor = new Color(value).ios;
      // console.log('firstWindow.backgroundColor:', firstWindow.backgroundColor)
    }
  }
}
