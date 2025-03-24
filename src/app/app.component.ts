import { Component, NO_ERRORS_SCHEMA } from '@angular/core'
import { PageRouterOutlet, registerElement } from '@nativescript/angular';
import { LottieView } from '@nativescript-community/ui-lottie';
registerElement('LottieView', () => LottieView);
import { CardView } from "./features/shared/native-views/card-view";
registerElement("CardView", () => CardView);

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
  imports: [PageRouterOutlet],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppComponent {}
