let movieName: string = "Iron Man Series";
let age: number = 25;
let isAdmin: boolean = false;

console.log(movieName);
console.log(age);
console.log(isAdmin);

// any type => Used to Accept any type of value
let x: any = undefined;
x = null;
x = Symbol('5');

console.log(x);

let movies = ['Iron Man', 'Thor', "Spider Man", 'Hulk'];
let foundMovie;

// If we have any delayed initilization then in those cases the type perfered will be "any" and that will be called 'implicit any', because that type is prefered automatically.

for (let movie of movies) {
    if(movie === 'Thor') {
        foundMovie = movie;
    }
}

console.log(foundMovie);

