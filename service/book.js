export async function getBookInfo(bookName) {
  const res = await fetch(
    `https://openlibrary.org/search.json?title=${bookName}`
  );
  const data = await res.json();

  const book = data.docs[0];

  return {
    title: book.title,
    author: book.author_name?.[0],
    year: book.first_publish_year,
    pages: book.number_of_pages_median
  };
}
