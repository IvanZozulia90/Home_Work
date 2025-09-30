const text = "Wonderful, Joyful, Happiness, Time, Task, Apple";

let search = text.match(/\b[^aA\s]{6,}\b/g);

console.log(search);