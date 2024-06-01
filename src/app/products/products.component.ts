import { Component, OnInit } from '@angular/core';
import { productsList } from '../products/products.mock';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = productsList;

  constructor() { }

  ngOnInit() {
  }

}
