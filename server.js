const express = require("express");
const movieSearch = require("./movieSearch");
const moviePage = require("./moviePage");

const app = express();
app.use(express.json());

app.get("/search/:movie", async (req, res) => {
  const results = await movieSearch(req.params.movie);
  res.send({ results });
});
app.get("/movie/:movie", async (req, res) => {
  const result = await moviePage(req.params.movie);
  res.send(result);
});
app.get("/", (req, res) => {
  res.send({ message: "Welcome Message" });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
