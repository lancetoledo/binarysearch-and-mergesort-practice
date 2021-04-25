let array = [9, 30, 4, 18, 6, 1, 5];
// let sortedArray = [1, 4, 5, 6, 9, 18, 30];

let target1 = 5;

let start = 0;
let end = array.length - 1;

// Function that divides an array by half recursively untill there is one element then compares the left and right and returns a merged array that is sorted
function mergeSort(arr) {
  //Base case for when the length is <=1 return the arr
  if (arr.length <= 1) {
    return arr;
  }
  //Declared the mid which will be useful in cutting the array in half
  let mid = Math.floor(arr.length / 2);
  //Left recursively calls the function but with only the left side of the array as the parameter
  let left = mergeSort(arr.slice(0, mid));
  //Calls the function again with right side of the array
  let right = mergeSort(arr.slice(mid));
  //Return and call the helper function with the left and right as parameters
  return merge(left, right);
}

//Need a subroutine that handles the merging of arrays after the array is broken down to 1 item
function merge(left, right) {
  //Declare an empty array that the sorted items will go in to
  let sorted = [];
  //Loop that continues while there is items in both arrays
  while (left.length && right.length) {
    //Conditional if the 1st element in the left array is bigger push the 1st element in the RIGHT array
    if (left[0] > right[0]) {
      sorted.push(right.shift());
    } else {
      sorted.push(left.shift());
    }
  }
  //Combine arrays using concat and if anything is left over concat that to the end of the array
  return sorted.concat(left.slice().concat(right.slice()));
}

// console.log(mergeSort(array));

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

console.log(binarySearch(mergeSort(array), target1, start, end));
