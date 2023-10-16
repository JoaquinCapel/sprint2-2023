// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
const products = [
    {
        id: 1,
        name: 'Cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]


// Array with products (objects) added directly with push(). Products in this array are repeated.
let cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];

let total = 0;

const totalPrice = document.querySelector('#total_price');
const countProduct = document.querySelector('#count_product');
const totalWithDiscount = document.querySelector('#totalWithDiscount');
const cartModal = document.querySelector('#cartModal');
const cartTableBody = document.querySelector('#cart_list');


// Exercise 1

//     // 1. Loop for to the array products to get the item to add to cart
//     // 2. Add found product to the cartList array

function buy(id) {
    console.log(id);
    const product = products.find((p) => p.id === id);
    // poner push a carList
    if (product) {
        const cartProduct = cart.find((p) => p.id === id);

        if (cartProduct) {
            cartProduct.quantity++;

        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCartBadge();
    }
    applyPromotionsCart();
    printCart();
    console.log(cart);
}


// Exercise 2

function cleanCart() {
    cart = [];

    total = 0;
    totalPrice.innerText = total;
    console.log(`La suma total es : ${total}`);
    updateCartBadge();
    printCart();
}

// contador de productos carrito Badge (añade y elimina)
function updateCartBadge() {

    const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0);

    countProduct.textContent = totalQuantity;
}

// Exercise 3

function calculateTotal() {
    total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
    });

    totalPrice.innerText = total;
    console.log(`La suma total es : ${total}`);

    return total;
}


// Exercise 4

function applyPromotionsCart() {
    total = 0;
    cart.forEach(item => {
        if (item.offer && item.quantity >= item.offer.number) {
            const discountPercentage = item.offer.percent / 100;
            item.subtotalWithDiscount = item.price * item.quantity * (1 - discountPercentage);
        } else {
            item.subtotalWithDiscount = item.price * item.quantity;
        }
        total += item.subtotalWithDiscount;
    });

    totalPrice.innerText = (total.toFixed(2));
    console.log(`El total con descuento es: ${total.toFixed(2)}`);
}

// Exercise 5

function printCart() {

    cartTableBody.innerHTML = '';

    cart.forEach(product => {
        const newRow = document.createElement('tr');

        const productNameCell = document.createElement('th');
        const priceCell = document.createElement('td');
        const quantityCell = document.createElement('td');
        const totalCell = document.createElement('td');

        productNameCell.textContent = product.name;
        priceCell.textContent = `$${product.price.toFixed(2)}`;
        quantityCell.textContent = product.quantity;

        if (product.subtotalWithDiscount) {
            totalCell.textContent = `$${product.subtotalWithDiscount.toFixed(2)}`;
        } else {
            totalCell.textContent = `$${(product.price * product.quantity).toFixed(2)}`;
        }

        const addButton = document.createElement('button');
        addButton.textContent = '+';
        addButton.className = 'button-add';
        addButton.onclick = function () {
            buy(product.id);
            printCart();
        };

        const removeButton = document.createElement('button');
        removeButton.textContent = '-';
        removeButton.className = 'button-add';
        removeButton.onclick = function () {
            removeFromCart(product.id);
        };

        newRow.appendChild(productNameCell);
        newRow.appendChild(priceCell);
        newRow.appendChild(quantityCell);
        newRow.appendChild(totalCell);
        newRow.appendChild(addButton);
        newRow.appendChild(removeButton);

        cartTableBody.appendChild(newRow);
    });
}

// ** Nivell II **

// Exercise 7

function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    const productIndex = cart.findIndex((p) => p.id === id);
    if (productIndex !== -1) {
        if (cart[productIndex].quantity > 1) {
            cart[productIndex].quantity--;
        } else {
            cart.splice(productIndex, 1);
        }
        applyPromotionsCart();
        printCart();
        updateCartBadge();
    }
}


function open_modal() {
    console.log("Open Modal");
    calculateTotal();
}

