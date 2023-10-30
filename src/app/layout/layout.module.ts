import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NameComponent } from './name/name.component';
import { TimeComponent } from './time/time.component';
import { AvaliableComponent } from './avaliable/avaliable.component';
import { ControlComponent } from './control/control.component';
import { StartendComponent } from './startend/startend.component';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

// for translate
import {TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    LayoutComponent,
    NameComponent,
    TimeComponent,
    AvaliableComponent,
    ControlComponent,
    StartendComponent
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TimeComponent),
      multi: true,
    }
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    // for translate
     TranslateModule.forRoot({
      defaultLanguage: 'ar',
      loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
      }
      })
  ],
  exports: [LayoutComponent],
})

export class LayoutModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
