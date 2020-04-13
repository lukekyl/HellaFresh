class Product < ApplicationRecord
    has_many :join_products

    def printprice
        sprintf("%03d", self.price).insert(-3, ".")
    end

end
