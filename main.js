import { getBookQuote } from "./services/quote.js";

document.getElementById("btn").addEventListener("click", async () => {
  const book = document.getElementById("book").value;
  const data = await getBookQuote(book);

  document.getElementById("result").innerText =
    `${data.book} - ${data.author}\n"${data.quote}"`;
});
