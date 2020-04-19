class CartsController < ApplicationController
    def index
        carts = Cart.all
        render json: carts, include: [join_products: [product: [ ]]]
    end
    def show
        cart = Cart.find_by(id: params[:id])
        if cart
            render json: cart, include: [join_products: [product: [ ]]]
        else
            render json: {message: 'Error! Cart not found.'}
        end
    end
    def create
        cart = Cart.find_by(id: params[:id])
        if cart
            redirect_to "/carts/#{cart.id}"
        else
            cart = Cart.create()
            render json: cart
        end
    end

    private 

    # Add before action to find cart
end
