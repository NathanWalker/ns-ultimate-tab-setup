import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NativeDialogModule, NativeScriptCommonModule, NativeScriptFormsModule, NativeScriptRouterModule } from '@nativescript/angular';
// import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { NativeScriptMaterialBottomNavigationModule } from '@nativescript-community/ui-material-bottom-navigation/angular';
import { CollectionViewModule } from '@nativescript-community/ui-collectionview/angular';
import { ImageCacheItModule } from '@triniwiz/nativescript-image-cache-it/angular';

export const SHARED_MODULES = [NativeScriptCommonModule, NativeScriptFormsModule, ReactiveFormsModule, NativeDialogModule, NativeScriptMaterialBottomNavigationModule, CollectionViewModule, ImageCacheItModule];

@NgModule({
  imports: [...SHARED_MODULES],
  exports: [...SHARED_MODULES],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule {}
