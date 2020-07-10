class CartSerializer < ActiveModel::Serializer
  has_many :join_products
  has_many :products, through: :join_products


  attributes :id, :totalitems, :totalprice
end
