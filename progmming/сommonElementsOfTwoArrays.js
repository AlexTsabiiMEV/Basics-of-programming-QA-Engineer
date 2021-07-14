// 4. Нахождение общих элементов двух массивов(2 способа = встроенной функцией и через ручной перебор элементов)

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

var uniquearr = arr.filter(onlyUnique);
var uniquearr2 = arr2.filter(onlyUnique);

let message = 'Общие элементы двух массивов (встроенная функция): ';
for (let same of uniquearr) {
    if (uniquearr2.includes(same))
        message += ` ${same};`;
}
console.log(message);