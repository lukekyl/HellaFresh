class ProductsController < ApplicationController
    def index
        menu = Product.all
        render json: menu
    end
    def show
        product = Product.find_by(id: params[:id])
        render json: product
    end
end
