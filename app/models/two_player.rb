class TwoPlayer < ApplicationRecord
  has_many :games, as: :game_type
end
