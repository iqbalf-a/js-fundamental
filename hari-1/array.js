// push
// pop
// shift remove first item array
// unshift add new at first index
// slice
// splice

let arr = [1, undefined, null, "akuu", 123];
// arr[5] = "akuuh5"
// arr.push("asdsad");
// arr.pop();
let arr2 = arr.slice(1, 3);
arr.splice(1, 2);
console.log(arr2);
console.log(arr);