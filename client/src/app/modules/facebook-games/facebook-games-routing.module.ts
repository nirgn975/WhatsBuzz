import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FacebookGamesComponent } from './facebook-games.component';


const routes: Routes = [
  { path: '', component: FacebookGamesComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
