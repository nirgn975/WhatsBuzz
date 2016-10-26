import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TranslateModule } from "ng2-translate/ng2-translate";
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { BuzzActions } from './actions';
import { BuzzService } from './services';
import { BuzzEffects } from './effects';
import reducer from './reducers';

import { WhatsBuzzComponent } from './wb.component';
import { HeaderComponent } from './components';
import { FooterComponent } from './components';
import { BuzzComponent } from './components';
import { FacebookGamesComponent } from './components';
import { TrendsComponent } from './components';
import { PostComponent } from './components';
import { DetailPostComponent } from './components';
import { MainComponent } from './components/';
import { PrivacyPolicyComponent } from './components';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    WhatsBuzzComponent,
    HeaderComponent,
    FooterComponent,
    BuzzComponent,
    FacebookGamesComponent,
    TrendsComponent,
    PostComponent,
    DetailPostComponent,
    MainComponent,
    PrivacyPolicyComponent,
    BuzzComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TranslateModule.forRoot(),
    StoreModule.provideStore(reducer),
    EffectsModule.run(BuzzEffects)
  ],
  providers: [
    BuzzActions,
    BuzzService
  ],
  bootstrap: [WhatsBuzzComponent]
})
export class AppModule { }
