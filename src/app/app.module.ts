import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { SMNUIModule } from 'ng-smn-ui';

import { AppComponent } from './app.component';
import { UiTooltipDirective } from './core/uiTooltip/ui-tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    UiTooltipDirective
  ],
  imports: [
    BrowserModule,
    SMNUIModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
