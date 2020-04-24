const currentOrder = document.querySelector('.current_order')

class Order {
    constructor(id, cart, user_id){
        this.id = id
        this.cart = cart
        this.user_id = user_id
    }

    static loadOrder(cart) {
        let myCart = cart
        let configOrder = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                id: currentOrder.id,
                user_id: 1,
                cart_id: myCart.id
            })
        };

        fetch("http://localhost:3000/users/1/orders", configOrder)
            .then(function (response) {
                return response.json();
            })
            .then(function (order) {
                console.log(order)
                let myOrder = new Order(order.id, myCart, order.user_id)
                myOrder.renderOrder()
            })
            .catch(function (error) {
                alert('Error!')
                let e = new Error(error)
                e.renderError()
            });
    };

    renderOrder(){
        let myOrder = this
        console.log(myOrder)
        currentOrder.setAttribute('id', `${myOrder.id}`)
    };


};