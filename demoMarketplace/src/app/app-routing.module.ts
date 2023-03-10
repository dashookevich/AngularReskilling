import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'product-list',
  loadChildren: () =>
    import('./components/product-list/product-list.module').then(
      (m) => m.ProductListModule
    ),
},
  { path: 'cart',
  loadChildren: () =>
    import('./components/cart/cart.module').then(
      (m) => m.CartModule
    ),
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
