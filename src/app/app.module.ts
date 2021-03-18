import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BoldItPipe } from "./bold-it.pipe";
//import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { IntroComponent } from './intro/intro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { FeaturesComponent } from './features/features.component';
import { DocsComponent } from './docs/docs.component';
import { HeaderComponent } from './header/header.component';
import { DocsLeftComponent } from './docs-left/docs-left.component';
import { DocsRightComponent } from './docs-right/docs-right.component';
import { DocsIntroComponent } from './docs-intro/docs-intro.component';
import { DocsSetupComponent } from './docs-setup/docs-setup.component';
import { DocsWiaComponent } from './docs-wia/docs-wia.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IntroComponent,
    FooterComponent,
    FeaturesComponent,
    DocsComponent,
    HeaderComponent,
    DocsLeftComponent,
    DocsRightComponent,
    DocsIntroComponent,
    DocsSetupComponent,
    DocsWiaComponent,
    BoldItPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
