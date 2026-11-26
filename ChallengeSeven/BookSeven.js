export function createBook(title, author, year) {
  return {
    title,
    author,
    year,
    getBookLabel() {
      return `${this.title} by ${this.author} (${this.year})`;
    }
  };
}

export const book1 = createBook("Leaving Two", "Mel Torrenfranca", 2020);
export const book2 = createBook("Mind Games", "Heera Maedison", 2023);
export const book3 = createBook("Florante at Laura", "Francisco Balagtas", 1838);