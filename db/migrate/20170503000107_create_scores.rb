class CreateScores < ActiveRecord::Migration[5.1]
  def change
    create_table :scores do |t|
      t.integer :hits
      t.integer :region

      t.references :player
      t.references :game

      t.timestamps
    end
  end
end
