// для открытия и закрытия details

function handleNextClickProduct(){
    var $productList = document.querySelector('#product_list');
    $productList.removeAttribute('open');

    var $deliveryList = document.querySelector('#delivery_list');
    $deliveryList.setAttribute('open', 'open');
}

function handleNextClickDelivery(){
    var $productList = document.querySelector('#delivery_list');
    $productList.removeAttribute('open');

    var $deliveryList = document.querySelector('#comment_list');
    $deliveryList.setAttribute('open', 'open');
}

function handleNextClickStart(){
    var $productList = document.querySelector('#comment_list');
    $productList.removeAttribute('open');

    var $deliveryList = document.querySelector('#product_list');
    $deliveryList.setAttribute('open', 'open');
}

// создаем каталог товаров

var product = [
    {
        id: 1,
        name: 'Рубашка мужская',
        quantity: 2,
        price: 1000,
        img: ['img/shirt1.jpg', 'img/shirt2.jpg', 'img/shirt3.jpg'],
        imgDefault: 'img/shirt1.jpg',
    },
    {
        id: 2,
        name: 'Рубашка женская',
        quantity: 3,
        price: 1500,
        img: [],
        imgDefault: 'https://i1.ytimg.com/sh/nFCxMKeqg8k/showposter.jpg',
    },
    {
        id: 3,
        name: 'Зонтик',
        quantity: 8,
        price: 2000,
        img: [],
        imgDefault: 'https://i1.ytimg.com/sh/nFCxMKeqg8k/showposter.jpg',
    },
    {
        id: 4,
        name: 'Носки',
        quantity: 2,
        price: 3000,
        img: [],
        imgDefault: 'https://i1.ytimg.com/sh/nFCxMKeqg8k/showposter.jpg',
    },
    {
        id: 5,
        name: 'Шапка',
        quantity: 3,
        price: 4500,
        img: [],
        imgDefault: 'https://i1.ytimg.com/sh/nFCxMKeqg8k/showposter.jpg',
    },
    {
        id: 6,
        name: 'Перчатки',
        quantity: 8,
        price: 5000,
        img: [],
        imgDefault: 'https://i1.ytimg.com/sh/nFCxMKeqg8k/showposter.jpg',
    },
    {
        id: 7,
        name: 'Лыжи',
        quantity: 3,
        price: 6500,
        img: [],
        imgDefault: 'https://i1.ytimg.com/sh/nFCxMKeqg8k/showposter.jpg',
    },
    {
        id: 8,
        name: 'Парашют',
        quantity: 8,
        price: 7000,
        img: [],
        imgDefault: 'https://i1.ytimg.com/sh/nFCxMKeqg8k/showposter.jpg',
    },
];

function createCatalog() {
    var $catalog = document.querySelector('#catalog');
    for(var i = 0; i < product.length; i++){
        var $templateCard = document.querySelector('#templates_card').children[0].cloneNode(true);
        $templateCard.querySelector('.card__img').src = product[i].imgDefault;
        $templateCard.querySelector('.card__title').textContent = product[i].name;
        $templateCard.querySelector('.card__price').textContent = product[i].price + ' $';
        $templateCard.querySelector('.card__link').textContent = 'Buy';
        //dataset я кнопки купить
        $templateCard.querySelector('.card__link').dataset.id = product[i].id;
        $templateCard.querySelector('.card__link').dataset.name = product[i].name;
        $templateCard.querySelector('.card__link').dataset.price = product[i].price;
        $templateCard.querySelector('.card__link').dataset.imgDefault = product[i].imgDefault;

        $catalog.appendChild($templateCard);
    }
}

var cart = [];

function findInd(id){
    for(var i = 0; i < cart.length; i++){
        if(cart[i].id === id) {
            return i;
        }
    }
}

function isExist(id) {
    for(var i = 0; i < cart.length; i++){
        if(cart[i].id === id){
            return true;
        } 
    }
    return false;
}

function handleBuyClick(event) {
    if(event.target.tagName === 'BUTTON'){
        if(isExist(+event.target.dataset.id)){
            // есть в корзине
            var idx = findInd(+event.target.dataset.id);
            cart[idx].quantity++;
        } else {
            // добавляем
            cart.push({
                id: +event.target.dataset.id,
                name: event.target.dataset.name,
                price: +event.target.dataset.price,
                img: event.target.dataset.imgDefault,
                quantity: 1,
            });
        }
        // basket(cart);
        
    }
}

// пишем функцию для вывода содержимого корзины
// через фор, пока меньше длины рисуем структуру




function basket(arr) {
    var total = 0;
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        total += arr[i].price * arr[i].quantity;
        count += arr[i].quantity;
        }

    var message = '';
    if(arr.length){
        message = 'В корзине ' + count + ' товаров на сумму ' + total;
    } else {
        message = 'Корзина пуста';
    }

    var $basket = document.querySelector('#basket');
    $basket.textContent = message;
    
}


function init() {

    var $productButton = document.querySelector('#product_button');
    $productButton.addEventListener('click', handleNextClickProduct);

    var $productButton = document.querySelector('#delivery_button');
    $productButton.addEventListener('click', handleNextClickDelivery);

    var $productButton = document.querySelector('#start_button');
    $productButton.addEventListener('click', handleNextClickStart);

    
    createCatalog();

    var $catalog = document.querySelector('#catalog');
    $catalog.addEventListener('click', handleBuyClick);

    
        
}

window.addEventListener('load', init);
