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
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import { AddUComponent } from './add-u/add-u.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core'
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AdminstrativeComponent,
    ProfileComponent,
    AddUComponent
  ],
  imports: [
    CommonModule,
    AdminstrativeRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule,
    MatListModule,
    FormsModule
    //BrowserModule
  ]
})
export class AdminstrativeModule { }
