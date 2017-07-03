// <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
// <script src="web_underscore.js"></script>
// var _ = require('underscore');
//
// function cartesianProductOf(){
//   return _.reduce(arguments, function(a, b) {
//     return _.flatten(_.map(a, function(x) {
//       return _.map(b, function(y) {
//         return x.concat([y]);
//       });
//       debugger;
//     }), true);
//   }, [ [] ]);
// };
//
// console.log(cartesianProductOf(['quick', 'lazy', 'fastest'], ['brown', 'black', 'grey', 'tan'], ['fox', 'dog', 'squirrel']));
// I sited stackoverflow for my answer using https://stackoverflow.com/questions/12303989/cartesian-product-of-multiple-arrays-in-javascript

function cartesianProductOf(array) {
  return array.reduce(function(a, b) {
    debugger;
    return a.map(function(x) {
      debugger;
      return b.map(function(y) {
        debugger;
        return x.concat(y);
      })
    }).reduce(function(a, b){ return a.concat(b) }, [])
  }, [["\n"]])
}

var answer = cartesianProductOf([['quick', 'lazy'], ['brown', 'black', 'grey'], ['fox', 'dog']]);
var merged = [].concat.apply([], answer);
debugger;
console.log(merged.join(' '));
