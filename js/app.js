// 1 masala

const arr = [0, "apple", false, "", "banana", NaN, 42];

const filteredArr = arr.filter(Boolean);

console.log(filteredArr);

const arr2 = [0, "apple", false, "", "banana", NaN, 42];

function filterTruthyValues(array) {
    return array.filter(item => Boolean(item));
}

const filteredArr2 = filterTruthyValues(arr);

console.log(filteredArr2);

// 3 masala

const numbers2 = [3, 1, 4, 1, 5, 9, 2, 6];

const uniqueNumbers = [...new Set(numbers2)].sort((a, b) => b - a);

const secondLargest2 = uniqueNumbers[1];

console.log(secondLargest2);

const numbers = [3, 1, 4, 1, 5, 9, 2, 6];

function findSecondLargest(array) {
    const uniqueNumbers = [...new Set(array)].sort((a, b) => b - a);
    return uniqueNumbers[1];
}

const secondLargest = findSecondLargest(numbers);

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

const people2 = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Jack", age: 20 }
];

function extractNamesAndAges(array) {
    const names2 = array.map(person => person.name);
    const ages2 = array.map(person => person.age);
    return { names2, ages2 };
}

const { names2, ages2 } = extractNamesAndAges(people2);

console.log(names2, ages2);
