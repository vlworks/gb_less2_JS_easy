// создаем каталог

var product = [
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
    {
        name: 'Носки',
        quantity: 2,
        price: 1000,
    },
    {
        name: 'Шапка',
        quantity: 3,
        price: 1500,
    },
    {
        name: 'Перчатки',
        quantity: 8,
        price: 700,
    },
    {
        name: 'Лыжи',
        quantity: 3,
        price: 1500,
    },
    {
        name: 'Парашют',
        quantity: 8,
        price: 700,
    },
];

var $catalog = document.getElementById('catalog');

// <div class="card">
//         <img src="https://i1.ytimg.com/sh/nFCxMKeqg8k/showposter.jpg" alt="" class="card__img">
//         <p class="card__title">Рубашка мужская</p>
//         <p class="card__price">25 $</p>
//         <a href="#" class="card__link">Buy</a>
// </div>

for(var i = 0; i < product.length; i++){
    var $card = document.createElement('div');
    $card.classList.add('card');
    $catalog.appendChild($card);
    
    var $imgCard = document.createElement('img');
    $imgCard.src = 'https://i1.ytimg.com/sh/nFCxMKeqg8k/showposter.jpg'; // можно использовать массив с ссылками на картинки
    $imgCard.classList.add('card__img');
    $card.appendChild($imgCard);

    var $cardTitle = document.createElement('p');
    $cardTitle.textContent = product[i].name;
    $card.appendChild($cardTitle);

    var $cardPrice = document.createElement('p');
    $cardPrice.textContent = product[i].price + ' $';
    $card.appendChild($cardPrice);

    var $cardLink = document.createElement('a');
    $cardLink.href = '#';
    $cardLink.classList.add('card__link');
    $cardLink.textContent = 'Buy';
    $card.appendChild($cardLink);
}

// создаем корзину

var basket = {
    bProduct: [],
    push: function (name, price){
        this.bProduct.push(
            {
                name: name,
                price: price,
            },
        );
    },
    countBasket: function(){
        var basketSum = 0;
        for(var i = 0; i < this.bProduct.length; i++){
            basketSum += this.bProduct[i].price;
        };
        console.log('Sum: ' + basketSum);

        var $bSum = document.getElementById('bSum');
        $bSum.textContent = 'Сумма товаров в корзине: ' + basketSum + ' руб.';
    },
};

