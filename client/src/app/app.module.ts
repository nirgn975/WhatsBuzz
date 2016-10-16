import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic" ;
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { createStore, Store, compose, StoreEnhancer } from 'redux';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppStore } from './app-store';
import { AppState, default as reducer } from './reducers';

import { WhatsBuzzComponent } from './wb.component';
import { AppService } from './shared/app.service';
import { HeaderComponent } from './components';
import { FooterComponent } from './components';

let devtools: StoreEnhancer<AppState> =
  window['devToolsExtension'] ?
  window['devToolsExtension']() : f => f;

let store: Store<AppState> = createStore<AppState>(
  reducer,
  compose(devtools)
);

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
  providers: [
    AppService,
    { provide: AppStore , useValue: store }
    // provide(AppStore, { useValue: store })
  ],
  bootstrap: [WhatsBuzzComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
