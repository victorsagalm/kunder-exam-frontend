import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

 //products: any[] = [];
 //product;
// image;
 products;
 //products$;
 type;

/*  data$ = this.productsService.getProducts().subscribe(
  (products: any) => {
    console.log(products);
    //this.type = this.data.product.type; 
    console.log();
  }
); */

 data$ = this.productsService.getProducts().subscribe((data:any) => {
  this.products = data.product;
  this.type = this.products.type;
  console.log(this.products);
  return this.products;
  
});


  constructor(
    protected productsService: ProductsService
  ) { }

  ngOnInit() {
    /* this.data$.subscribe((data:Product) => {
      this.products = data.product;
      console.log(this.products);
      return this.products;
      
    }); */

    console.log(this.products)
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

  bannerType() {
    if(this.type == "plan"){
      return true;
    }
    else return false;
  }
}
