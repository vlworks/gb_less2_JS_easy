// Первое задание

var userNumber;

function enterNumber(){
    userNumber = prompt('Введите число от 0 до 999');
}

function transferNumber(num){
    var numberArray = String(num).split('');
    var validNumber = {
        hundred: '',
        dozen: '',
        units: '',
    };
    switch(num.length){
        case 3:
        validNumber.hundred = 'Сотен: ' + numberArray[0] + '\n';
        validNumber.dozen = 'Десятков: ' + numberArray[1] + '\n';
        validNumber.units = 'Единиц: ' + numberArray[2] + '\n';
        break;
        case 2:
        validNumber.dozen = 'Десятков: ' + numberArray[0] + '\n';
        validNumber.units = 'Единиц: ' + numberArray[1] + '\n';
        break;
        case 1:
        validNumber.units = 'Единиц: ' + numberArray[0] + '\n';
    }
    
    for (var prop in validNumber){
        console.log(validNumber[prop]);
    }
}

enterNumber();

while(userNumber < 0 || userNumber > 999 || isNaN(userNumber)){
    alert('Вы ввели некоректное значение, повторите попытку');
    enterNumber();
    var validNumber = {
        hundred: '',
        dozen: '',
        units: '',
    };
}

transferNumber(userNumber);

// Второе задание

var basket = {
    goods: [['Рубашка мужская', 2, 1000], ['Рубашка женская', 1, 1500],['Зонтик', 8, 700]],
    basketSum: 0,
    countBasketPrice: function() {
        for(var i = 0; i < this.goods.length; i++){
            this.basketSum += this.goods[i][1] * this.goods[i][2];
        }
    },
}
basket.countBasketPrice();
console.log('Сумма всех товаров в корзине: ' + basket.basketSum);