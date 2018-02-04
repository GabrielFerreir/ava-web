import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { SMNUIModule } from 'ng-smn-ui';

import { AppComponent } from './app.component';
import { UiTooltipDirective } from './core/uiTooltip/ui-tooltip.directive';
import {MainModule} from './views/main/main.module';
import {NotFoundModule} from './views/not-found/not-found.module';
import {AppRoutingModule} from './app-routing.module';
import {AuthModule} from './views/auth/auth.module';
import {SharedModule} from './shared.module';

@NgModule({
  declarations: [
    AppComponent,
    UiTooltipDirective
  ],
  imports: [
    SMNUIModule,
    SharedModule,
    MainModule,
    AuthModule,
    NotFoundModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
