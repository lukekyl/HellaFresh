class JoinProductSerializer < ActiveModel::Serializer
  has_one :product, serializer: ProductSerializer

  attributes :id, :cart_id, :product_id, :product
end
