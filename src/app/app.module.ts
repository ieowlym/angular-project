import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlgorithmComponent } from './lc-algorithm/lc-algorithm.component';
import { FeedbackComponent } from './lc-feedback/lc-feedback.component';
import { HeaderComponent } from './lc-header/lc-header.component';
import { IndexComponent } from './lc-index/lc-index.component';
import { StaffModule } from './staff/staff.module';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    IndexComponent,
    AlgorithmComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StaffModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
