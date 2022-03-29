/*
Functions

function funcName(arg) {
    do stuff
}

funcName needs to say what the function is doing
   countToOneHundred
   addByFive
   generateLastNames
   killHumans

   camelCase

arguments
   food for the function to operate
   can have a function without an argument
   functions can also have more than one argument

   functions should run one task and one task only

// Arrow functions

/* function funcName() {
    do stuff
}

const funcName =()=> {
    do stuff
}

let variable = data
const = {

}
*/

function countString(str) {
    //do stuff
    // function to count the number of characters in a string.
    console.log(`${str} has ${str.length} characters.`);
    return 
};

countString('hello');

countString('Do you know the way to San Jose?')

getSum(8,9);

function getSum(a, b) {
    console.log(a + b);
    return;
}

console.log(myName);

var myName = 'Mike';
console.log(myName);

function countTo10() {
    let i = 0;
    while (i <= 10) {
        console.log(i)
        i++
    }
    return;
}

function greeting(person = 'Takia') {

    return console.log(`Hello ${person}`);
}

greeting();

greeting('Horatio');

var product;

function multBythree(num) {

    product = num * 3
    console.log(product);
    return product;
}

function divBythree() {
    var result = product / 3;
    return console.log(result)
}

multByThree(6);
divByThree();

var foo = 'hello';

function boo() {
    var foo = 'goodbye';
    console.log(foo);
};

boo();
console.log(foo);

console.clear();
//let & const

var i = 25;

for (var i = 0; i < 7; i++) {
    console.log(i);
}

console.log(i);

const baz = 8;
console.log(baz);

baz = 7;

for(let i =0; i < 19; i++) {
    const num = i;
    console.log(num);
}

const team = 'Dodgers';


// Arrow Functions

//When using more operations, use curly braces
const addNums =(a, b)=> {
    let a = 6;
    let b = 7;
    return a + b
};

//When using one operation, don't use curly braces
//The return is already assumed
const addNums =(a, b)=> console.log(a + b);

const purchaseItems =(item)=> console.log(`I got the ${item} in the cart.`)

purchaseItems(groceryItem[4]);

const sortList =(arr)=> {
    arr.forEach(item => {
        console.log(item);
    })
};

// children "Jack and Ben"

/*
 children = {
     oldest: {
         name:'Jack'
         nickname: 'Horatio',
         age: 19
     }
     youngest: 'Ben'
 }
*/