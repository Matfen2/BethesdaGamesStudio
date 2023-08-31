import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShowUniversComponent } from './bethesda/show-univers/show-univers.component';

const routes: Routes = [
  {path: '', redirectTo: '/show-univers', pathMatch: 'full'},
  {path: 'show-univers', component: ShowUniversComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
