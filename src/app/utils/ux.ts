import { EventData, View } from "@nativescript/core";

export function uxLabelFadeIn(args: EventData, delay = 100) {
    const label = <View>args.object;
    label.opacity = 0;
    label.translateX = label.translateX + 25;
    // ensure x position is laid out before animation on next tick
    setTimeout(() => {
      label
        .animate({
          opacity: 1,
          duration: 200,
          translate: { x: 0, y: 0},
        })
        .then(() => {})
        .catch(() => {});
    }, delay)
}