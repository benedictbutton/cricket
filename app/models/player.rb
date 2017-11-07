class Player < ApplicationRecord
  validate :player_names, on: :create_player
  validates :name, presence: true

  has_many :scores
  has_many :games, through: :scores

  def player_names
   player_names = []
   id = Game.last[:user_id]
   player_names << User.find(id).player.name
   games = Game.where(user_id: id)
     games.each do |game|
       game.players.select(:name, :id).distinct.each do |player|
         player_names << player.name
       end
     end
     players = player_names.uniq
     if players.include?(name)
       errors.add(:name, "Player name '#{name}' has already been taken")
     end
  end
end
