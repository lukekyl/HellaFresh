class CreateMenuItems < ActiveRecord::Migration[6.0]
  def change
    create_table :menu_items do |t|
      t.string :name
      t.string :category
      t.string :description
      t.integer :price

      t.timestamps
    end
  end
end
