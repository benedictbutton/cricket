class Score < ApplicationRecord
  validates :hits, numericality: true
  validates :region, numericality: true

  belongs_to :player, null: false
  belongs_to :game, null: false

  t.timestamps null: false
end
