"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: true,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while(personalMovieDB.count == null || personalMovieDB.count == '' || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let lastMovie = prompt('Один из последних просмотренных фильмов?', ''),
                ratingOfMovie = +prompt('На сколько его оцените?', '');
            
            if (lastMovie != null && ratingOfMovie != null && lastMovie != '' && ratingOfMovie != '' && lastMovie.length < 50) {
                personalMovieDB.movies[lastMovie] = ratingOfMovie;
                console.log('done');
            } 
            else {
                console.log('user hasnt answered the questions!');
                i--;
            }
        }
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов!');
        } else if (personalMovieDB.count >=10 && personalMovieDB.count <= 30) {
            console.log('Вы классический зритель!');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман!');
        } else {
            console.log('Произошла ошибка!');
        }
    },

    showMyDB: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        } else {
            console.log('access denied');
        }
    },

    writeYourGenres: function() {
        for(let i = 1; i <2; i++) {
            let yourGenre = prompt(`Введите ваши любимые жанры через запятую`, '');
            if(yourGenre != null && yourGenre != '') {
                personalMovieDB.genres = yourGenre.split(', ');
            } 
            else {
                console.log('Введены некорректные данные');
                i--;
            }
        }
        personalMovieDB.genres.forEach((value, index) => {
            console.log(`Любимый жанр #${index + 1} - это ${value}`);
        });
    },

    toggleVisibleMyDB: function() {
        if(personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    }
};



