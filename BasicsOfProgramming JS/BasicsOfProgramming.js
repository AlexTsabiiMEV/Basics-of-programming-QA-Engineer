// масив 1
var arr = [];
for (var i = 0, t = 30; i < t; i++) {
    arr.push(Math.round(Math.random() * t))
}

// масив 2
var arr2 = [];
for (var i = 0, t = 10; i < t; i++) {
    arr2.push(Math.round(Math.random() * t))
}


function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

console.log(arr);
console.log(arr2);

// 2. Сумма элементов в массиве

let sum = ((attr) => attr.reduce((a, b) => a + b))(arr);

console.log('Сумма элементов в массиве = ' + sum);

// 3. Найти минимальный и максимальный элемент в массиве (2 способа = встроенной функцией и через ручной перебор элементов)

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

// 4. Нахождение общих элементов двух массивов(2 способа = встроенной функцией и через ручной перебор элементов)

var uniquearr = arr.filter(onlyUnique);
var uniquearr2 = arr2.filter(onlyUnique);

let message = 'Общие элементы двух массивов (встроенная функция): ';
for (let same of uniquearr) {
    if (uniquearr2.includes(same))
        message += ` ${same};`;
}
console.log(message);


// 5. Подсчитать количество вхождений слова в предложении.

var string = 'Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit';

function countwords(str) {

    str = str.replace(/[^a-z,A-Z ]/g, ''); // удалил все символы кроме букв и пробелов
    str = str.replace(/  +/g, ' ').trim().toLowerCase(); // удалил двойные пробелы и пробелы по краям, сделал нижний регистр

    var arr = str.split(' ');

    var obj = {};

    arr.forEach(function (item) {
        item in obj ? obj[item]++ : obj[item] = 1;
    });

    Object.getOwnPropertyNames(obj).forEach(
        function (item) {
            console.log(item + ': ' + obj[item]);
        }
    );
}

console.log('Количество слов:');
countwords(string);



