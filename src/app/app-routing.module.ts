import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './users/admin/admin.component';
import { LoginComponent } from './users/login/login.component';

const routes: Routes = [{path:'',component:LoginComponent},{path:'',children:[{path:'admin',component:AdminComponent}]}, { path: 'adminstrative', loadChildren: () => import('./adminstrative/adminstrative.module').then(m => m.AdminstrativeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
