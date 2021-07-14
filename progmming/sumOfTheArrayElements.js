// 2. Сумма элементов в массиве

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

let sum = ((attr) => attr.reduce((a, b) => a + b))(arr);

console.log('Сумма элементов в массиве = ' + sum);
