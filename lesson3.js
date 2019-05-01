/* Первое задание */
console.log('=== Первое задание ===');

var x = 0;
var y = 100;
var simpleNumbers = '';
var simple = false;
    while (x <= (y - 1)) {
        ++x;
        var div = 1;
        while (div <= (x - 1)) {
            simple = true;
            ++div;
            var divRes = x / div;
            if (divRes == Math.floor(divRes)) {
                if ((div == 1) || div == x) {
                    simple = true;
                } else {
                    simple = false;
                    break;
                }
            }
        }
        if (simple) {
            simpleNumbers = simpleNumbers + x + " ";
        }
    }
    console.log(simpleNumbers);

/* Второе задание */
console.log('=== Второе задание ===');


var goods = [['Рубашка мужская', 2, 1000], ['Рубашка женская', 1, 1500],['Зонтик', 1, 700]];

function countBasketPrice(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        count = count + goods[i][1]*goods[i][2];
    }
    console.log(count);
}

countBasketPrice(goods);


/* Третье задание */
console.log('=== Третье задание ===');


for(var num = 0; num < 10; console.log(num), num++){}

/* Четвертое задание */
console.log('=== Четвертое задание ===');


for(var str = ' '; str.length < 21; console.log(str), str += 'x'){}

    
