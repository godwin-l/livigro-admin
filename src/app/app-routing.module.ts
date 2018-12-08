import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './user/login/login.component';
import { MybookingsComponent } from './user/mybookings/mybookings.component';
import { ViewpackageComponent } from './package/viewpackage/viewpackage.component';
import { PackageComponent } from './package/listpackage/listpackage.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'viewpackage', component: ViewpackageComponent },
  { path: 'package', component: PackageComponent },
  { path: 'bookings', component: MybookingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
