class GamesController < ApplicationController
  before_action :authenticate_user!

def games_by_user
  Game.where(user_id: current_user.id)
end

  def index
  end

  def show
  end

  def new
  end

  def create
  end
end
