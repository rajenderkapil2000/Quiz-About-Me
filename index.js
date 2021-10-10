var readLineSync= require('readline-sync');

score= 0;

var userName= readLineSync.question("What is Your Name? ");

console.log("Welcome " + userName + " Lets see how well you know me ")

function game(question, answer){

  var userAnswer= readLineSync.question(question);

  if(userAnswer===answer){
    console.log(userAnswer + " is Right");
    score = score + 1;
  }else{
     console.log(userAnswer + " is Wrong");
  }
  console.log("Your current score is: " + score);
  console.log("---------------------");
}

const questions = [{
 question: `
 What is my favourite color: 
 a: Red 
 b: Blue 
 c: Black 
 `,
 answer: "c"
},{
  question: `
  What is my favourite game: 
  a: Cricket 
  b: Football 
  c: Hockey 
  `,
  answer: "b"
},{
  question: `
  Who is my favourite athlete: 
  a: Virat Kohli 
  b: Cristiano ronaldo 
  c: lionel Messi 
  `,
  answer: "b"
},{
  question: `
  am I in a relationship?: 
  a: yes 
  b: no 
  `,
  answer: "b"
},{
  question: `
  How many girlfriends did I have till date?: 
  a: 4 
  b: 3 
  c: 0 
  `,
  answer: "b"
}]

for (var i=0; i<questions.length; i++){
  var currentQuestions= questions[i];
  game(currentQuestions.question, currentQuestions.answer);
}

console.log("Yay! your final score is: " + score);