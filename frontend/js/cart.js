const currentCart = document.querySelector('.current_cart')
//Dev Mode
// const appUrl = 'http://localhost:3000'

//Heroku Mode
// const appUrl = ''

class Cart {
    constructor(cart) {
        this.id = cart.id
        this.totalprice = cart.totalprice
        this.totalitems = cart.totalitems
    }

    
// Load or Create Cart
    static loadCart(product_id) {
        let configCart = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: currentCart.id })
        };

        fetch(`${appUrl}/carts`, configCart)
            .then(function (response) {
                return response.json();
            })
            .then(function (cart) {
                console.log(cart)
                let myCart = new Cart(cart)
                myCart.addToCart(product_id)
            })
            .catch(function (error) {
                alert('Error!')
                let e = new Error(error)
                e.renderError()
            });
    }    

// Display Cart
    displayCart() {
        let myCart = this

        function renderCart(cart) {
            currentCart.setAttribute('id', `${cart.id}`)
            let itemNumber = document.getElementById('cart_item_number');
            itemNumber.innerHTML = `${cart.totalitems}`
            let loadCart = document.getElementById('load_cart')
            loadCart.innerHTML = ""
            cart.join_products.forEach(cart_item => {
                // Display each cart item
                let cartItem = document.createElement('div')
                cartItem.setAttribute('class', 'large-12 cell grid-x')
                cartItem.classList.add('cart_item')
                let cartItemTitle = document.createElement('div')
                cartItemTitle.setAttribute('class', 'large-8 cell')
                cartItemTitle.classList.add('cart_item_title')
                cartItemTitle.innerHTML = `${cart_item.product.name}`
                let cartItemPrice = document.createElement('div')
                cartItemPrice.setAttribute('class', 'large-3 cell')
                cartItemPrice.classList.add('cart_item_price')
                cartItemPrice.innerHTML = `$${cart_item.product.printprice}`
                let cartItemDelete = document.createElement('div')
                cartItemDelete.setAttribute('class', 'large-1 cell')
                cartItemDelete.classList.add('cart_item_delete')
                let deleteCartItem = document.createElement('button')
                deleteCartItem.setAttribute('class', 'delete_button')
                deleteCartItem.setAttribute('id', `${cart_item.id}`)
                deleteCartItem.innerHTML = 'x'

                cartItemDelete.appendChild(deleteCartItem)
                cartItem.appendChild(cartItemTitle)
                cartItem.appendChild(cartItemPrice)
                cartItem.appendChild(cartItemDelete)
                loadCart.appendChild(cartItem)

                // Delete Cart Item
                deleteCartItem.addEventListener('click', (e) => {
                    let table_id = e.target.id
                    myCart.removeFromCart(table_id)
                    document.querySelector('div.js-off-canvas-overlay').click();
                });
            });
            let totalPrice = document.getElementById('total_price')
            totalPrice.innerHTML = `Cart Total:&nbsp; <span>$${cart.totalprice}</span>`

            // Create Order Flow
            let createOrder = document.querySelector('.current_order')
            createOrder.addEventListener('click', (e) => {
                document.querySelector('div.js-off-canvas-overlay').click();
                Order.loadOrder(myCart)
            });

        };


        fetch(`${appUrl}/carts/${myCart.id}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (cart) {
                renderCart(cart);
            })
            .catch(function (error) {
                alert('Error!')
                let e = new Error(error)
                e.renderError()
            });

    }


//Add To Cart

    addToCart(product_id) {
        let myCart = this

        let formData = {
            cart_id: `${myCart.id}`,
            product_id: product_id
        };
        let createJoinTable = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        };

        fetch(`${appUrl}/join_products`, createJoinTable)
            .then(function (response) {
                return response.json();
            })
            .then(function (table) {
                console.log(`Creating Table ${table.id} Was a Success!`)
            })
            .then(function () {
                console.log(myCart)
                myCart.displayCart()
            })
            .catch(function (error) {
                alert('Error!')
                let e = new Error(error)
                e.renderError()
            });
    };


//Remove From Cart
    removeFromCart(table_id) {
        let myCart = this
        console.log(`Cart ID: ${myCart.id}, Join Table ID: ${table_id}`)

        let deleteRequest = {
            method: "DELETE",
        };
        fetch(`${appUrl}/join_products/${table_id}`, deleteRequest)
            .then(function (response) {
                return response.json();
            })
            .then(function (table) {
                console.log(table)
            })
            .then(function () {
                myCart.displayCart();
            })
            .catch(function (error) {
                alert('Error!')
                let e = new Error(error)
                e.renderError()
            });
    }

};