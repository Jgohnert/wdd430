// Primitives

let age: number;

age = 12;

let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// complex types

let hobbies: string[];

hobbies = ['Sports', 'cooking'];

// you can create an alias using type
type Person = {
    name: string;
    age: number;
};

let person: Person

person = {
    name: 'Max',
    age: 32
};

// You can make this an array by adding the [] at the end
let people: Person[];

// Type inference

let course: string | number = 'React';

course = 12341;

// Functions and types

function add(a: number, b: number) {
    return a + b;
}

function print(value: any) {
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array]
    return newArray;
}

const demoArray = [1, 2, 3];

const updateArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a', 'b', 'c',], 'd');

// updateArray[0].split('');

class Student {
    firstName: string;
    lastName: string;
    age: number;
    private courses: string[];

    constructor(public first: string, last: string, age: number, courses: string[]) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    }

    enrol(courseName: string) {
        this.courses.push(courseName);
    }
}

const student = new Student('Max', 'schwartz', 32, ['Anguar']);
student.enrol('React');


// interface instead of type
interface Human {
    firstName: string;
    age: number

    greet: () => void;
}

let max: Human;

max = {
    firstName: 'Max',
    age: 32,
    greet() {
        console.log('Hello');
    },
};







