import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { WhatsBuzzComponent } from './wb.component';
import { HeaderComponent } from './components';
import { FooterComponent } from './components';
import { BuzzComponent } from './components';

import { BuzzService } from './services';

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
    HttpModule
  ],
  providers: [
    BuzzService
  ],
  bootstrap: [WhatsBuzzComponent]
})
export class AppModule { }
