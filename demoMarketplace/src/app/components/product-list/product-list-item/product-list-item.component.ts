import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent {

  @Output() newItemEvent = new EventEmitter<Product>();
  @Input() product: Product;
  
  addNewItem() {
    this.newItemEvent.emit(this.product);
  };
}
