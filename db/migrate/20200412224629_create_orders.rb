class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.belongs_to :cart
      t.belongs_to :user
      t.string :payment_method
      t.string :delivery_address
      t.string :delivery_type
      t.boolean :is_complete, null: false

      t.timestamps
    end
  end
end
