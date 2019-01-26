const Vec = require('./Vec');

console.log(Vec([1,2,3]).f(v => v + 10).func);
console.log(Vec([1,2,3]).f(v => v + 10).exec);
console.log(Vec([1,2,3]).f(v => v + 10).QED([11,12,13]));
