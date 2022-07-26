import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() book: Book = {} as Book;

  constructor(private cartService: CartService) { }

  ngOnInit(): void { }

  getCart(){
    return this.cartService.get();
  }
  removeFromCart(book: Book){  
    this.cartService.remove(book);
  }
}
