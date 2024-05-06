let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');

}


window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');

}


let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
         header.classList.toogle('shadow', window.scrollY > 0);
});






let cartIcon = document.getElementById('cartImg');
let cartItems = [];

function addToCart(item) {
    let selectedItem = {
        image: item.children[0].src,
        title: item.children[1].innerText,
        price: item.children[2].querySelector('span').innerText
    };

    cartItems.push(selectedItem);

  
    if (cartIcon) {
      
        cartIcon.innerHTML = ` (${cartItems.length})`;
    }
}

cartIcon.addEventListener('click', () => {
    let newTab = window.open('');
    newTab.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Shopping Cart</title>
            <link rel="stylesheet" type="text/css" href="cartStyle.css">
        </head>
        <body>
            <h1>Shopping Cart</h1>
            <div id="cartItems"></div>
            <div id="totalPrice" class="total-price"></div>
            <button id="completePurchase">Complete Purchase</button>

            <script>
                
                document.getElementById('completePurchase').addEventListener('click', () => {
                    
                    alert('Thank you for your purchase!');
                
                    window.close();
                });
            </script>
        </body>
        </html>
    `);

    let cartItemsContainer = newTab.document.getElementById('cartItems');
    let totalPrice = 0;

    cartItems.forEach(item => {
        totalPrice += parseInt(item.price.replace('$', ''));
        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}">
                <div>
                    <h2>${item.title}</h2>
                    <p>${item.price}</p>
                </div>
            </div>
        `;
    });

    newTab.document.getElementById('totalPrice').innerText = `Total Price: $${totalPrice}`;
});
