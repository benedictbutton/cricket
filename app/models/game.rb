class Game < ApplicationRecord
  validates :name, presence: true

  has_many :scores
  has_many :players, through: :scores
end
