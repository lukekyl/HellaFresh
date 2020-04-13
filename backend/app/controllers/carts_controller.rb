class CartsController < ApplicationController
    def index
        # user = User.find_by(id: params[:user_id])
        # carts = user.carts
        carts = Cart.all
        render json: carts, include: [:products]
    end
    def show
        # user = User.find_by(id: params[:user_id])
        # cart = user.carts.find_by(id: params[:id])
        cart = Cart.find_by(id: params[:id])
        if cart
            render json: cart, include: [:products]
        else
            render json: {message: 'Error! Cart not found.'}
        end
    end
    def create
        # Add a Cart.find_or_create_by(id:[params[:id]])
        # user = User.find_by(id: params[:user_id])
        # cart = Cart.create(product: params[:product], user: user)
        cart = Cart.create()
        render json: cart.to_json
    end
    def edit
        @cart = Cart.find(params[:id])
        cart.update(product: params[:product])
        render json: cart.to_json
    end
    def destroy
        @cart = Cart.find(params[:id])
        @cart.destroy
        render json: cart.to_json
    end
end
