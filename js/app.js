'use strict';

var user = prompt('Hello! What is your name?');
console.log('name of user:', user);

var school = prompt('Where did I go to school?');
console.log('education:', school);

var job = prompt('Was I in the Army?');
console.log('work history:', job);

var travel = prompt('Have I traveled a lot?');
console.log('travel:', travel);

var goal = prompt('Did I go to graduate school?');
console.log('school goals:', goal);

var tech = prompt('Do I work in the tech industry?');
console.log('tech job:', tech);

if (school === 'y' || school === 'Y') {
  console.log('Went to school:', 'great');
  // do stuff here
}

if (school === 'y' && goal === 'y') {
  console.log('Higher Education:', 'smart')
}