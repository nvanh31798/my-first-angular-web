import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';
import { BooksService } from "./books/books.service";
import { BooksModule } from "./books/books.module";
import { CartComponent } from './cart/cart.component';
import { AppRountingModule } from "./app-routing.module";
import { AuthModule } from "./auth/auth.module";


@NgModule(
    {
            declarations: [AppComponent, CartComponent],
            imports: [BrowserModule, BooksModule, AppRountingModule, AuthModule],
            bootstrap: [AppComponent]
    }
)
export class AppModule { }