import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { FacebookGamesComponent } from './components/facebook-games/facebook-games.component';
import { TrendsComponent } from './components/trends/trends.component';
import { DetailPostComponent } from './components/detail-post/detail-post.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'facebook-games', component: FacebookGamesComponent },
  { path: 'trends', component: TrendsComponent },
  { path: 'posts/:uuid', component: DetailPostComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
