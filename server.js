import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.static("."));

app.get("/api/book", async (req, res) => {
  const bookName = req.query.name;

  const bookRes = await fetch(
    `https://openlibrary.org/search.json?title=${bookName}`
  );
  const bookData = await bookRes.json();
  const book = bookData.docs[0];

  const quoteRes = await fetch("https://api.quotable.io/random");
  const quote = await quoteRes.json();

  res.json({
    title: book.title,
    author: book.author_name?.[0],
    quote: quote.content
  });
});

app.listen(3000, () => {
  console.log("Server running on 3000");
});
