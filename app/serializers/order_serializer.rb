class OrderSerializer < ActiveModel::Serializer
  belongs_to :cart,  serializer: CartSerializer

  attributes :id, :user_id, :payment_method, :delivery_address, :delivery_type, :is_complete, :cart
end
