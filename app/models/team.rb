class Team < ApplicationController
  has_many :games, as: :game_type
end
