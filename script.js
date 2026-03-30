const person = {
    name: {
        name1: "John",
        name2: "Doe"
    },
    age: 30,
    city: "New York"
};
console.log(person.name.name1); // Output: John
console.log(person.name.name2); // Output: Doe
console.log(person.age);  // Output: 30
console.log(person.city); // Output: New York
person.name.name1 = "belal";
console.log(person.name.name1); // Output: belal
