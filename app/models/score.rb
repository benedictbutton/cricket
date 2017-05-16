class Score < ApplicationRecord
  validates :hits, numericality: true
  validates :region, numericality: true

  belongs_to :player
  belongs_to :game
end
