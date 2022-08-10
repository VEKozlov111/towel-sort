
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix == undefined || matrix.length === 0) { return [] }
  else {
    let a = matrix.map(function (item, index, array) {

      if (index % 2 != 0) {
        item.reverse()
      }
      return item.join();

    });
    let v = a.join(',');
    return v.split(',').map(function (item) { return Number(item) })
  }
  //return a[0].split(',').map(function (item) { return Number(item) })

};
/*console.log(towelSort([
  [1, 2],
  [3, 4],
]));*/
