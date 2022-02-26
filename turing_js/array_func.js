var fruits = ['Apple', 'Banana'];

// 在陣列中尋找項目的索引indexOf
var pos = fruits.indexOf('Banana'); // 1

// 長度length
console.log(fruits.length); // 2

// 取得值[]
var first = fruits[0]; // Apple

// 增加項目到末端push
var newLength = fruits.push('Orange'); // ["Apple", "Banana", "Orange"]

// 疊代iteration forEach
fruits.forEach(function (item, index) {
    console.log(item, index);
    });
fruits.forEach(function(item, index, array) {
    console.log(item, index);
  });
  // Apple 0
  // Banana 1


// 移除陣列末端項目pop
var last = fruits.pop(); // 移除 (最末端的) Orange
// ["Apple", "Banana"];

// 移除陣列前端項目shift
var first = fruits.shift(); // 移除 (最前端的) Apple
// ["Banana"];

// 加入項目至陣列前端unshift
var newLength = fruits.unshift('Strawberry') // 加到陣列前端
// ["Strawberry", "Banana"];

// 移除指定索引位置的項目splice
var removedItem = fruits.splice(position, n); // 移除 position 起的 n 個項目
// ["Strawberry", "Mango"]

// 複製陣列slice
var shallowCopy = fruits.slice(); // 這就是複製陣列的方式
// ["Strawberry", "Mango"]


