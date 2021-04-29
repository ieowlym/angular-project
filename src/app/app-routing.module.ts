import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlgorithmComponent } from './lc-algorithm/lc-algorithm.component';
import { IndexComponent } from './lc-index/lc-index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'algorithm', component: AlgorithmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
