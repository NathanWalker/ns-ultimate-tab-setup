import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NativeScriptCommonModule, NativeScriptFormsModule, NativeScriptRouterModule } from '@nativescript/angular';
// import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { NativeScriptMaterialBottomNavigationModule } from '@nativescript-community/ui-material-bottom-navigation/angular';
import { CollectionViewModule } from '@nativescript-community/ui-collectionview/angular';
import { ImageCacheItModule } from '@triniwiz/nativescript-image-cache-it/angular';
import { UI_COMPONENTS } from './components';

const MODULES = [NativeScriptCommonModule, NativeScriptFormsModule, ReactiveFormsModule, NativeScriptRouterModule, NativeScriptMaterialBottomNavigationModule, CollectionViewModule, ImageCacheItModule];

@NgModule({
  imports: [...MODULES],
  declarations: [...UI_COMPONENTS],
  exports: [...MODULES, ...UI_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule {}
