import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components';
import { FacebookGamesComponent } from './components';
import { TrendsComponent } from './components';
import { DetailPostComponent } from './components';
import { PrivacyPolicyComponent } from './components';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'facebook-games', component: FacebookGamesComponent },
  { path: 'trends', component: TrendsComponent },
  { path: 'home', component: MainComponent },
  { path: 'posts/:uuid', component: DetailPostComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
