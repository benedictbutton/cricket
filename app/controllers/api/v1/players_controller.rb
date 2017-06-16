class Api::V1::PlayersController < ApplicationController
  skip_before_action :verify_authenticity_token
  protect_from_forgery unless: -> { request.format.json? }

def index
  players = Player.all
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
  params.require(:player).permit(:name)
end

end
