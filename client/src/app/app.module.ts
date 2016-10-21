import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TranslateModule } from "ng2-translate/ng2-translate";

import { WhatsBuzzComponent } from './wb.component';
import { HeaderComponent } from './components';
import { FooterComponent } from './components';
import { BuzzComponent } from './components';

import { BuzzService } from './services';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    WhatsBuzzComponent,
    HeaderComponent,
    FooterComponent,
    BuzzComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TranslateModule.forRoot()
  ],
  providers: [
    BuzzService
  ],
  bootstrap: [WhatsBuzzComponent]
})
export class AppModule { }
