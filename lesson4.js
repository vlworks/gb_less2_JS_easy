// Первое задание

function numberToObject(num) {
    if(isNaN(+num) || num < 0 || num > 999) {
        console.log('Введите корректное число!');
        return {};
    }


var keys = ['units', 'dozen', 'hundreds'];
var obj = {};

var stringNum = num + '';

for(var i = stringNum.length - 1; i >= 0; i--) {
    var key = keys[stringNum.length - 1 - i];

    obj[key] = stringNum[i];
}
return obj;
}

console.log(numberToObject(365));

// Второе задание

var basket = {
    goods: [['Рубашка мужская', 2, 1000], ['Рубашка женская', 3, 1500],['Зонтик', 8, 700]],
    basketSum: 0,
    countBasketPrice: function() {
        for(var i = 0; i < this.goods.length; i++){
            this.basketSum += this.goods[i][1] * this.goods[i][2];
        }
    },
}
basket.countBasketPrice();
console.log('Сумма всех товаров в корзине: ' + basket.basketSum);


var basket = [
    {
        name: 'Рубашка мужская',
        quantity: 2,
        price: 1000,
    },
    {
        name: 'Рубашка женская',
        quantity: 3,
        price: 1500,
    },
    {
        name: 'Зонтик',
        quantity: 8,
        price: 700,
    },
];

function countBasketPrice(arr){
    var basketSum = 0;
    for (var i = 0; i < arr.length; i++){
        basketSum += arr[i].quantity * arr[i].price;
    }
    return basketSum;
} 

var basketSum = countBasketPrice(basket);
console.log('Сумма всех товаров в корзине: ' + basketSum);