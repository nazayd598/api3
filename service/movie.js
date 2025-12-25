const genreMap = {
  Fantasy: "Fantasy",
  Adventure: "Adventure",
  Fiction: "Fantasy",
  Romance: "Drama"
};

export async function getMovieByGenre(genre) {
  const res = await fetch("https://ghibliapi.vercel.app/films");
  const movies = await res.json();

  const mappedGenre = genreMap[genre] || "Fantasy";

  const movie = movies.find(m =>
    m.description.toLowerCase().includes(mappedGenre.toLowerCase())
  ) || movies[0];

  return {
    title: movie.title,
    director: movie.director,
    year: movie.release_date
  };
}
