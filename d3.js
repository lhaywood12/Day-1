/*
MORE ARRAYS
*/

// nested arrays
var teams = [
    ['Dallas', 'Cowboys'],
    ['Washington', 'Football Team'],
    ['Philadelphia', 'Eagles'],
    ['New York', 'Giants']
];

console.log(teams. length);
console.log(teams);

console.log(teams[1]);

console.log(teams[1][1]);

var teams2 = [
    ['Los Angeles', 'Rams', ['Matthew Stafford', 'Aaron Donald']]
],

['Arizona', 'Cardinals',
  ['Kyler Murray', 'Chandler Jones']
],

['San Franciso', '49ers',
  ['Jimmy G', 'Josh Norman']
],
['Seattle', 'Seahawks'
    ['Russell Wilson', 'KJ Wright']
  ]
];

console.log(teams2[2][2[0]);

var downtownJackson = ['Jordan', 'Rogelio', 'Kate', 'Keitron', 'Patrick','Lorriane', 'Johnathan', 'Takia', 'Micheal'];

//Repetiton Looping

/*
for loop
while loop
forEach loop
for of loop
for in loop
do while loop

for

for(initialization; condition; iteration) {
    do stuff
}

var i = 0;
i < arr.length;
i++ ;

i + 2
i = i +2

while

while(condition) {
    do stuff
}

forEach

arr.forEach(item => {
    do stuff})
*/

for (var i = 0; i < downtownJackson.lenghtl; i++) {
    console.log(`Hello ${downtownJackson[1]}`);
}

var southJackson = ['Jordan', 'Rogelio', 'Kate', 'Keitron', 'Patrick','Lorriane', 'Johnathan', 'Takia', 'Micheal'];

while (i < southJackson.length) {
    var i = 0;

    console.log(`Satch says, "Hello to you too, $ {southJackson[1]}`);

    i++;
}

console.clear();

var satchWallet = 30000000;

//for (var i = 0; i < southJackson.lenght; i++) {
 //   console.log(`Here is $1,000,00, ${southJackson}`);
   // satchWallet -= 1000000;
//}

var i = 0;

while(satchWallet >= 10000000 && [i] <= southJackson.length - 1) {
    console.log(`Here is $1,000,000, ${southJackson[i]}`);
    i++;
    satchWallet -= 10000000
}

console.log(`Satch now has ${satchWallet} left.`);

downtownJackson.forEach(coder => {
    console.log(`Hello ${coder}`);
});

southJackson.forEach(item => {
    console.log(`Hello ${item}`);
});

for ( var i = 1; i <= 20; i++) {
    console.log(i * 5);
}

