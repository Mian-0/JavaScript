// // let, const
// // LOGGING OUTPUT
// alert('Hello World'); // Do not use for debugging. Stops script and only strings
// console.log('Hello World');
// console.error('This is an error');
// console.warn('This is a warning');

// -------------------------------------------------------------------------------------------------------------
// // VARIABLES - var, let, const
// let age = 30;

// // let can be re-assigned, const can not
// age = 31;

// ------------------------------------------------------------------------------------------------------------



// DATA TYPES - String, Number, Boolean, null, undefined
// const name = 'Muhammad';
// const age = 30;
// const rating = 5.0;
// const veryCool = true;
// const x = null;
// const y = undefined;
// let z; // undefined

// // Check type
// console.log(typeof );

// ------------------------------------------------------------------------------------------------------------

// STRINGS

// fruits.pop();

// // // Check if array
// console.log(Array.isArray(fruits));

// // // Get index
// console.log(fruits.indexOf('oranges'));


// ------------------------------------------------------------------------------------------------------------


// const person = {
//     firstName: 'Allahdita aka Ad',
//     lastName: 'Chaudary',
//     age: 55,
//     hobbies: ['Kuch nahi', 'Pailay wala hi hai'],
//     address: {
//         village: 'ApnaGhar'
//     },
// }

// person.email = 'allahdita@AdChudary.com'

// console.log(person)

// ------------------------------------------------------------------------------------------------------------

// const todo = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meetingh with myself',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentis appt',
//         isCompleted: false
//     },
// ];

// console.log(todo[1].text);


// forEach, map, filter

// forEach
// todos.forEach(function(todo) {
//     console.log(todo.text);
// });


// map

// const todoText = todo.map(function(todo) {
//     return todo.text;
// });

// console.log(todoText);

// filter 

// const todoCompleted = todo.filter(function(todo) {
//     return todo.isCompleted === true;
// }).map(function(todo) {
//     return todo.text;
// })

// console.log(todoCompleted);


// ------------------------------------------------------------------------------------------------------------

// for(let todo of todos) {
//     console.log(todo.id)
// }


// // For loops
// for(let i = 0; i < todos.length; i++) {
//     console.log(`todo${i}.text`);
// }

// // while loop
// let i = 0;
// while(i < 10) {
//     console.log(`While Loop Number: ${i}`);
//     i++;
// }

// ---------------------------------------------------------------------------------------

// Conditionals

// const x = 6;
// const y = 11;

// if(x > 5 && y > 10) {
//     console.log('x is more than 5 or y is more than 10');
// }



// // Ternary operator
// const x = 9;

// const color = 'green';
// console.log(color)



// // Switches
// switch(color) {
//     case 'red':
//         console.log('color is red');
//     break;
//     case 'blue':
//         console.log('color is blue');
//     break;
//    default:
//        console.log('color is not blue or red')
// }

// ---------------------------------------------------------------------------------------

// functions
// function addNums(num1 = 1, num2 = 1) {
//     return num1 + num2;
// }

// console.log(addNums(2,2));

// Arrow Functions
// const addNums = (num1 = 1, num2 = 1) => console.log(num1 + num2);

// addNums(5,5);

// ---------------------------------------------------------------------------------------

// // Object-oriented programming OOP
// Constructor function
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }
// //Prototypes 
// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`
// }

// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }



// // Class
// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }

//     getBirthYear() {
//         return this.dob.getFullYear;
//     }
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }



// // Instantiate object 
// const person1 = new Person('Muhammad','Akmal', 23-9-1970);
// const person2 = new Person('AD','Chaudaray', 23-9-1970);

// console.log(person1.getBirthYear())
// console.log(person1.getFullName())

// ---------------------------------------------------------------------------------------

// // Sinngle element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

// Multiple elements
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// Loop through
// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));


// ---------------------------------------------------------------------------------------

// Manipulating the DOM or Changing things in the DOM

// const ul = document.querySelector('.items');



// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// const btn = document.querySelector('.btn');
// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
// });
    


// ---------------------------------------------------------------------------------------
// Form Script

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput === '') {
        msg.classList.add('error')
        msg.innerHTML = 'please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        
        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}