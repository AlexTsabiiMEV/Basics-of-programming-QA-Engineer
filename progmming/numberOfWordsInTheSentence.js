// 5. Подсчитать количество вхождений слова в предложении

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