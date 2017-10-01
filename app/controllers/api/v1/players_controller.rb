class Api::V1::PlayersController < ApplicationController
  skip_before_action :verify_authenticity_token
  protect_from_forgery unless: -> { request.format.json? }

def index
  players = []
  players << Player.find_by(user_id: current_user.id)
  games = Game.where(user_id: current_user.id)
  games.each do |game|
    game.players.select(:name, :id).distinct.each do |player|
      players << player
    end
  end
  players = players.uniq
  render json: players
end

def show
  playerData = {}
  player = Player.find(params[:id])
  playerData[:player] = player
  playerData[:games] = player.games.uniq
  render json: playerData
end

def new
  @player = Player.new
end

def create
  player = Player.new(name: player_name)
  if player.save
    render json: { message: "Players setup" }
  else
    render json: { message: player.errors.full_messages }
  end
end

def player_params
  params.require(:player).permit(:name, :user_id)
end

end
