class CartsController < ApplicationController
    def index
        # user = User.find_by(id: params[:user_id])
        # carts = user.carts
        carts = Cart.all
        render json: carts.to_json(:include => {:products => {:methods => [:printprice]}}, :methods => [:totalitems, :totalprice])
    end
    def show
        # user = User.find_by(id: params[:user_id])
        # cart = user.carts.find_by(id: params[:id])
        cart = Cart.find_by(id: params[:id])
        if cart
            render json: cart.to_json(:include => {:join_products => {:include => {:product => {:methods => [:printprice]}}}}, :methods => [:totalitems, :totalprice])
            # render json: cart.to_json(:include => {:products => {:methods => [:printprice]}}, :methods => [:totalitems, :totalprice])
        else
            render json: {message: 'Error! Cart not found.'}
        end
    end
    def create
        cart = Cart.create()
        if cart
            render json: cart.to_json
        else
            render json: {message: 'Error! Cart was not created in controller.'}
        end
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
