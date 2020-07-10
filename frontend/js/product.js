//Dev Mode
const appUrl = 'http://localhost:3000'

//Heroku Mode
// const appUrl = ''

class Product {

    constructor(product){
        this.id = product.id
        this.name = product.name
        this.category = product.category
        this.description = product.description
        this.price = product.price
        this.printprice = product.printprice
        this.image_url = product.image_url
    }

// Fetch Menu
    static fetchMenu(searchTerm) {
        let myMenu = new Menu()
        myMenu.listenForSort()

        fetch(`${appUrl}/products`)
            .then(response => response.json())
            .then(function (products) {
                console.log(searchTerm)
                products.forEach( product => {
                    let p = new Product(product)
                    myMenu.addProduct(p)
                })
                myMenu.filterProducts(searchTerm)
            })
            .catch(function (error) {
                alert('Error!')
                let e = new Error(error)
                e.renderError()
            });
    }

};