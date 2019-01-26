# Vec.js

```js
const Vec = require('Vec');

Vec([1, 2, 3]).f(v => v + 10).func;
// [v => v + 10]

Vec([1, 2, 3]).f(v => v + 10).exec;
// [11, 12, 13]

Vec([1, 2, 3]).f(v => v + 10).QED([11, 12, 13]);
// true
```
