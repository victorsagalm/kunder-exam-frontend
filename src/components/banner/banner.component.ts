import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

 //products: any[] = [];
 product;
 image;
 //products;
 products$;

 data = this.productsService.getProducts().subscribe(
  product => {
    this.data = product;
    console.log(this.data);
  }
);

  constructor(
    protected productsService: ProductsService
  ) { }

  ngOnInit() {
    /* this.product = this.productsService.getProducts()
    .subscribe(
      (data) => {
      this.products = data['product'];
      console.log(this.products);
      this.image = this.products.productImg;
        //console.log(this.products);
      },
      (error) => {
        console.log(error);
      }

    ); */

    
  }

}
