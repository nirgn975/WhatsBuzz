import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent }   from './components';


const routes: Routes = [
  { path: '', redirectTo: 'posts/1', pathMatch: 'full' },
  // { path: '', component: HeaderComponent },
  { path: 'posts/:some', component: HeaderComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
