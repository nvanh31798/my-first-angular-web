import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from '../../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book = {} as Book;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  @Output() bookEmmiter = new EventEmitter<Book>();
  
  addtoCart() {
    this.cartService.add(this.book);
    // this.bookEmmiter.emit(this.book);
  }
  
}
