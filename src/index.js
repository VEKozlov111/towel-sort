
// You should implement your task here.

module.exports = function towelSort(matrix) {

  let a = matrix.map(function (item, index, array) {
    item.join();
    return array.join(',')
  });
  return a[0].split(',').map(function (item) { return Number(item) })

};
/*console.log(towelSort([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]));*/
