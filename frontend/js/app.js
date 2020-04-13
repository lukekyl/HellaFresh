$(document).foundation();
document.addEventListener('DOMContentLoaded', () => {

    const main = document.getElementById('main');
    const cart = document.getElementById('offCanvas');
    const errorDiv = document.getElementById('errors');
    // let cartToggle = false

// Show Menu
    function renderMenu(products) {
        console.log(products)
        const menu = document.getElementById('menu')
        const grid = document.createElement('div')
        grid.setAttribute('class', 'grid-x grid-margin-x')
        products.forEach(item => {
            const card = document.createElement('div')
            card.setAttribute('class','card large-3 medium-4 cell')
            card.setAttribute('data-open', `reveal-${item.id}`)
            card.id = `${item.id}`
            const image = document.createElement('div')
            image.setAttribute('class','card-image')
            image.innerHTML = `<img class="menu_image" src='${item.image_url}'>`
            image.setAttribute('style', `height:170px;`)
            const menuContent = document.createElement('div')
            menuContent.setAttribute('class','card-section grid-x')
            menuContent.setAttribute('style', `background-color:white;`)
            menuContent.innerHTML = `
            <div class="large-8 medium-6 item_title"><h4>${item.name}</h4></div>
            <div class="large-4 medium-6 item_price"><span>$${item.printprice}</span></div
            <div class="large-12 medium-12"><p>${item.description}</p></div>`
            card.appendChild(image);
            card.appendChild(menuContent);
            grid.appendChild(card);

            //Hover
            const revealItem = document.querySelector('div.reveal')
            card.onmouseover = function(e){ 
                card.classList.add('active')
                revealItem.id = `reveal-${item.id}`
            }
            card.onmouseout = function (e){ 
                card.classList.remove('active')
                revealItem.id = ``
            }
            
            //Item Modal
            const showItem = document.querySelector('div.show-item')
            card.addEventListener('click', (e) => {
                showItem.id = `${item.id}`
                showItem.innerHTML = `
                <div class="card-section mega_image" style="background-image: url('${item.image_url}');">
                <span class="mega_price">$${item.printprice}</span>
                </div>
                <div class="card-section grid-x mega_description">
                <div class="large-8 medium-6 item_title"><h4>${item.name}</h4></div>
                <div class="large-4 medium-6 item_price"><button class="order_button" id="${item.id}">Add to Order</button></div>
                <div class="large-12 medium-12"><p>${item.description}</p></div>
                </div>
                `

                //Add Order
                let orderButton = document.querySelector('button.order_button')
                orderButton.addEventListener('click', (e) => {
                    addToCart(item.id)
                });
            });
        });
        menu.appendChild(grid);
    };


    function renderError(error) {
        const p = document.createElement('p');
        p.innerHTML = `<p style="color:red;"><strong>${error.message}</strong></p>`
        errorDiv.appendChild(p);
        console.log(error.message);
    };

    fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(function(products){
            renderMenu(products)
        })
        .catch(function(error){
            alert('Error!')
            renderError(error)
        });


//Add Order

function addToCart(item_id) {
    console.log(item_id)

    function renderCart(cart) {
        // cartToggle = true
        console.log('Create Was a Success!')
        document.querySelector('div.reveal-overlay').click();
        console.log(cart)
        let itemNumber = document.getElementById('cart_item_number');
        //itemNumber.innerHTML=`${cart.products.count}`
        let loadCart = document.getElementById('load_cart')
        cart.products.forEach(cart_item => {
            // Display each cart item
            let cartItem = document.createElement('div')
            cartItem.setAttribute('class', 'large-12 cell grid-x')
            cartItem.classList.add('cart_item') 
            let cartItemTitle = document.createElement('div')
            cartItemTitle.setAttribute('class', 'large-8 cell')
            cartItemTitle.classList.add('cart_item_title')
            cartItemTitle.innerHTML = `${cart_item.name}`
            let cartItemPrice = document.createElement('div')
            cartItemPrice.setAttribute('class', 'large-3 cell')
            cartItemPrice.classList.add('cart_item_price')
            cartItemPrice.innerHTML = `${cart_item.printprice}`
            let cartItemDelete = document.createElement('div')
            cartItemDelete.setAttribute('class', 'large-1 cell')
            cartItemDelete.classList.add('cart_item_delete')
            cartItemDelete.innerHTML = '<button>x</button>'

            cartItem.appendChild(cartItemTitle)
            cartItem.appendChild(cartItemPrice)
            cartItem.appendChild(cartItemDelete)
            loadCart.appendChild(cartItem)  
        });
  
        let totalPrice = document.getElementById('total_price')
        totalPrice.innerHTML = `Total Price: ${cart.totalprice}`
        


    };

    

    // let configCart = {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData)
    // };

    fetch("http://localhost:3000/carts/3")
        .then(function (response) {
            return response.json();
        })
        .then(function (cart) {
            renderCart(cart);
        })
        .catch(function (error) {
            alert("Error! Cart was not created.");
            renderError(error);
        });

}


});