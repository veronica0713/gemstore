import { Component, OnInit, Input } from '@angular/core';

import { CartModel } from '../cart-model';
import { CartItemModel } from '../cart-item-model';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    navCart: CartModel;
  constructor(private cartService: CartService) { };
    
  ngOnInit() {
      this.navCart = this.cartService.cart;
  }

}