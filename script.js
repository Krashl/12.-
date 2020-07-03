"use strict";       //работаем в современном режиме

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");   //переменная с данными пользователя
   
const personalMovieDB = {                                                 //объект фильмов  
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a = prompt("Один из последних просмотренных вами фильмов?", ""),
    b = +prompt("На сколько оцените его? (от 0 до 10)", ""),
    c = prompt("Один из последних просмотренных вами фильмов?", ""),
    d = +prompt("На сколько оцените его? (от 0 до 10)", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);