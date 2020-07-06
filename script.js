"use strict";       //работаем в современном режиме

const personalMovieDB = {                                                 //объект фильмов  
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    detectPersonalLevel: function() {
        if (this.count < 10 && this.count >= 0) {
            alert('Вы просмотрели мало фильмов');
        } else if (this.count >= 10 && this.count <= 30) {
            alert('Вы классический зритель');
        } else if (this.count > 30) {
            alert('Вы киноман');
        } else {
            alert('Ошибка');
        }
    },
    rememberMyFilms: function(iter) {
        for (let i = 0; i < iter; i++) {
            let a;
        
            while (true) {
                a = prompt('Как называется фильм?', '');
                if(a.length < 50 && a != '' && a != null) {
                    break;
                }
                alert('введите в названии не пустую строку и не больше 50 символов!');
            }
            while (true) {
                let b = +prompt('На сколько оцените его? (от 0 до 10)', '');
                if (b != '' && b != null) {
                    this.movies[a] = b;
                    break;
                } else {
                    alert(`введите оценку для фтльма ${a}!`);
                }
            }
        }
    },
    showMyBd: function() {
        if (!this.privat) {
            console.log(personalMovieDB);
        } else {
            alert('Нельзя посмотреть. Пользователь в приматном режиме.');
        }
    },
    writeYourGenres: function(iter) {
        for (let i = 0; i < iter; i++) {
            while(true) {
                if (this.genres[i] == '' || this.genres[i] == null) {
                    this.genres[i] = prompt(`ваш любимый жанр под номером ${i+1}`, ``);
                } else {
                    break;
                }
            }
        }
        this.genres.forEach((item, index) => {
            console.log(`Любимый жанр #${index+1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (this.privat) {
            this.privat = false;
            alert('Приват включен');
        } else {
            this.privat = true;
            alert('Приват выключен');
        }
    }
};



personalMovieDB.start();

personalMovieDB.detectPersonalLevel();

personalMovieDB.rememberMyFilms(2);

personalMovieDB.writeYourGenres(3);

personalMovieDB.showMyBd();

personalMovieDB.toggleVisibleMyDB();



