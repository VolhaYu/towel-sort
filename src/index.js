
module.exports = function towelSort (matrix) {
  let arr = [];
  if (typeof matrix == "undefined") {
    return [];
  }
  matrix = matrix.map((value, index) => {
    if(index % 2 === 0) {
      arr.push(matrix[index]);
    } else {
      arr.push(matrix[index].reverse());
    }
    });

arr = arr.flat();
  return arr;

 }
 

