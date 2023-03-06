import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'market',
  loadChildren: () =>
    import('./components/product-list/product-lst.module').then(
      (m) => m.ProductLstModule
    ),
},
  { path: 'product-list',
    loadChildren: () =>
      import('./components/product-list/product-lst.module').then(
        (m) => m.ProductLstModule
      ),
  },
  { path: 'header',
  loadChildren: () =>
    import('./components/header/header.module').then(
      (m) => m.HeaderModule
    ),
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
