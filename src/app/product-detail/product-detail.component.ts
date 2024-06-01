import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, productsList } from '../products/products.mock';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  producto?: Product;
  products: Product[] = productsList;
  loading: boolean = true;
  color: string = '';

  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    setTimeout(() => {
      this._route.params.subscribe((params) => {
        this.producto = this.products.find(
          (product) => product.id == params['productId']
        );
        this.loading = false;
        this.color = this.producto?.price as number > 10 ? 'red' : 'green';
        console.log(this.producto);
      });
    }, 1000);
  }
}
