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
    // добавляем атрибут названия к кнопке купить
    $cardLink.setAttribute('name', product[i].name);
    
    $card.appendChild($cardLink);

    $cardLink.addEventListener('click', handleBuyClick);
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
        var basketSum = 0;
        for(var i = 0; i < this.bProduct.length; i++){
            basketSum += this.bProduct[i].price;
        };
        
        $bSum.textContent = 'В корзине ' + this.bProduct.length + ' товаров на сумму ' + basketSum + ' $';

        // список товаров, позже попробую улучшить, чтобы товары не дублировались, а увеличивался показатель кол-во
        // надо сделать проверку при пуше массива корзины, есть ли элемент с таким же названием, если есть, .quantity++
        $basketList = document.getElementById('basket__list');
        $basketLi = document.createElement('li');
        $basketLi.textContent = name + ' ' + price + ' $';
        $basketList.appendChild($basketLi);
    },
};

var $bSum = document.getElementById('bSum');
if(basket.bProduct.length < 1){
    var message = 'Корзина пустая.';
}
$bSum.textContent = message;

// пушим массив корзины через клик по кнопке buy

   function handleBuyClick(event){
        var productName = event.target.name;
        var productPrice = getPrice();

        function getPrice(){
            for(var i = 0; i < product.length; i++){
                if(productName == product[i].name){
                    var productPrice = product[i].price;
                }
            }
            return productPrice;
        }

        basket.push(productName, productPrice);
    }






