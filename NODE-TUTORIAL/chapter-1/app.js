// module - encapsulated code ( share the least )
// NOTE - EVERY FILE in node is a module

const enemiesOfStarks = require('./5-arithematics')


// const Cersi = 'Power is power'
// const John = 'John Snow'

// const sayMyName = (name) => {
//     console.log(`hi there! im ${name}`);
// }
// const GOT = (character) => {
//     console.log(`My name is ${John} and i know nothing!`)
// }

// //sayMyName('Pari')
// GOT()

// Access the exported module 
// const names = require('./2-names')
// const sayMyLine = require('./3-dailogues')

// console.log(names);
// we'll get an object

// sayMyLine(names.Daenerys)

// const literallyAnything = require('./4-dataexports')

// console.log(literallyAnything.starks[1])
require('./5-arithematics')

enemiesOfStarks()