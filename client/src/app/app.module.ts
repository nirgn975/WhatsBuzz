import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppStore } from './app-store';

import { WhatsBuzzComponent } from './wb.component';
import { HeaderComponent } from './components';
import { FooterComponent } from './components';

@NgModule({
  declarations: [
    WhatsBuzzComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [WhatsBuzzComponent]
})
export class AppModule { }
