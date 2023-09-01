import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowUniversComponent } from './show-univers/show-univers.component';
import { TheElderScrollsComponent } from './the-elder-scrolls/the-elder-scrolls.component';
import { FalloutComponent } from './fallout/fallout.component';
import { StarfieldComponent } from './starfield/starfield.component';
import { Routes, RouterModule } from '@angular/router';

const routesSaga: Routes = [
  { path: '', redirectTo: '/show-univers', pathMatch: 'full' },
  { path: 'show-univers', component: ShowUniversComponent },
  { path: 'the-elder-scrolls/:id', component: TheElderScrollsComponent },
  { path: 'fallout/:id', component: FalloutComponent },
  { path: 'starfield/:id', component: StarfieldComponent },
];
@NgModule({
  declarations: [
    ShowUniversComponent,
    TheElderScrollsComponent,
    FalloutComponent,
    StarfieldComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routesSaga)
  ]
})
export class BethesdaModule { }
