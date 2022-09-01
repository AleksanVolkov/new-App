let numberOfFilms= prompt("сколько фильмов вы уже посматрели", "");

let movie1 = prompt("какой последний фильм вы смотрели", ""),
    num1 = prompt("ваша оценка фильму", ""),
    movie2 = prompt("какой последний фильм вы смотрели", ""),
    num2 = prompt("ваша оценка фильму", "");


let personalMovieDb = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genries:{},
    privat:false
    
}
personalMovieDb.movies[movie1]=num1;
personalMovieDb.movies[movie2]=num2;

console.log(personalMovieDb.count);
console.log(personalMovieDb.movies);