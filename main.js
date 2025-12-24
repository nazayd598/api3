document.getElementById("btn").addEventListener("click", async () => {
  const book = document.getElementById("book").value;

  const res = await fetch(`/api/book?name=${book}`);
  const data = await res.json();

  document.getElementById("result").innerText =
    `${data.title} - ${data.author}\n"${data.quote}"`;
});
