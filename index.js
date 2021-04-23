let array = [9, 30, 4, 18, 6, 1, 5];
let sortedArray = [1, 4, 5, 6, 9, 18, 30];

let target1 = 5;

let start = 0;
let end = array.length - 1;

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));

  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      sorted.push(right.shift());
    } else {
      sorted.push(left.shift());
    }
  }
  return sorted.concat(left.slice().concat(right.slice()));
}

console.log(mergeSort(array));

function binarySearch(arr, val, start, end) {
  if (start > end) {
    return false;
  }
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] == val) {
    return true;
  }
  if (arr[mid] > val) {
    return binarySearch(arr, val, start, mid - 1);
  } else {
    return binarySearch(arr, val, mid + 1, end);
  }
}

console.log(sortedArray);
console.log(binarySearch(sortedArray, 5, start, end));
