class AddColumnsToScores < ActiveRecord::Migration[5.1]
  def change
    add_reference :scores, :player, index: { unique: true }, foreign_key: true
    add_reference :scores, :game, index: { unique: true }, foreign_key: true
    add_column :scores, :hits, :integer
    add_column :scores, :region, :integer
  end
end
