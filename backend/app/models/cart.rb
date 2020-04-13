class Cart < ApplicationRecord
  has_many :join_products
  has_many :products, through: :join_products
  

  def totalprice 
    total = 0
    self.products.each do |product|
      total += product.price
    end
    return total
  end
end
