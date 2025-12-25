export async function getBookInfo(title) {
  const res = await fetch(
    `https://openlibrary.org/search.json?title=${encodeURIComponent(title)}`
  );
  const data = await res.json();

  const book = data.docs[0];

  return {
    title: book.title,
    author: book.author_name?.[0] || "Unknown",
    subject: book.subject?.[0] || "Fantasy"
  };
}
