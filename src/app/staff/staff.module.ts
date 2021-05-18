import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './s-login/s-login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './s-profile/s-profile.component';
import { ProfileGuard } from './s-profile.guard';

@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
      { path: 'profile', component: ProfileComponent}//, canActivate: [ProfileGuard] }
    ])
  ]
})
export class StaffModule { }
