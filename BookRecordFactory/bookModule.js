export const book = {
  title: "Leaving Wishville",
  author: "Mel Torrefranca",
  year: 1887,

  getBookLabel(){
    return `${this.title} by ${this.author} (${this.year})`;
  }
};

export function formatBook(book, status) {
  return `Title: ${book.title} | Author: ${book.author} | Year: ${book.year} | Status: ${status} `;
}
