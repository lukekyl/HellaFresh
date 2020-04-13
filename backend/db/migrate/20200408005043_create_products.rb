class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :category
      t.string :description
      t.decimal :price, precision:2
      t.string :image_url

      t.timestamps
    end
  end
end
