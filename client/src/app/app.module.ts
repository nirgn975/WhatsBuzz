import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { TranslateModule } from 'ng2-translate/ng2-translate';
import { FacebookService } from 'ng2-facebook-sdk/dist';
import { AdsenseModule } from 'ng2-adsense';

import reducer from './reducers';
import { WbComponent } from './wb.component';
import { AppRoutingModule } from './app-routing.module';

import {
  BuzzActions,
  FacebookGamesActions,
  TrendsActions,
  PagesActions,
  DetailPostActions,
  RecommendationsActions,
} from './actions';

import {
  BuzzEffects,
  FacebookGamesEffects,
  TrendsEffects,
  DetailPostEffects,
  RecommandationEffects,
} from './effects';

import {
  HeaderComponent,
  FooterComponent,
  BuzzComponent,
  FacebookGamesComponent,
  TrendsComponent,
  PostComponent,
  DetailPostComponent,
  MainComponent,
  PrivacyPolicyComponent,
  RecommendationsComponent,
  NotFoundComponent,
} from './components';

import { SafeHtmlPipe } from './pipes';

import {
  BuzzService,
  PostsService,
  DetailPostService,
  RecommandationService,
} from './services';

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
    RecommendationsComponent,
    NotFoundComponent,
    SafeHtmlPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AdsenseModule,
    TranslateModule.forRoot(),
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(BuzzEffects),
    EffectsModule.run(FacebookGamesEffects),
    EffectsModule.run(TrendsEffects),
    EffectsModule.run(DetailPostEffects),
    EffectsModule.run(RecommandationEffects),
  ],
  providers: [
    FacebookService,
    FacebookGamesActions,
    TrendsActions,
    BuzzService,
    BuzzActions,
    PostsService,
    PagesActions,
    DetailPostService,
    DetailPostActions,
    RecommandationService,
    RecommendationsActions,
  ],
  bootstrap: [WbComponent]
})
export class AppModule { }
