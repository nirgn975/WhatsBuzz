import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { FacebookService } from 'ng2-facebook-sdk/dist';
import { AdsenseModule } from 'ng2-adsense';

import { reducer } from './reducers';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BuzzEffects } from './effects/buzz';
import { FacebookGamesEffects } from './effects/facebookGames';
import { TrendsEffects } from './effects/trends';
import { DetailPostEffects } from './effects/detail-post';
import { RecommandationEffects } from './effects/recommandations';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BuzzComponent } from './components/buzz/buzz.component';
import { FacebookGamesComponent } from './components/facebook-games/facebook-games.component';
import { TrendsComponent } from './components/trends/trends.component';
import { PostComponent } from './components/post/post.component';
import { DetailPostComponent } from './components/detail-post/detail-post.component';
import { MainComponent } from './components/main/main.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { BuzzService } from './services/buzz.service';
import { PostsService } from './services/posts.service';
import { DetailPostService } from './services/detail-post.service';
import { RecommandationService } from './services/recommandation.service';
import { SeoService } from './services/seo.service';

import { SafeHtmlPipe } from './pipes/safe-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
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
    BuzzService,
    PostsService,
    DetailPostService,
    RecommandationService,
    SeoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
