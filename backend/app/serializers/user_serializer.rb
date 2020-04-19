class UserSerializer < ActiveModel::Serializer
  has_many :orders

  attributes :id, :orders
end
