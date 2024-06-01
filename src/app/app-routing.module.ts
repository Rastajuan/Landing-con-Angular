import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; // Importa RouterModule
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:productId/:category', component: ProductDetailComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) // Configura RouterModule con tus rutas
  ],
  exports: [RouterModule] // Exporta RouterModule para que esté disponible en toda la aplicación
})
export class AppRoutingModule { }
