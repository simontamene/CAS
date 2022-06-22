import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminstrativeComponent } from './adminstrative.component';
import { ProfileComponent } from './profile/profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: AdminstrativeComponent ,
children:[
  {path:'profile',component:ProfileComponent},{path:'user',component:UserProfileComponent}
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminstrativeRoutingModule { }
