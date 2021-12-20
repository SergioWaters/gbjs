'use strict';

let filterPopup = document.querySelector('.filterPopup');
let filterLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');

filterLabel.addEventListener('click', function () {
    filterPopup.classList.toggle('hidden');
    filterLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function (header) {
    header.addEventListener('click', function (event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function () {
    filterSizes.classList.toggle('hidden');
});


// добавить корзину к странице
// https://youtu.be/z230064ovSE

// 1 счетчик на изображении корзины
// 2 всплывающее по клику меню
// 3 добавление товара в корзину по клику на карточке
// во всплывающем меню должны быть: {name, count, price, total, grandTotal}
class Product {
    constructor(id, title, description, price,) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
    }
};

const products = [
    new Product(
        0,
        'Product 0',
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        52.22,
    ),
    new Product(
        1,
        'Product 1',
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
        32.12,
    ),
    new Product(
        2,
        'Product 2',
        'Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.',
        82.87,
    ),
    new Product(
        3,
        'Product 3',
        'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.',
        22.39,
    ),
    new Product(
        4,
        'Product 4',
        'Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.',
        92.99,
    ),
    new Product(
        5,
        'Product 5',
        'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
        12.55,
    ),
];
let featuredItems = document.querySelector('.featuredItems');

function createCardHtml(product) {
    return `            
    <div class="featuredItem f_item${product.id}">

    <div class="featuredImgWrap">
        <img src="images/featured/${product.id + 1}.jpg" alt="">
        <div class="featuredImgDark">
            <button class="featuredItem__button" data-id="${product.id}">
                <img src="images/cart.svg"  alt="cartIcon">
                Add to Cart
            </button>
        </div>
    </div>

    <div class="featuredData">
        <div class="featuredName">
            ${product.title}
        </div>
        <div class="featuredText">
            ${product.description}
        </div>
        <div class="featuredPrice">
            ${product.price}
        </div>
    </div>

    </div>`
};
function featuredItemsHtml(products, featuredItems) {

    let productHtml = '';
    for (let product of products) {
        productHtml += createCardHtml(product);
    }
    featuredItems.insertAdjacentHTML('afterbegin', productHtml);
};
featuredItemsHtml(products, featuredItems);




let cartPopup = document.querySelector('.cart__popup');
let cartBadgeCount = document.querySelector('.cart__icon__count');
let productButtons = document.querySelectorAll('.featuredItem__button');
let cartGrandCount = document.querySelector('.cart__count');
let cartGrandPrice = document.querySelector('.cart__price');
let cart = {};

document.querySelector('.cartIconWrap').addEventListener('click', function () {
    cartPopup.classList.toggle('hidden');
})

function refreshTotal() {

    let grandCount = 0;
    let grandPrice = 0;

    for (let product in cart) {
        grandPrice += cart[product] * products[product].price;
        grandCount += cart[product];
    }
    cartGrandCount.innerHTML = grandCount;
    cartGrandPrice.innerHTML = '$ ' + grandPrice.toFixed(2);
};

function createCartItemHtml(buttonId) {

    let cartHtml = `<li class="cart__popup__item${buttonId}"> 
    <span class="cart__popup__item${buttonId}">${products[buttonId].title}</span> 
    <span class="cart__popup__item__count${buttonId}">x${cart[buttonId]}</span>  
    <span class="cart__popup__item__price${buttonId}">$ ${products[buttonId].price}</span>  
    <span class="cart__popup__item__totalprice${buttonId}">$ ${(products[buttonId].price * cart[buttonId]).toFixed(2)}</span></li>`;

    cartPopup.insertAdjacentHTML('afterbegin', cartHtml);
};

function refreshCartCount(buttonId) {

    let count = document.querySelector(`.cart__popup__item__count${buttonId}`);
    count.innerText = "x" + cart[buttonId];
    let totalPrice = document.querySelector(`.cart__popup__item__totalprice${buttonId}`);
    totalPrice.innerText = "$ " + (products[buttonId].price * cart[buttonId]).toFixed(2);

};

function increaseBadgeCount() {

    cartBadgeCount.classList.remove('hidden');
    cartBadgeCount.innerText++;

};

function putButtonIdToCart(buttonId) {

    if (buttonId in cart) {

        cart[buttonId]++;
        refreshCartCount(buttonId);

    } else {

        cart[buttonId] = 1;
        createCartItemHtml(buttonId);
    };

    increaseBadgeCount();
    refreshTotal();
    console.log(cart);
};

function clickCartHandler(event) {
    console.log(event.target.dataset.id + ' at clckhndlr');
    let buttonId = event.target.dataset.id;
    putButtonIdToCart(buttonId);
};

productButtons.forEach(button => button.addEventListener('click', clickCartHandler));

