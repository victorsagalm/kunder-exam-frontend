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
 products: Product;
 //products$;
 type;
 show;

 data$ = this.productsService.getProducts().subscribe((data:any) => {
  this.products = data.product;
  this.type = this.products.type;
  this.show = this.products.show;
  console.log(this.products);
  return this.products;
  
});


  constructor(
    protected productsService: ProductsService
  ) { }

  ngOnInit() {
    console.log(this.products)
  }

  bannerVisible() {
    if(this.show == true){
        return true;
    }
    else return false;
  }

  bannerType() {
    if(this.type == "plan"){
      return true;
    }
    else return false;
  }
}
