'use strict';

var user = prompt('Hello! What is your name?');

var school = prompt('Did I go to school at UW? Please answer with a yes or no');
// console.log('education:', school);
if (school.toLowerCase() === 'y' || school.toLowerCase() === 'yes') {
  alert('Wrong answer to this question');
} else {
  alert('Correct! I went to the University of Washington');
}

/*var job = prompt('How many years was I in the Army?');
//console.log('work history:', job);
if (job === '10' || job === 'ten') {
  alert('Correct!, I was in the Army);
} else {
  alert('Wrong answer to this question');
}*/

/*var travel = prompt('Have I traveled a lot?');
//console.log('travel:', travel);
if (travel.toLowerCase() === 'y' || travel.toLowerCase() === 'yes') {
  alert('Yes, I have traveled a lot!');
} else {
  alert('Wrong, I have traveled a lot.);
}*/

var snow = prompt('How many countries have I snowboarded in?');
//console.log('snow goals:', goal);
if (snow === '7' || snow.toLowerCase() === 'seven') {
  alert('Yes, I have been to 7 different countries');
} else {
  alert('Wrong, I have been to 7 different countries');
}

var tech = prompt('Where did I start getting into coding?');
//console.log('tech job:', tech);
if (tech.toLowerCase() === 'Seattle' || tech.toLowerCase() === 'Seattle, Washington') {
  alert('Yes, I started to code in Seattle!');
} else {
  alert('Wrong, I started in Seattle.' + tech);
}

document.getElementById('user').innerHTML = user;
