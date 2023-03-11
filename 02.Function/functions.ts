// Setting Type of Function Paremeter
function sum(num1: number, num2: number) {
    console.log( num1 + num2 );
}

sum(5, 10);

function greet(msg: string) {
    console.log(`Greeting Message: ${msg}`);
}

greet('How are you My Friend');

// Setting Return Type of Function
function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

multiply(5, 25);

// Default Parameter
function sayHi(name: string = "Tony") {
    console.log(name);
}

sayHi('Ajay Sharma');

// Return Type of Function
function square(num1: number, num2: number): number {
    return num1 + num2;
}

square(5, 10);

function greetMe(): string {
    return 'Hello Mr. Ajay Sharma';
}

greetMe();

// Contextual Typing
const colors = ["Red", "Green", 'Blue', 'Orange'];

colors.map((color) => {
    // TypeScript can infer the type of color because of the context in which it is called
    return color.toUpperCase();
})

// void Type
function sayHello(): void {
    console.log('Hello Mr. Ajay Sharma');
}
sayHello();

const sayHii = (): void => {
    console.log('Hii Mr. Ajay Sharma');
}
sayHii();

// never Type
function throwError(msg: string): never {
    throw new Error(msg);
}
throwError('I am a Error');