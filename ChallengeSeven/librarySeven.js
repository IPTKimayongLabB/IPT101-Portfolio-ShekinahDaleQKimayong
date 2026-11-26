import { book1, book2, book3, formatBook } from "./bookModule.js";

console.log(book1.getBookLabel());
console.log(book2.getBookLabel());
console.log(book3.getBookLabel());
console.log(formatBook(book1, "Available"));
console.log(formatBook(book2, "Borrowed"));
console.log(formatBook(book3, "Available"));