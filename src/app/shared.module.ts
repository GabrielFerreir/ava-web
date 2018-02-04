import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import { SMNUIModule, UiToolbarService } from 'ng-smn-ui';

@NgModule({
  exports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SMNUIModule,
    RouterModule
  ],
  providers: [
    UiToolbarService,
  ]
})
export class SharedModule { }
