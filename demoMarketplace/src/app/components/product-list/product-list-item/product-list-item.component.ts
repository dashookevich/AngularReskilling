import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent {

  @Output() newItemEvent = new EventEmitter<string>();
  
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  };

  product: Product = {
    id: 1,
    title: 'Lego',
    price: 5
  };
}
