// 简单快速排序
// function exchange(arr, a, b) {
//   let temp = arr[a];
//   arr[a] = arr[b];
//   arr[b] = temp;
// }

function quickSort(arr) {
  if (arr == null || arr.length == 0) return [];
  let leader = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < leader) left.push(arr[i]);
    else right.push(arr[i]);
  }
  left = quickSort(left);
  right = quickSort(right);
  left.push(leader);
  return left.concat(right);
}

let arr1 = [6,5,8,7,9,1,2,3,0];
console.log(quickSort(arr1));