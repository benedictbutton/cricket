class PlayersController < ApplicationController
  def index
  end

  def show
  end

  def new
  end

  def create
  end

  def edit
    binding.pry
  end

  def player_params
    params.require(:player).permit(:name)
  end
end
