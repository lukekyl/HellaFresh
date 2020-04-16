class JoinProductsController < ApplicationController
    def index
        # user = User.find_by(id: params[:user_id])
        # carts = user.carts
        tables = JoinProduct.all
        render json: tables
    end
    def show
        # user = User.find_by(id: params[:user_id])
        # cart = user.carts.find_by(id: params[:id])
        table = JoinProduct.find_by(id: params[:id])
        if table
            render json: table
        else
            render json: {message: 'Error! Join Table not found.'}
        end
    end
    def create
        table = JoinProduct.create(cart_id: params[:cart_id], product_id: params[:product_id])
        if table
            render json: table
        else
            render json: {message: 'Error! Join Table could not be created in controller.'}
        end
    end
    def destroy
        puts params
        table = JoinProduct.find_by(id: params[:id])
        if table
            table.destroy
            render json: table.to_json
        else
            render json: {message: "Error! Join Table could not be deleted in controller."}
        end
    end
end
