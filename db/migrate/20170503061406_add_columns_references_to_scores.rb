class AddColumnsReferencesToScores < ActiveRecord::Migration[5.1]
  def change
    add_reference :scores, :player, foreign_key: true
    add_reference :scores, :game, foreign_key: true
    add_column :scores, :hits, :integer
    add_column :scores, :region, :integer
  end
end
