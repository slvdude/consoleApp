const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const lastMovie = prompt('Один из последних просомтренных фильмов?', ''),
      ratingOfMovie = +prompt('На сколько его оцените?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

personalMovieDB.movies[lastMovie] = ratingOfMovie;

console.log(personalMovieDB);