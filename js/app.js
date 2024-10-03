// 1 masala

const arr = [0, "apple", false, "", "banana", NaN, 42];

const filteredArr = arr.filter(Boolean);

console.log(filteredArr);

// 3 masala

const numbers = [3, 1, 4, 1, 5, 9, 2, 6];

const uniqueNumbers = [...new Set(numbers)].sort((a, b) => b - a);

const secondLargest = uniqueNumbers[1];

console.log(secondLargest);

// 4 masala

const animals = ["antelope", "alligator", "bear", "cat", "cheetah"];

const groupedAnimals = animals.reduce((acc, animal) => {
    const firstLetter = animal[0].toLowerCase();
    
    if (!acc[firstLetter]) {
        acc[firstLetter] = [];
    }
    
    acc[firstLetter].push(animal);
    
    return acc;
}, {});

console.log(groupedAnimals);

// 5 masala

const nestedArr = [[1, 2], [3, 4], [1, 2], [5]];

const uniqueElements = [...new Set(nestedArr.flat())];

console.log(uniqueElements);

// 6 masala

const people = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Jack", age: 20 }
];

const names = people.map(person => person.name);
const ages = people.map(person => person.age);

console.log(names, ages);
