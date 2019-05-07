import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandyListComponent } from './candy-list/candy-list.component';
import { CandyFormComponent } from './candy-form/candy-form.component';

const routes: Routes = [
  {path: 'list', component: CandyListComponent},
  {path: 'add', component: CandyFormComponent},
  {path: '', pathMatch: 'full', redirectTo: 'list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
