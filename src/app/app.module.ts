import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule, NativeScriptCommonModule, NativeDialogModule } from '@nativescript/angular'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LaunchScreenComponent } from './launch-screen.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, NativeDialogModule, NativeScriptCommonModule, AppRoutingModule],
  declarations: [AppComponent, LaunchScreenComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
