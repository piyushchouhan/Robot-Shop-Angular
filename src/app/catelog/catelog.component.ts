import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart.service';
import { ProductService } from './product.service';
import { retry } from 'rxjs';

@Component({
  selector: 'bot-catelog',
  templateUrl: './catelog.component.html',
  styleUrls: ['./catelog.component.css']
})
export class CatelogComponent {

    products : any;
    filter : string = '';

    constructor(private cartSvc : CartService,
      private productSVC :ProductService
    ) {}

    ngOnInit(){
      this.productSVC.getProducts()
      .subscribe((prods) => {
        this.products = prods;
      });
    }

    // getDiscountedClasses(product : IProduct){
    //   if (product.discount > 0) return ['strikethrough'];
    //   else return [];
    // }

    
    getFilteredProducts(){
        return this.filter === ''
        ? this.products : this.products.filter((product : any) => product.category === this.filter);
    }

    addToCart(product : IProduct) {
      this.cartSvc.add(product);
    }
}

