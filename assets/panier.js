var carts = document.querySelectorAll('.card');

var product = [
    {
        name : 'Alimentation corsair',
        tag : 'alimcorsair',
        price : '30',
        inCart: 0
    },
    {
        name : 'Alimentation be quiet',
        tag : 'alimbequiet',
        price : '30',
        inCart: 0
    },
]

for (i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(product[i]);
    })
}

function onLoadCartNumbers() {
    var productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.panier span').textContent = productNumbers;

    }

}

function cartNumbers(product) {
    var productNumbers = localStorage.getItem('cartNumbers');


    productNumbers = parseInt(productNumbers)

    if (productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.panier span').textContent = productNumbers + 1;

    }else {
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('.panier span').textContent = 1;
    }
    setItems(product)
}

function setItems(product){
    console.log("inside of set items fucntion")
    console.log("my product is", product)
    product.inCart = 1;
    var cartItems = {
        [product.tag]: product
    }
    localStorage.setItem("productsInCart", cartItems )
}

onLoadCartNumbers();