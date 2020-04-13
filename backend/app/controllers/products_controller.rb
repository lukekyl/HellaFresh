class ProductsController < ApplicationController
    def index
        menu = Product.all
        render json: menu
    end
end
