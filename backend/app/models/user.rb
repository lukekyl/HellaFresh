class User < ApplicationRecord
    has_many :carts
    has_many :menu_items, through: :carts

end
