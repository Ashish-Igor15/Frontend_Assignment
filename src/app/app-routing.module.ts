import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: 'home', component: BannerComponent },
  { path: 'about', component: BannerComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
