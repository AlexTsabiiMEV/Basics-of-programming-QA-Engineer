// 3. Найти минимальный и максимальный элемент в массиве (2 способа = встроенной функцией и через ручной перебор элементов)

var arr = [];
for (var i = 0, t = 30; i < t; i++) {
    arr.push(Math.round(Math.random() * t))
}

var arr2 = [];
for (var i = 0, t = 10; i < t; i++) {
    arr2.push(Math.round(Math.random() * t))
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

console.log(arr);
console.log(arr2);

console.log('Макс и мин элемент в масиве (встроеная функция):')
let max = Math.max.apply(null, arr);

console.log('Максимальный элемент в массиве = ' + max);

let min = Math.min.apply(null, arr);

console.log('Минимальный элемент в массиве = ' + min);

console.log('Макс и мин элемент в масиве (ручной перебор):')

let max1 = arr.reduce((a, b) => a > b ? a : b);

console.log('Максимальный элемент в массиве = ' + max1);

let min1 = arr.reduce((a, b) => a < b ? a : b);

console.log('Минимальный элемент в массиве = ' + min1);