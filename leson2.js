
/* Первое задание */
console.log('=== Первое задание ===');

var a = 1, b = 1, c, d;

c = ++a; // сначала выполняется инкрементирование, потом возвращается переменная
d = b++; // санчала возвращается переменаня, потом происходит инкременитрование

с = (2+ ++a); // 2 + 3, а возвращается уже инкременитрованное
d = (2+ b++); // 2 + 2, сначала возвращается b с результатом 2, выполняется действие, затем b инкрементируется и становится равным 3

a = 3;
b = 3;
/* все действия с инкременитрованием привели переменные к данным результатам */

/* Второе задание */
console.log('=== Второе задание ===');


var a = 2;
var x = 1 + (a *= 2); // 1 + (2 * 2);
console.log(x); // 5

/* Третье задание */
console.log('=== Третье задание ===');

var a = 2;
var b = -3;

var result;

if (a >= 0 && b >= 0) {
    result = a - b;
    console.log(result);
} else if (a < 0 && b < 0) {
    result = a * b;
    console.log(result);
} else {
    result = a + b;
    console.log(result);
}

/* Четвертое задание */
console.log('=== Четвертое задание ===');

var a = +prompt('введите значение от 1 до 15');

switch(a){
    case 1:
    alert('1');
    case 2:
    alert('2');
    case 3:
    alert('3');
    case 4:
    alert('4');
    case 5:
    alert('5');
    case 6:
    alert('6');
    case 7:
    alert('7');
    case 8:
    alert('8');
    case 9:
    alert('9');
    case 10:
    alert('10');
    case 11:
    alert('11');
    case 12:
    alert('12');
    break;
    case 13:
    alert('13');
    case 14:
    alert('14');
    case 15:
    alert('15');
}

/* Пятое задание */
console.log('=== Пятое задание ===');

function addition (a, b){
    return a + b;
}

function subtraction (a, b){
    return a - b;
}

function multiplication (a, b){
    return a * b;
}

function division (a, b){
    return a / b;
}

console.log(addition(2, 5));
console.log(subtraction(2, 5));
console.log(multiplication(2, 5));
console.log(division(2, 5));

/* Шестое задание */
console.log('=== Шестое задание ===');

function mathOperation(a, b, operation){
    switch (operation){
        case 'Сложение':
        console.log('Результат сложения: ' + addition(a, b));
        break;
        case 'Вычетание':
        console.log('Результат вычетания: ' + subtraction(a, b));
        break;
        case 'Умножение':
        console.log('Результат умножения: ' + multiplication(a, b));
        break;
        case 'Деление':
        console.log('Результат деления: ' + division(a, b));
        break;
    }
}

mathOperation(2, 3, 'Умножение');

/* Седьмое задание */
console.log('=== Седьмое задание ===');

console.log(null == 0); // false
console.log(null > 0); // false
console.log(null >= 0); // true 
/*С точки зрения математики, если у нас есть два числа, x и y, и если x не меньше, чем y, тогда x должно быть больше чем y или равно ему.
Результат работы абстрактного алгоритма сравнения.
*/

/* Восьмое задание */
console.log('=== Восьмое задание задание ===');

var val = 2, pow = 3;
function power(val, pow){
    if (pow === 1){
        return val;
    } else {
        return val * power(val, pow - 1);
    }
}
console.log(val + ' в степени ' + pow + ' равно ' + power(val, pow));

