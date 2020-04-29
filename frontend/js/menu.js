class Menu {
    constructor() {
        this.productList = []
    }

    // Add Products to Menu
    addProduct(product){
        console.log(product)
        this.productList.push(product)
    }

    //Filter Menu
    filterProducts(searchTerm) {
        let myMenu = this
        let filteredMenu = []
        if (searchTerm !== null) {
            filteredMenu = myMenu.productList.filter(product => {
                let productName = product.name.toLowerCase()
                return productName.startsWith(searchTerm)
            })
        }
        myMenu.renderMenu(filteredMenu)
    }

    //Sort Menu Alphabetically

    sortMenu(){
        let myMenu = this
        myMenu.sortedMenu = []
        let productList = myMenu.productList
        myMenu.sortedMenu = productList.sort(function(a, b){ 
            let nameA = a.name.toLowerCase()
            let nameB = b.name.toLowerCase()
            if (nameA < nameB) {
                return -1
            } else if (nameA > nameB) {
                return 1
            } else {
                return 0
            }
        })
        // console.log(myMenu.sortedMenu)
        this.renderMenu(myMenu.sortedMenu)
    }

    //Sort Menu By Price

    sortPrice() { 
        let myMenu = this
        myMenu.sortedPrice = []
        let productList = myMenu.productList
        myMenu.sortedPrice = productList.sort(function (a, b) {
            let priceA = a.price
            let priceB = b.price
            if (priceA < priceB) {
                return -1
            } else if (priceA > priceB) {
                return 1
            } else {
                return 0
            }
        })
        // console.log(myMenu.sortedPrice)
        this.renderMenu(myMenu.sortedPrice)
    }

    sortClear(){
        let searchTerm = ""
        Product.fetchMenu(searchTerm)
    }



    // Show Menu
    renderMenu(productList) {
        console.log(this)

        // Sort Alphabetically Button Listener
        const sortMenuBtn = document.querySelector('.sort-menu')
        sortMenuBtn.addEventListener('click', (e) => {
            this.sortMenu()
        })
        // Sort By Price Button Listener
        const sortPriceBtn = document.querySelector('.sort-price')
        sortPriceBtn.addEventListener('click', (e) => {
            this.sortPrice()
        })
        // Clear Sort Button Listener
        const sortClearBtn = document.querySelector('.sort-clear')
        sortClearBtn.addEventListener('click', (e) => {
            this.sortClear()
        })

        // Create locations by category for products to go
        const starterMenu = document.getElementById('Starter')
        starterMenu.innerHTML = ""
        starterMenu.parentElement.style.display = "none"
        const entreeMenu = document.getElementById('Entree')
        entreeMenu.innerHTML = ""
        entreeMenu.parentElement.style.display = "none"
        const drinkMenu = document.getElementById('Beverage')
        drinkMenu.innerHTML = ""
        drinkMenu.parentElement.style.display = "none"
        const dessertMenu = document.getElementById('Dessert')
        dessertMenu.innerHTML = ""
        dessertMenu.parentElement.style.display = "none"

        productList.forEach(item => {
            const card = document.createElement('div')
            card.setAttribute('class', 'card large-3 medium-4 cell')
            card.setAttribute('data-open', `reveal-${item.id}`)
            card.id = `${item.id}`
            const image = document.createElement('div')
            image.setAttribute('class', 'card-image')
            image.innerHTML = `<img class="menu_image" src='${item.image_url}'>`
            image.setAttribute('style', `height:170px;`)
            const menuContent = document.createElement('div')
            menuContent.setAttribute('class', 'card-section grid-x')
            menuContent.setAttribute('style', `background-color:white;`)
            menuContent.innerHTML =
                `
                <div class="large-8 medium-6 item_title"><h4>${item.name}</h4></div>
                <div class="large-4 medium-6 item_price"><span>$${item.printprice}</span></div
                <div class="large-12 medium-12"><p>${item.description}</p></div>
                `
            card.appendChild(image);
            card.appendChild(menuContent);

            // Append products here in locations by category
            if (starterMenu.id === item.category) {
                starterMenu.parentElement.style.display = "block"
                starterMenu.appendChild(card);
            } else if (entreeMenu.id === item.category) {
                entreeMenu.parentElement.style.display = "block"
                entreeMenu.appendChild(card);

            } else if (drinkMenu.id === item.category) {
                drinkMenu.parentElement.style.display = "block"
                drinkMenu.appendChild(card);
            } else if (dessertMenu.id === item.category) {
                dessertMenu.parentElement.style.display = "block"
                dessertMenu.appendChild(card);
            } else { console.log(`${item.name} cound not be placed.`) }



            //Hover
            const revealItem = document.querySelector('div.reveal')
            card.onmouseover = function (e) {
                card.classList.add('active')
                revealItem.id = `reveal-${item.id}`
            }
            card.onmouseout = function (e) {
                card.classList.remove('active')
                revealItem.id = ``
            }

            //Item Modal
            const showItem = document.querySelector('div.show-item')
            card.addEventListener('click', (e) => {
                showItem.id = `${item.id}`
                showItem.innerHTML =
                    `
                    <div class="card-section mega_image" style="background-image: url('${item.image_url}');">
                    <span class="mega_price">$${item.printprice}</span>
                    </div>
                    <div class="card-section grid-x mega_description">
                    <div class="large-8 medium-6 item_title"><h4>${item.name}</h4></div>
                    <div class="large-4 medium-6 item_price"><button class="order_button" id="${item.id}">Add to Order</button></div>
                    <div class="large-12 medium-12"><p>${item.description}</p></div>
                    </div>
                    `

                //Add Cart Item
                let addCartItem = document.querySelector('button.order_button')
                addCartItem.addEventListener('click', (e) => {
                    Cart.loadCart(e.target.id)
                    document.querySelector('div.reveal-overlay').click();
                    document.getElementById('reveal_cart').click();
                });
            });
        });
    };

}