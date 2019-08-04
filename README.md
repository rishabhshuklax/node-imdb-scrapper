# IMDB Scrapper using Node.js and Cheerio

## Overview

This is a [IMDB](https://www.imdb.com/) scrapper made with [Node.js](https://nodejs.org/) and [Cheerio.js](https://github.com/cheeriojs/cheerio) to scrape movies information.

## Setup

1. Clone the repo and navigate into `node-imdb-scrapper` folder.

```
$ git clone https://github.com/blurry-x-face/node-imdb-scrapper.git
$ cd node-imdb-scrapper
```

2. Install node dependencies.

```
$ npm install
```

3. Start the development server by running following command. This would open a development server on `http://localhost:5000`

```
$ node server.js
```

4. You can search for any movie by `http://localhost:5000/search/movie_name`. This will return a [JSON](http://localhost:5000) object which will have array of movies.

```
{
"results": [
{
"title": "Shingeki no kyojin (2013) (TV Series) aka \"Attack on Titan\"",
"id": "tt2560140",
"imgURI": "https://m.media-amazon.com/images/M/MV5BMTY5ODk1NzUyMl5BMl5BanBnXkFtZTgwMjUyNzEyMTE@._V1_UX32_CR0,0,32,44_AL_.jpg",
"hdImageURI": "https://m.media-amazon.com/images/M/MV5BMTY5ODk1NzUyMl5BMl5BanBnXkFtZTgwMjUyNzEyMTE@._V1_QL50_.jpg"
},
{
"title": "Shingeki no kyojin (2015) aka \"Attack on Titan\"",
"id": "tt2072230",
"imgURI": "https://m.media-amazon.com/images/M/MV5BZDk5MTcxZmItYWM2Ny00NjIwLWE2YWQtYjczMWFiZThjN2JkXkEyXkFqcGdeQXVyNDQyNzIwNDQ@._V1_UX32_CR0,0,32,44_AL_.jpg",
"hdImageURI": "https://m.media-amazon.com/images/M/MV5BZDk5MTcxZmItYWM2Ny00NjIwLWE2YWQtYjczMWFiZThjN2JkXkEyXkFqcGdeQXVyNDQyNzIwNDQ@._V1_QL50_.jpg"
},
{
"title": "Attack on Titan",
"id": "tt6450560",
"imgURI": "https://m.media-amazon.com/images/M/MV5BNDYyNTAyYjEtNmY1Yy00Y2U5LTg1OTktYjU0ZjBjODA3MDcyXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_UY44_CR0,0,32,44_AL_.jpg",
"hdImageURI": "https://m.media-amazon.com/images/M/MV5BNDYyNTAyYjEtNmY1Yy00Y2U5LTg1OTktYjU0ZjBjODA3MDcyXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_QL50_.jpg"
},
{
"title": "Shingeki no kyojin endo obu za wârudo (2015) aka \"Attack on Titan: Fin del mundo\"",
"id": "tt4294052",
"imgURI": "https://m.media-amazon.com/images/M/MV5BYjU5ZThjMjgtOGExNi00ZmUzLWFiN2QtNTQ3YmYwN2ExNjU1XkEyXkFqcGdeQXVyNDQyNzIwNDQ@._V1_UX32_CR0,0,32,44_AL_.jpg",
"hdImageURI": "https://m.media-amazon.com/images/M/MV5BYjU5ZThjMjgtOGExNi00ZmUzLWFiN2QtNTQ3YmYwN2ExNjU1XkEyXkFqcGdeQXVyNDQyNzIwNDQ@._V1_QL50_.jpg"
},
{
"title": "Attack on Titan: Junior High (2015) (TV Series)",
"id": "tt4906830",
"imgURI": "https://m.media-amazon.com/images/M/MV5BMDU4MmYzZGItYTZkYS00NjJlLWI5OTItNDE0ZDNjNDkyZmZlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_UX32_CR0,0,32,44_AL_.jpg",
"hdImageURI": "https://m.media-amazon.com/images/M/MV5BMDU4MmYzZGItYTZkYS00NjJlLWI5OTItNDE0ZDNjNDkyZmZlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_QL50_.jpg"
},
...]
}
```

5. You can also get data for a specific movie by using the id from url `http://localhost:5000/movie/movie_id`. This will return a [JSON](https://json.org) data containing details about the movie

```
{
"title": "Batman v Superman: Dawn of Justice (2016)",
"year": "2016",
"imdbRating": "6.5",
"timesRated": "581,363",
"rating": "UA",
"runtime": "2h 31min",
"genre": [
"Action",
"Adventure",
"Fantasy"
],
"releaseDate": "25 March 2016 (India)",
"poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL50_.jpg",
"summary": "Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs.",
"directors": [
"Zack Snyder"
],
"writers": [
    "Chris Terrio",
    "David S. Goyer"
],
"stars": [
"Ben Affleck",
"Henry Cavill",
"Amy Adams"
],
"storyline": "The general public is concerned over having Superman on their planet and letting the \"Dark Knight\" - Batman - pursue the streets of Gotham. While this is happening, a power-phobic Batman tries to attack Superman. Meanwhile, Superman tries to settle on a decision, and Lex Luthor, the criminal mastermind and millionaire, tries to use his own advantages to fight the \"Man of Steel\".",
"budget": "$250,000,000",
"grossRevenue": " $873,634,919"
}
```

##Disclaimer
The project and the obtained dataset is intended only for educational purpose. It is completely open source and has no value intentions to commercialise complete or any part of the same. The developer is on no part the owner of any resources used and does not claim to hold the permissions to use the project.
