import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic" ;
// import { provide } from '@angular/core';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { createStore, Store, StoreEnhancer } from 'redux';

import { AppComponent } from './app.component';
import { AppService } from './shared/app.service';
import { counterReducer } from './counter-reducer';
import { CounterComponent } from './counter-component/counter-component.component';
import { AppStore } from './app-store';
import { AppState } from './app-state';

let devtools: StoreEnhancer<AppState> =
  window['devToolsExtension'] ?
  window['devToolsExtension']() : f => f;

let store: Store<AppState> = createStore<AppState>(
  counterReducer,
  devtools
);

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
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
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
