import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { AdminstrativeRoutingModule } from './adminstrative-routing.module';
import { AdminstrativeComponent } from './adminstrative.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ProfileComponent } from './profile/profile.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AdminstrativeComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AdminstrativeRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule
     
  ]
})
export class AdminstrativeModule { }
