"use strict";       //работаем в современном режиме

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");   //переменная с данными пользователя
   
const personalMovieDB = {                                                 //объект фильмов  
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB['count'] < 10 && personalMovieDB['count'] >= 0) {
    alert('Вы просмотрели мало фильмов');
} else if (personalMovieDB['count'] >= 10 && personalMovieDB['count'] <= 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB['count'] > 30) {
    alert('Вы киноман');
} else {
    alert('Ошибка');
}


for (let i = 0; i < 2; i++) {
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

console.log(personalMovieDB);




// let a = prompt("Один из последних просмотренных вами фильмов?", ""),
//     b = +prompt("На сколько оцените его? (от 0 до 10)", ""),
//     c = prompt("Один из последних просмотренных вами фильмов?", ""),
//     d = +prompt("На сколько оцените его? (от 0 до 10)", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);
