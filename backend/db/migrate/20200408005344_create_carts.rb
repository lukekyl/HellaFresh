class CreateCarts < ActiveRecord::Migration[6.0]
  def change
    create_table :carts do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.boolean :is_order, null: false
      t.string :payment

      t.timestamps
    end
  end
end
