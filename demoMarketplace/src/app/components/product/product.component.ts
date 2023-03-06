import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

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
