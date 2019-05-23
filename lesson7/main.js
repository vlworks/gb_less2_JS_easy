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
        imgDefault: 'img/gshirt1.jpg',
    },
    {
        id: 3,
        name: 'Зонтик',
        quantity: 8,
        price: 2000,
        img: [],
        imgDefault: 'img/umbrella1.jpg',
    },
    {
        id: 4,
        name: 'Носки',
        quantity: 2,
        price: 3000,
        img: [],
        imgDefault: 'img/socks1.jpg',
    },
    {
        id: 5,
        name: 'Шапка',
        quantity: 3,
        price: 4500,
        img: [],
        imgDefault: 'img/cap1.jpg',
    },
    {
        id: 6,
        name: 'Перчатки',
        quantity: 8,
        price: 5000,
        img: [],
        imgDefault: 'img/gloves1.jpg',
    },
    {
        id: 7,
        name: 'Лыжи',
        quantity: 3,
        price: 6500,
        img: [],
        imgDefault: 'img/skiing1.jpg',
    },
    {
        id: 8,
        name: 'Парашют',
        quantity: 8,
        price: 7000,
        img: [],
        imgDefault: 'img/parachute1.jpg',
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
        $templateCard.querySelector('.card__link').dataset.imgdefault = product[i].imgDefault;

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
                quantity: 1,
                img: event.target.dataset.imgdefault,
            });
        }
        basket(cart);
        handleBasketCHANGE();

        var $basketTable = document.querySelector('#basket__table');
        $basketTable.addEventListener('click', handleDeleteClick);
        $basketTable.addEventListener('change', handleQuantityChange); // сначало было input, но он перехватывает и не дает ввести 2х значное число
        
    }
}

// пишем функцию для вывода содержимого корзины

function handleBasketCHANGE () {
      var $basketTable = document.querySelector('#basket__table');
      $basketTable.innerHTML = '';
      
      for(var i = 0; i < cart.length; i++){
        var $basketMain = document.querySelector('.basket__main').cloneNode(true);

        $basketMain.querySelector('.basket__img').src = cart[i].img;
        $basketMain.querySelector('.basket__name').textContent = cart[i].name;
        $basketMain.querySelector('.basket__quantity').value = cart[i].quantity;
        $basketMain.querySelector('.basket__price').textContent = cart[i].price;
        $basketMain.querySelector('.basket__summary').textContent = cart[i].price * cart[i].quantity;
        $basketMain.querySelector('.basket__del').textContent = 'Удалить';

        $basketMain.querySelector('.basket__del').dataset.id = cart[i].id;
        $basketMain.querySelector('.basket__quantity').dataset.id = cart[i].id;

        $basketTable.appendChild($basketMain);
       
      }
     
      
      
      
}




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

function handleDeleteClick(event){
    if(event.target.tagName == 'BUTTON'){
        
        var idx = findInd(+event.target.dataset.id);
        cart.splice(idx, 1);

        handleBasketCHANGE();
        basket(cart);
    }
}

function handleQuantityChange(event){
    if(event.target.tagName == 'INPUT'){
        var idx = findInd(+event.target.dataset.id);
        cart[idx].quantity = +event.target.value;

        basket(cart);
        handleBasketCHANGE();

    }
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
