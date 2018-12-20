console.log("hello world");

var a = 5;
var b = 4;
var sum = a + b;

// go to console
var zhenzhen = "Zhenzhen";
console.log(zhenzhen);

// array
var cars = ["Saab","Volvo","BMW"];

 var person ={
   firstName: "John",
   lastName: "Doe",
   age: 50,
   eyeCOlor: "blue"
 };

 console.log(person);

 var a = 5;
 var b = 5;
 var theNumbersMatch

 if (a==b){
   theNumbersMatch = true;
 } else {
   theNumbersMatch = false;
 }

function myFunction(p1, p2){
  return p1 + p2;
}

var pens;
pens = ["red", "blue", "green", "orange"];
// below is a METHOD that will manipulate the variables that are stored in the array
pens.reverse();
pens.shift();
pens.unshift("purple", "black");
console.log(pens);
//all these methods are being used simultaneously. the data inside the variable "pens" got reversed, shifted (kicks first one Out)
// pop (kicks the last one out) and push (adds in new strings)

pens.pop();
pens.push("pink", "prussian blue");

function multiply(){
  var x = 3;
  var y = 4;
  var result = x * y;
  console.log("3 multiplied by 4 is: " + result);
}
//  type in "multiply()" into the console
multiply();

var myElement = document.getElementById("intro");

// use JS varable and querySElector to gain access to two html dom elements
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  // created a variabe called myname
  var myName = prompt('Please enter your name.');
  // saved user input into the variable
  localStorage.setItem('name', myName);
  // replaced original text concent with new variable thats being defined inside this function
  myHeading.textContent = 'Hello ' + myName + '. Are you going to stay forever? Please. Do not leave me.';
}
// when someone clicks on this button, it will call the function setusername
myButton.onclick = function(){
  setUserName();
}














var cards = ['If you had a choice to take a bullet for your friend, would you save yourself instead?',
             'Have you ever thought you were meant for a different gender?',
             'Do you sometimes bash others for the sake of your own superiority?',
             'Do you ever feel you are the least capable in your family?',
             'Have you secretly thought you might be attracted to the same sex?',
             'Do you sometimes lie about your talents to impress others?',
             'Have you ever slept with someone you should NOT have?',
             'Do sometimes feel women are better than men? Or vice versa?',
             'Have you ever stolen from your family?',
             'Do you sometimes lie about your talents to impress others?',
             'Have you ever coveted the significant other of your best friend?',
             'Do you ever feel you are the ugliest one in the room?',
             'Do you ever envy the abilities and status of your friends to the point of hatred?',
             'Do you sometimes wish you were a difference race?',
             'Do you sometimes feel unaccomplished for your age?',
             'Do you ever feel you are too smart for the people around you?',
             ]

function nextQuestion(){
  var card = document.querySelector('.box');
  var qNumber = Math.floor(Math.random() * 16);
  card.textContent = cards[qNumber];
}

var questionButton = document.getElementById("qButton");

questionButton.onclick = function(){
  nextQuestion();
}


var yesButton = document.getElementById("yesButton");

yesButton.onclick = function(){
  yes();
  var count = document.querySelector('.box2');
 var number = result.yes + result.no;
 count.textContent = number;
}

var noButton = document.getElementById("noButton");
noButton.onclick = function(){
  no();
  var count = document.querySelector('.box2');
 var number = result.yes + result.no;
 count.textContent = number;
}

var revealButton = document.getElementById("Reveal");
revealButton.onclick = function(){
  show();
}

var restartButton = document.getElementById("restart");
restartButton.onclick = function(){
  startOver();
}


// var box = document.querySelector('.box');

var result = {
  yes: 0,
  no: 0
}


function yes() {
  result.yes = result.yes +1
}

function no (){
    result.no = result.no +1
}

function startOver(){
  result.yes = 0;
  result.no = 0;
  for(var i = 0 ; i < boxes.length; i++) {
     boxes[i].classList.remove('yes');
     boxes[i].classList.remove('no');
  }
}


var boxes = document.querySelectorAll('.box1')


function show() {
  var yesNum = result.yes;
  for(var i = 0 ; i < boxes.length; i++) {
    if(yesNum > 0) {
      boxes[i].classList.add('yes');
      yesNum--
    }else {
      boxes[i].classList.add('no');
    }
  }

}
