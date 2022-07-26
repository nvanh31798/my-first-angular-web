import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';
// interface Book {
//   name: string
//   author: string
//   image: string
//   amount: number
// }

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  constructor(private bookService: BooksService) { }
  books: Book[] = [];

  card: Book[] = [];
  name: string = 'Clean Code';
  author: string = 'Robert C Martin';
  src: string = "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg";

  isShowing: boolean = true;


  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }
  myName: string = '';

  // addtoCart(event: Book) {
  //   console.log(event);
  // }
}
