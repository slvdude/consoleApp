"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let lastMovie = prompt('Один из последних просомтренных фильмов?', ''),
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов!');
    } else if (personalMovieDB.count >=10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель!');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман!');
    } else {
        console.log('Произошла ошибка!');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    } else {
        console.log('access denied');
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}

writeYourGenres();


