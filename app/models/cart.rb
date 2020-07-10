class Cart < ApplicationRecord
  has_many :join_products
  has_many :products, through: :join_products

  
  def totalitems
    self.products.count
  end

  def totalprice
    total = 0
    self.products.each do |product|
      total += product.price
    end
    return sprintf("%03d", total).insert(-3, ".")
  end


end
