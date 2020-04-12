class CartsController < ApplicationController
    def index
        carts = Cart.all
        render json: carts
    end
    def show
        cart = Cart.find_by(id: params[:id])
        if cart
            render json: cart.to_json
        else
            render json: {message: 'Error! Cart not found.'}
        end
    end
    def create
        # Add a Cart.find_or_create_by(id:[params[:id]])
        cart = Cart.create(menu_item_id: params[:menu_item_id], user_id: params[:user_id])
        render json: cart.to_json
    end
    def edit
        @cart = Cart.find(params[:id])
        cart.update(menu_item_id: params[:menu_item_id])
        render json: cart.to_json
    end
    def destroy
        @cart = Cart.find(params[:id])
        @cart.destroy
        render json: cart.to_json
    end
end
