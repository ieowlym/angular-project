import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { IntroComponent } from './intro/intro.component';
import { DocsComponent } from './docs/docs.component';

const routes: Routes = [
  { path: '', component: IntroComponent},
  { path: 'features', component: FeaturesComponent},
  { path: 'docs', component: DocsComponent},
  { path: 'docs/setup', component: DocsComponent},
  { path: 'docs/what-is-angular', component: DocsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
