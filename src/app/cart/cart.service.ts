import { Injectable } from '@angular/core';
import { Book } from '../types/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Book[] = [];

  constructor() { }

  add(book: Book){
    this.cart.push(book);
  }

  get(){
    return this.cart;
  }

  remove(book: Book){
    console.log(this.cart.indexOf(book));
    this.cart.splice(this.cart.indexOf(book), 1);
  }
}
