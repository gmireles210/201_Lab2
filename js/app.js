'use strict';

// CREATE a function -Crystal
function guessingPromts() {
  // SEMICOLM was missing -crystal
  var correctanswer = 0;

  var user = prompt('Hello! What is your name?');

  var school = prompt('Did I go to school at UW? Please answer with a yes or no').toUpperCase();
  // console.log('education:', school);
  if (school === 'Y' || school === 'YES') {
    alert('Correct! I went to the University of Washington');
    correctanswer++;
  } else {
    alert('Wrong answer to this question');
  }
  
  var job = prompt('How many years was I in the Army?');
  //console.log('work history:', job);
  if (job === '10' || job === 'ten') {
    alert('Correct!, I was in the Army');
    correctanswer++;
  } else {
    alert('Wrong answer to this question');
  }
  
  var travel = prompt('Have I traveled a lot?');
  //console.log('travel:', travel);
  if (travel === 'y' || travel === 'yes') {
    alert('Yes, I have traveled a lot!');
    correctanswer++;
  } else {
    alert('Wrong, I have traveled a lot.');
  }
  
  var snow = prompt('How many countries have I snowboarded in? Please answer using numbers spelled out').toLowerCase();
  //console.log('snow goals:', goal);
  if (snow === 'seven') {
    alert('Yes, I have been to 7 different countries');
    correctanswer++;
  } else {
    alert('Wrong, I have been to 7 different countries');
  }
  
  var tech = prompt('Where did I start getting into coding?');
  //console.log('tech job:', tech);
  if (tech === 'Seattle') {
    alert('Yes, I started to code in Seattle!');
    correctanswer++;
  } else {
    alert('Wrong, I started in Seattle.');
  }

  // number question
  var number;
  var counter = 1;

  while(number !== 13) {
    number = parseInt(prompt('what is your fav number?'));

    if (number < 13) {
      alert('you guessed too low');
      counter++;
    } else if (number >13) {
      alert('you guessed too high');
      counter++;
    } else if (number === NaN || number === null) {
      alert('please enter a real number');
      counter++;
    } else if (number === number[13]) {
      alert('nice job, my fav number is ' + '' + number[13]);
      correctanswer++;
    } if (counter >= 5) {
      alert('Too many attempts, my fav number is 13');
      break;
    }
  }

  // Beer question
  var beer = ['IPA', 'Pilsner', 'Dunkel', 'Meade'];
  var answer = prompt('what is your favorite beer?');

  for (var i = 6; i >= 0; i--) {

    var beerPlease = prompt('What is my fav beer?');
    if (beer.includes(beerPlease)) {
      alert('nice job, i really like' + ' ' + beerPlease);
      correctanswer++;
      break;
    } else {
      alert('That is wrong! ' + beer + ' are the ones I like!');
    }
  }

  // REMOVE var user1 -crystal
  alert('Thank you for playing ' + user + '. You guessed ' + correctanswer + ' out of 7 right! Great job!');

}

guessingPromts();
