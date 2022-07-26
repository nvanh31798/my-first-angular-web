import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks() {
    return[
      {
        name: 'Seven Husbands of Evelyn Hugo',
        author: 'Taylor Jenkins Reid',
        image: "https://images-na.ssl-images-amazon.com/images/I/71HuyKCcs4L._AC_UL254_SR254,254_.jpg",
        amount: 1000000
      },
      {
        name: 'Where the Crawdads Sing',
        author: 'Delia Owens',
        image: "https://images-na.ssl-images-amazon.com/images/I/81LFAmKY4FL._AC_UL254_SR254,254_.jpg",
        amount: 1500000
  
      },
      {
        name: 'It Ends With Us',
        author: 'Colleen Hoover',
        image: "https://images-na.ssl-images-amazon.com/images/I/71l9pCV99FL._AC_UL254_SR254,254_.jpg",
        amount: 1400000
      },
      {
        name: 'Reminders Of Him',
        author: 'Colleen Hoover',
        image: "https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL._AC_UL254_SR254,254_.jpg",
        amount: 2107000
      }
    ]

  }
}
