class AddPointsToGames < ActiveRecord::Migration[5.1]
  def change
    add_column :games, :points, :boolean, default: false
  end
end
