//1. use strict
//added in ES6
//use this for vanilla Javascript.
'use strict';

//2. Variable
//let (added in ES6)

for (let i=0; i<11; i++) {
    if (i%2 === 0) {
        console.log(`q1.${i}`);
    }
}

for (let i=0; i<11; i++) {
    if (i>8) {
        break;
    }
    console.log(`q2. ${i}`)
}