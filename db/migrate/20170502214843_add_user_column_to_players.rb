class AddUserColumnToPlayers < ActiveRecord::Migration[5.1]
  def change
    add_reference :players, :user, index: { unique: true }, foreign_key: true
  end
end
