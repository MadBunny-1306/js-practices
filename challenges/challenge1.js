// const markHeight = 1.69;
// const markMass = 78;
// const johnHeight = 1.95;
// const johnMass = 92;
const markHeight = 1.88;
const markMass = 95;
const johnHeight = 1.76;
const johnMass = 85;
const BMIMark = markMass / markHeight ** 2;
const BMIJohn = johnMass / (johnHeight * johnHeight);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);
