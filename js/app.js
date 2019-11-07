'use strict';

var user = prompt('Hello! What is your name?');

var school = prompt('Did I go to school at UW? Please answer with a yes or no').toUpperCase();
// console.log('education:', school);
if (school === 'Y' || school === 'YES') {
  alert('Correct! I went to the University of Washington');
} else {
  alert('Wrong answer to this question');
}

var job = prompt('How many years was I in the Army?');
//console.log('work history:', job);
if (job === '10' || job === 'ten') {
  alert('Correct!, I was in the Army');
} else {
  alert('Wrong answer to this question');
}

var travel = prompt('Have I traveled a lot?');
//console.log('travel:', travel);
if (travel === 'y' || travel === 'yes') {
  alert('Yes, I have traveled a lot!');
} else {
  alert('Wrong, I have traveled a lot.');
}

var snow = prompt('How many countries have I snowboarded in? Please answer using numbers spelled out').toLowerCase();
//console.log('snow goals:', goal);
if (snow === 'seven') {
  alert('Yes, I have been to 7 different countries');
} else {
  alert('Wrong, I have been to 7 different countries');
}

var tech = prompt('Where did I start getting into coding?');
//console.log('tech job:', tech);
if (tech === 'Seattle') {
  alert('Yes, I started to code in Seattle!');
} else {
  alert('Wrong, I started in Seattle.');
}

var user1 = alert('Thank you for playing ' + user);





