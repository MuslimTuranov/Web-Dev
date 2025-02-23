import { Routes } from '@angular/router';
import { ProductListComponent } from '../app/products/product-list/product-list.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent }, 
  { path: 'category/:categoryName', component: ProductListComponent }, 
];
