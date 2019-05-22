// создаем каталог

var product = [
    {
        name: 'Рубашка мужская',
        quantity: 2,
        price: 1000,
        img: ['img/shirt1.jpg', 'img/shirt2.jpg', 'img/shirt3.jpg'],
        imgDefault: 'img/shirt1.jpg',
    },
    {
        name: 'Рубашка женская',
        quantity: 3,
        price: 1500,
        img: [],
        imgDefault: 'https://i1.ytimg.com/sh/nFCxMKeqg8k/showposter.jpg',
    },
    {
        name: 'Зонтик',
        quantity: 8,
        price: 700,
        img: [],
        imgDefault: 'https://i1.ytimg.com/sh/nFCxMKeqg8k/showposter.jpg',
    },
    {
        name: 'Носки',
        quantity: 2,
        price: 1000,
        img: [],
        imgDefault: 'https://i1.ytimg.com/sh/nFCxMKeqg8k/showposter.jpg',
    },
    {
        name: 'Шапка',
        quantity: 3,
        price: 1500,
        img: [],
        imgDefault: 'https://i1.ytimg.com/sh/nFCxMKeqg8k/showposter.jpg',
    },
    {
        name: 'Перчатки',
        quantity: 8,
        price: 700,
        img: [],
        imgDefault: 'https://i1.ytimg.com/sh/nFCxMKeqg8k/showposter.jpg',
    },
    {
        name: 'Лыжи',
        quantity: 3,
        price: 1500,
        img: [],
        imgDefault: 'https://i1.ytimg.com/sh/nFCxMKeqg8k/showposter.jpg',
    },
    {
        name: 'Парашют',
        quantity: 8,
        price: 700,
        img: [],
        imgDefault: 'https://i1.ytimg.com/sh/nFCxMKeqg8k/showposter.jpg',
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
    $imgCard.src = product[i].imgDefault;
    $imgCard.classList.add('card__img');
    $card.appendChild($imgCard);
    // добавляем атрибут счетчика массива к картинке
    $imgCard.setAttribute('name', product[i].name);
    //слушаем клики
    $imgCard.addEventListener('click', handleImgClick);

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
    //слушаем клики
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

// работа с изображениями

    function handleImgClick(event){
        // открываем окно
        var $modal = document.createElement('div');
        $modal.classList.add('catalog__modal');
        $catalog.appendChild($modal);

        // создаем кнопку закрыть
        var $closeModal = document.createElement('div');
        $closeModal.classList.add('catalog__modal_close');
        $closeModal.textContent = 'Закрыть';
        $modal.appendChild($closeModal);

        // создаем навигацию и центральное окно с изображением

        var $modalFlex = document.createElement('div');
        $modalFlex.classList.add('modal__flex');
        $modal.appendChild($modalFlex);

        var $modalFlexLeft = document.createElement('div');
        $modalFlexLeft.classList.add('modalFlex__left');
        $modalFlexLeft.textContent = '<';
        $modalFlex.appendChild($modalFlexLeft);

        var $modalFlexCenter = document.createElement('div');
        $modalFlexCenter.classList.add('modalFlex__center');
        $modalFlex.appendChild($modalFlexCenter);

        var $modalFlexRight = document.createElement('div');
        $modalFlexRight.classList.add('modalFlex__right');
        $modalFlexRight.textContent = '>';
        $modalFlex.appendChild($modalFlexRight);

        //созадем картинку

        var $modalImg = document.createElement('img');
        $modalImg.classList.add('modal__img');
        $modalImg.setAttribute('src', 'https://i1.ytimg.com/sh/nFCxMKeqg8k/showposter.jpg');
        $modalFlexCenter.appendChild($modalImg);

        //слушаем кнопку закрыть
        $closeModal.addEventListener('click', handleCloseClick);

        //функция закрытия модального окна
        function handleCloseClick(){
            $catalog.removeChild($modal);
        }
        
    }



    // <div class="catalog__modal">
    //             <div class="catalog__modal_close">Закрыть</div>
    //             <div class="modal__flex">
    //                 <div class="modalFlex__left"><</div>
    //                 <div class="modalFlex__center"><img class="modal__img" src="https://i1.ytimg.com/sh/nFCxMKeqg8k/showposter.jpg" alt=""></div>
    //                 <div class="modalFlex__right">></div>
    //             </div>
    //         </div>






