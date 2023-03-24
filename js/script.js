"use strict"

const numberOfFilms = +prompt("How many films have you already watched?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt("What's the last film you've watched?", " "),
      b = prompt("How do you rate it?", "10"),
      c = prompt("What's the last film you've watched?", " "),
      d = prompt("How do you rate it?", "10");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
