class Game < ApplicationRecord
  has_many :scores
  has_many :players, through: :scores

  belongs_to :user
end
