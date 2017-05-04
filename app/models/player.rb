class Player < ApplicationRecord
  validates :name, presence: true

  has_many :scores
  has_many :games, through: :scores
end
