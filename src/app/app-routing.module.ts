import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {
  path:'',
  component:HomeComponent
 },
 {
  path:'about',
  component:AboutComponent
 },
 {
  path:'service',
  component:ServiceComponent
 },
 {
  path:'product',
  component:ProductComponent
 },
 {
  path:'contact',
  component:ContactComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
