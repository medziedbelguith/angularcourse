import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

const routes: Routes = [
  {path:'',component:FrontLayoutComponent,
     children:[
      {path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
      {path:'about',loadChildren:()=>import('./views/front/about/about.module').then(m=>m.AboutModule)},
      {path:'contact',loadChildren:()=>import('./views/front/contact/contact.module').then(m=>m.ContactModule)}
     ]},
  {path:'admin',component:AdminLayoutComponent,
  children:[
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path:'addproduct',loadChildren:()=>import('./views/admin/addproduct/addproduct.module').then(m=>m.AddproductModule)},
  {path:'addstudent',loadChildren:()=>import('./views/admin/addproduct/addproduct.module').then(m=>m.AddproductModule)}
  ]
},
  {path:'user',component:UserLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
