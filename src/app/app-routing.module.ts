import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [
  { path: '', component: IntroComponent},
  { path: 'features', component: FeaturesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
