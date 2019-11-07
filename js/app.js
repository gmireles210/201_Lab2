'use strict';

var user = prompt('Hello! What is your name?');
console.log('name of user:', user);

var school = prompt('Did I go to school at UW?');
console.log('education:', school);

var job = prompt('Was I in the Army?');
console.log('work history:', job);

var travel = prompt('Have I traveled a lot?');
console.log('travel:', travel);

var goal = prompt('Did I go to graduate school?');
console.log('school goals:', goal);

var tech = prompt('Do I work in the tech industry?');
console.log('tech job:', tech);

if (school.toUpperCase() === 'yes' || school === 'YES') {
  console.log('Went to school:', 'great');
  // do stuff here
}

if (school === 'n' && goal === 'y') {
  console.log('Higher Education:', 'False')
}