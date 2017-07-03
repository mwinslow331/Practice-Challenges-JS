let arr = [['quick', 'lazy', 'fastest'], ['brown', 'black', 'grey'], ['fox', 'dog']]

function comboMaker(arr) {
  var length = arr.length;
  var total = 1;
  var current = [];
  var num = 1;

  for (var arrSize = 0; arrSize < length; arrSize++) {
    total *= arr[arrSize].length;
  }
  for (var nested = 0; nested < total; nested++) {
    current[nested] = [];
  }

  for (var i = 0; i < length; i++) {
    var count = arr[i].length;
    num *= arr[i].length;
    for (var j = 0; j < total; j) {
      for (var l = 0; l < count; l++) {
        for (var k = 0; k < (total/num); k++) {
          current[j][i] = arr[i][l];
          j++
        }
      }
    }
  }
  for (var i = 0; i < total; i++) {
    console.log(current[i].join(" "))
  }
}

comboMaker(arr)
