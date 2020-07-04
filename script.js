"use strict";       //работаем в современном режиме

let numberOfFilms;   //переменная с данными пользователя
 
function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {                                                 //объект фильмов  
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function detectPersonalLevel() {
    if (personalMovieDB['count'] < 10 && personalMovieDB['count'] >= 0) {
        alert('Вы просмотрели мало фильмов');
    } else if (personalMovieDB['count'] >= 10 && personalMovieDB['count'] <= 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB['count'] > 30) {
        alert('Вы киноман');
    } else {
        alert('Ошибка');
    }
}

detectPersonalLevel();

function rememberMyFilms(iter) {
    for (let i = 0; i < iter; i++) {
        let a;
    
        while (true) {
            a = prompt('Как называется фильм?', '');
            if(a.length < 50 && a != '') {
                break;
            }
            alert('введите в названии не пустую строку и не больше 50 символов!');
        }
        while (true) {
            let b = +prompt('На сколько оцените его? (от 0 до 10)', '');
            if (b != '') {
                personalMovieDB.movies[a] = b;
                break;
            } else {
                alert(`введите оценку для фтльма ${a}!`);
            }
        }
    }
}

rememberMyFilms(2);

function showMyBd(privat) {
    if (!privat) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres(iter) {
    for (let i = 0; i < iter; i++) {
        personalMovieDB.genres[i] = prompt(`ваш любимый жанр под номером ${i+1}`, ``)
    }
}

writeYourGenres(3);

showMyBd(personalMovieDB.privat);

// let a = prompt("Один из последних просмотренных вами фильмов?", ""),
//     b = +prompt("На сколько оцените его? (от 0 до 10)", ""),
//     c = prompt("Один из последних просмотренных вами фильмов?", ""),
//     d = +prompt("На сколько оцените его? (от 0 до 10)", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);
