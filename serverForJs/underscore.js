var _ = require('underscore');
// underscore has to use this name when you define underscore.
// now we can use this underscore module beacuse we required underscore files.

var arr = [3,6,9,12,"BOOM!"];

console.log(_.last(arr));