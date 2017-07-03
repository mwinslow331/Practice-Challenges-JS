let arr = [
  ['red', 'blue', 'pink'],
  ['dog', 'cat', 'bird'],
  ['loud', 'quiet']
];

function allComb(arr) {
  var total = 1;
  var current = [];
  var result = [];

  for (var j = 0; j < arr.length; j++) {
    total *= arr[j].length;
    current[j] = 0;
    for (var i = 0; i < total; i++) {
      var inc = 1;
      result[i] = "";
      for (var k = 0; k < arr.length; k++) {
        result[i] += arr[k][current[k]] + ' ';
        if ((current[k] += inc) == arr[k].length)
        current[k] = 0;
        else
        inc = 0;
      }
  }

  }
  return (result);
}
console.log(allComb(arr));
