import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminstrativeComponent } from './adminstrative.component';

const routes: Routes = [{ path: '', component: AdminstrativeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminstrativeRoutingModule { }
