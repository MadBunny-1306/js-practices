/*
let country = "Serbia";
const continent = "Europe";
let population = 6.8;
// console.log(country, continent, population);
let isIsland = false;
const language = "serbian";
console.log(isIsland, population, country, language);
*/

// MATH OPERATORS
const now = 2037;
const ageSlady = now - 1994;
const ageYuri = now - 1999;
console.log(ageSlady, ageYuri);

const firstName = "Sladjana";
const lastName = "Dejanovic";
console.log(firstName + " " + lastName);

// ASSIGNMENT OPERATORS
let x = 10 + 5; //x ce biti 15
x += 10; // na vrednost x (koja je 15 zbog ovog iznad) dodaje se 10
x *= 4; // vrednost x (koja je sad 25) mnozi se sa 4
x++; //x = x + 1
console.log(x);

// COMPARISON OPERATORS
console.log(ageSlady > ageYuri);
console.log(ageYuri >= 30);

const isAge = ageYuri >= 30; //store this result if we need it later in code

console.log(now - 1994 > now - 1999); //isto sto i ovo: console.log(ageSlady > ageYuri);, da ne mora da se racuna posebno (12, 13, 14 red), nego odmah ovde ovako
