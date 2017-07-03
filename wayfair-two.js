let arr = [['quick', 'lazy'], ['brown', 'black', 'grey'], ['fox', 'dog']]

function comboMaker(arr) {
  var length = arr.length;

  var solutions = 1;

  for (var i = 0; i < length; i++) {
    solutions *= arr[i].length;
  }
  var combinations = [];
  for (var i = 0; i < solutions; i++) {
    combinations[i] = [];
  }

  var previous = 1;

  for (var i = 0; i < length; i++) {
    for (var j = 0; j < solutions; j) {
      var wordCount = arr[i].length;
      previous *= arr[i].length;

      for (var l = 0; l < wordCount; l++) {
        for (var k = 0; k < (solutions/previous); k++) {
          combinations[j][i] = arr[i][l];
          j++
        }
      }
    }
  }
  for (var i = 0; i < solutions; i++) {
    console.log(combinations[i].join(" "))
  }
}

comboMaker(arr)
