class ProductsController < ApplicationController
    def index
        menu = Product.all
        render json: menu.to_json(:methods => [:printprice])
    end
end
