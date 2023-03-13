import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    products: Product[];

    constructor(
      private productService: ProductService,
    ) { }

    getProductList(): void {
      this.productService
        .getProducts()
        .subscribe((data) => (this.products = data));
    }  

  addItem(product: Product) {
    ///this.items.push(newItem);
    console.log(product);
  }
  ngOnInit(): void {
    this.getProductList();
  }
}
