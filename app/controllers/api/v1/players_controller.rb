class Api::V1::PlayersController < ApplicationController
  skip_before_action :verify_authenticity_token
  protect_from_forgery unless: -> { request.format.json? }

def index
  players = Player.all
  render json: players
end

def show
  player = player.find(params[:id])
  render json: player
end

def new
  @player = Player.new
end

def create
  player = Player.new(name: player_name)
  end
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
