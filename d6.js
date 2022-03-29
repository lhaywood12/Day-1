/*
Objects

Everything is an oject.

let obj = {
    key: value, 
    property: value
};

values can be accessed using;
  dot notation
  bracket notation

  CLASSES

  class Classname {
      consreuctor() {
          this.property = value,
          this.property2 = value2
          this.property3 = value3 
      }

      method() {
          do stuff
      }
    How do I loop through an object??

    for/in

    for (var in obj) {
        do stuff
    }
  }
*/

let person = {
    id: 1,
    myName: {
        "nickname": 'Satch',
        fName: 'Herbert',
        lName: 'Brown'
    },
    age: 41,
    occupation: 'Insructor Deluxe',
    hobbies: ['Cooking', 'Reading', 'Collecting vinyl', 'Working out', 'DJing'],
    wife: 'Cassandra',
    "children": {
        oldest: 'Ysonni',
        youngest: 'Josiah'
    },
    favTeams: {
        football: 'Cowboys',
        baseball: 'Dodgers',
        hockey: 'Oilers',
        baseball: 'Lakers',
        futbol: 'Atl United'
},
isAwesome: true,
grandchilren: null,
'favorite food': {
    'murican': 'burgers',
    thai: 'Chicken panang',
    mexcian: 'Tacos'
  }

greeting: function() {
    console.log(`Hello ${this.myName.fName}`);
  }
};

console.log(person);

console.log(person.age);

console.log(person.occupation);

console.log(person.hobbies);

console.log(person.hobbies[3]); // collecting vinyl

console.log(person.favTeams.hockey); // oilers

console.log(person['children']);

console.log(person.myName['nickname'])

console.log(person['favorite food']);

console.log(person['favorite food'].thai );

console.log(person['favorite food']['murican']);

person.age = 42;

console.clear();

console.log(person.age);

person.vehicle = 'F150';

console.log(person);

person.greeting();

Object.Freeze(peter);

person.age = 41]

console.log(person.age);

person. job = "Mississippi Coding Academies";

console.log(person);

class Animal {
    constructor() {
        this.name
        this.color
        this.legs
        this.eyes
        this.sound
    }

    makeSound() {
        console.log(this.sound)
    }
};


let dog = new Animal;

dog.name = 'Khaleesi';
dog.color = 'Sandy Brown';
dog.legs = 4;
dog.eyes = 2;
dog.sound = 'yelp';

console.log(dog);

dog.makeSound();

let spider = new Animal;

spider.name = 'Chatlotte';
spider.color = 'black';
spider.legs = '8';
spider.eyes = '8';
spider.sound = 'hiss'

console.log(spider);

console.log(Animal.sound);


for (let key in spider) {
    console.log(`${key}: ${spider[key]}`)
}

console.log(key);

//Using class build a Movie object and Album object. Have at least 10 properties and three methods.

class Moive {
    constructor() {
    this.name
    this.time
    this.music
    this.awards
    this.cast
    this.synopsis
    this.producer   
};

let BlackDynamite = new Moive;

BlackDynamite.title = 'Black Dynamite';
BlackDynamite.genre = 'Action';
BlackDynamite.prodCompany = 'ARS Nova';
BlackDynamite.rating = 'R';
BlackDynamite.time = 84;
BlackDynamite.director = 'Scott Sanders';
BlackDynamite.producer = 'Jon Steingart';
BlackDynamite.cast = ['Michael Jai White', 'Tommy Davidson', 'Salli Richardson', 'Byron Mims'];
BlackDynamite.awards = {
    presenter: 'Seattle International Film Festival',
    award: 'Best Film'
}

BlackDynamite.releaseYear = 2009;


class Album {
    constructor() {
        this.title
        this.band
        this.label
        this.numOfSongs
        this.genre
        this.format
        this.trackList
        this.releaseYear
        this.secondGenre
        this.price
    }

    showInfo() {
        console.log(`${this.title} by ${this.band} is a ${this.genre} album and was released in ${this.releaseYear} on the label, ${this.label}`)
    }

    showPrice() {
        console.log(`We have ${this.title} in the following formats: ${this. format}. It costs ${this.price}`);
   }

    showTracklist() {
        console.log(`${this.title} has ${this.numOfSongs}. Here is the track list:`)
        let num = 1;
        this.trackList.forEach( song => {
          console.log `${num}. ${song}`)
          num ++;
    }
};

/*
BUILD AN ARRAY OF OBJECTS

BUILD OBJECTS

COLLECT DATA FROM USER

DISPLAY CARDS

CLICK ON CARD AND ALBUM DETAILS WILL BE ON BACK

CLICK A BUTTON TO WATCH A YOUTUBE VIDEO


*/

let cardArr = [
    
];