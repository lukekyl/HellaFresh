class OrdersController < ApplicationController
    def index
        orders = Order.all
        render json: orders, include: [cart: [join_products: [product: [ ]]]]
    end
    def show
        order = Order.find_by(id: params[:id])
        if order
            render json: order, include: [cart: [join_products: [product: [ ]]]]
        else
            render json: {message: 'Error! Order not found.'}
        end
    end
    def create
        order = Order.find_by(id: params[:id])
        if order
            redirect_to "/users/1/orders/#{order.id}"
        else
            order = Order.create(user_id: params[:user_id], cart_id: params[:cart_id], is_complete: false)
            render json: order, include: [:cart]
        end
    end
end
