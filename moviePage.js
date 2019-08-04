const axios = require("axios");
const cheerio = require("cheerio");

const moviePage = async id => {
  const movieURL = `https://www.imdb.com/title/${id}`;

  const body = await axios
    .get(movieURL)
    .then(res => {
      return res.data;
    })
    .catch(err => console.error(err));

  const $ = cheerio.load(body);

  //   const movieDetail = {};

  const title = $(".titleBar .title_wrapper h1")
    .text()
    .trim();

  const year = $(".titleBar .title_wrapper h1 a")
    .text()
    .trim();

  const imdbRating = $(".title_bar_wrapper span[itemprop=ratingValue]")
    .text()
    .trim();

  const timesRated = $(".title_bar_wrapper span[itemprop=ratingCount]")
    .text()
    .trim();

  const rating = $(".titleBar .title_wrapper .subtext")
    .text()
    .trim()
    .match(/(.*)|/)[0];

  const runtime = $(".titleBar .title_wrapper .subtext time")
    .text()
    .trim();

  const genre = [];
  $(".titleBar .title_wrapper .subtext a").each((i, v) => {
    const data = $(v).text();
    genre.push(data);
  });
  let releaseDate = genre.pop();
  releaseDate = releaseDate.match(/(.*)\n/)[1];

  const poster =
    $(".slate_wrapper .poster img")
      .attr("src")
      .match(/https\:\/\/m\.media\-amazon\.com\/images\/(.*)V1_/)[0] +
    "QL50_.jpg";

  const summary = $(".plot_summary .summary_text")
    .text()
    .trim();
  const directors = [];
  const writers = [];
  const stars = [];
  $(".plot_summary .credit_summary_item").each((i, v) => {
    const post = $(v)
      .find("h4")
      .text()
      .match(/(.*):/)[1];
    $(v)
      .find("a")
      .each((index, value) => {
        const data = $(value).text();
        if (post == "Director") directors.push(data);
        if (post == "Writer") writers.push(data);
        if (post == "Stars") stars.push(data);
      });
  });
  stars.pop();

  const storyline = $("#titleStoryLine .inline p span")
    .text()
    .trim();

  let budget = "";
  let grossRevenue = "";
  $("#titleDetails .txt-block").each((i, v) => {
    const data = $(v);
    const key = data.find("h4").text();
    if (key == "Budget:") {
      budget = data
        .text()
        .trim()
        .match(/Budget:(.*)/)[1];
    }
    if (key == "Cumulative Worldwide Gross:") {
      grossRevenue = data
        .text()
        .trim()
        .match(/Cumulative Worldwide Gross:(.*)/)[1];
    }
  });

  return {
    title,
    year,
    imdbRating,
    timesRated,
    rating,
    runtime,
    genre,
    releaseDate,
    poster,
    summary,
    directors,
    writers,
    stars,
    storyline,
    budget,
    grossRevenue
  };
};

module.exports = moviePage;
