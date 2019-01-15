class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name
      t.string :user_id
      t.string :integer
      t.integer :state

      t.timestamps
    end
  end
end
