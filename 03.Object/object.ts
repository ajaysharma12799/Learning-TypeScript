type Person = { // Creating type alias
    readonly id: number, // ReadOnly Properties
    firstname: string,
    lastname: string,
    age: number,
    designation?: string, // Optional Properties
}

function printName(person: Person): void {
    console.log(person);
}

printName({
    id: 101,
    firstname: 'John',
    lastname: 'Doe',
    age: 25,
    designation: 'Software Engineer'
});

// Intersection Type => Help us to Combine More than One Types
type Circle = {
    radius: number,
}

type Colorful = {
    color: string
}

type ColorfulCircle = Circle & Colorful;

const HappyFaceCircle: ColorfulCircle = {
    radius: 3.14,
    color: '#3944f7',
}

console.log(HappyFaceCircle);
