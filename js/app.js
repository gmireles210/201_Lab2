'use strict';

var user = prompt('Hello! What is your name?');
console.log('name of user:', user);

var school = prompt('Did you attend University?');
console.log('education:', school);

var job = prompt('Have you had a career before?');
console.log('work history:', job);

var travel = prompt('Have you traveled a lot?');
console.log('travel:', travel);

var goal = prompt('Do you plan on going to University?');
console.log('school goals:', goal);

var tech = prompt('Do you want to work in tech?');
console.log('tech job:', tech);

if (school === 'y' || school === 'Y') {
  console.log('Went to school:', 'great');
  // do stuff here
}

if (school === 'y' && goal === 'y') {
  console.log('Higher Education:', 'smart')
}