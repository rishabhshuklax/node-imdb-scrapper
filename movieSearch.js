const axios = require("axios");
const cheerio = require("cheerio");

const movieSearch = async search_item => {
  let searchURL = `https://www.imdb.com/find?q=${search_item}&s=tt`;

  const body = await axios
    .get(searchURL)
    .then(res => {
      return res.data;
    })
    .catch(err => console.error(err));
  const $ = cheerio.load(body);
  const results = [];
  $(".findSection tr").each((i, v) => {
    const data = $(v);
    const title = data
      .find(".findResult .result_text")
      .text()
      .trim();
    const id = data
      .find(".result_text a")
      .attr("href")
      .match(/title\/(.*)\//)[1];
    const imgURI = data.find(".primary_photo img").attr("src");
    let hdImageURI = "";
    try {
      hdImageURI =
        data
          .find(".primary_photo img")
          .attr("src")
          .match(/https\:\/\/m\.media\-amazon\.com\/images\/(.*)V1_/)[0] +
        "QL50_.jpg";
    } catch (e) {
      hdImageURI = imgURI;
    }

    results.push({ title, id, imgURI, hdImageURI });
  });
  console.log("results");
  //   console.log(resultsNames);
  return results;
};
module.exports = movieSearch;
