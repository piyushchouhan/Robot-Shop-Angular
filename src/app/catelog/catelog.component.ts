import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';
import { retry } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bot-catelog',
  templateUrl: './catelog.component.html',
  styleUrls: ['./catelog.component.css']
})
export class CatelogComponent {

    products : any;
    filter : string = '';

    constructor(private cartSvc : CartService,
      private productSVC :ProductService,
      private router : Router,
      private route : ActivatedRoute
    ) {}

    ngOnInit(){
      this.productSVC.getProducts()
      .subscribe((prods) => {
        this.products = prods;
      });
      
      this.route.params.subscribe((params) => {
        this.filter = params['filter'] ?? '';
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
      this.router.navigate(['/cart']);
    }
}

