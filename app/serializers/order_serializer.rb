class OrderSerializer < ActiveModel::Serializer
  attributes :id, :cart_id, :user_id, :payment_method, :delivery_address, :delivery_type, :is_complete
end
