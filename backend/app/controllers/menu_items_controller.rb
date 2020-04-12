class MenuItemsController < ApplicationController
    def index
        menu = MenuItem.all
        render json: menu
    end
end
