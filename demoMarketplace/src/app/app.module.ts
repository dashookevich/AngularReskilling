import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderModule } from './components/header/header.module';
import { ProductListModule } from './components/product-list/product-list.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    ProductListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
