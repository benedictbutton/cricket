class AddColumnsUsers < ActiveRecord::Migration[5.1]
  def up
    add_column :users, :first_name, :string, null: false
    add_column :users, :last_name, :string, null: false
    add_column :users, :username, :string, null: false
    add_column :users, :avatar, :string
  end

  def down
    remove_column :users, :first_name
    remove_column :users, :last_name
    remove_column :users, :username
    remove_column :users, :avatar
  end
end
