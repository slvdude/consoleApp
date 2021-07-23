"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

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

//let i = 0;

/*do {
    i++;
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
} while( i < 2);*/

/*while(i < 2) {
    i++;
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
}*/

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов!');
} else if (personalMovieDB.count >=10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель!');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман!');
} else {
    console.log('Произошла ошибка!');
}

console.log(personalMovieDB);