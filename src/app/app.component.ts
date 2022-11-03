import { Component } from '@angular/core'
import { registerElement } from '@nativescript/angular';
import { LottieView } from '@nativescript-community/ui-lottie';
registerElement('LottieView', () => LottieView);
import { CardView } from "./features/shared/native-views/card-view";
registerElement("CardView", () => CardView);

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent {}
