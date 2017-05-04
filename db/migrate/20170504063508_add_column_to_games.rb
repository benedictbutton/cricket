class AddColumnToGames < ActiveRecord::Migration[5.1]
  def change
    add_reference :games, :game, polymorphic: true, index: true
  end
end
