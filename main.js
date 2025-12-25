import { getBookInfo } from "./services/book.js";
import { getMovieByGenre } from "./services/movie.js";

async function run() {
  const book = await getBookInfo("Harry Potter");
  const movie = await getMovieByGenre(book.subject);

  document.getElementById("output").innerHTML = `
    <h3>Book</h3>
    <p>${book.title} - ${book.author}</p>
    <p>Genre: ${book.subject}</p>

    <h3>Movie Recommendation</h3>
    <p>${movie.title}</p>
    <p>Director: ${movie.director}</p>
    <p>Year: ${movie.year}</p>
  `;
}

run();
