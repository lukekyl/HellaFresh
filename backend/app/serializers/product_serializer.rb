class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :description, :price, :image_url, :printprice

end
