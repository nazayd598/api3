import { getBookInfo } from "./book.js";

export async function getBookQuote(bookName) {
  const book = await getBookInfo(bookName);

  const res = await fetch("https://api.quotable.io/random");
  const quote = await res.json();

  return {
    book: book.title,
    author: book.author,
    quote: quote.content
  };
}
