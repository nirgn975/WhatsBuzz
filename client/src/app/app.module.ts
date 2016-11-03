import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { BuzzActions } from './actions';
import { BuzzEffects } from './effects';
import reducer from './reducers';

import { WbComponent } from './wb.component';
import {
  HeaderComponent,
  FooterComponent,
  BuzzComponent,
  FacebookGamesComponent,
  TrendsComponent,
  PostComponent,
  DetailPostComponent,
  MainComponent,
  PrivacyPolicyComponent
} from './components';

import { BuzzService } from './services';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    WbComponent,
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
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(BuzzEffects),
  ],
  providers: [
    BuzzActions,
    BuzzService
  ],
  bootstrap: [WbComponent]
})
export class AppModule { }
