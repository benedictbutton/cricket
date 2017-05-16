class Api::V1::GamesController < ApplicationController
  skip_before_action :verify_authenticity_token
  protect_from_forgery unless: -> { request.format.json? }

  def index
    games = Game.all
    render json: games
  end

  def show
    @game = Game.find(params[:id])
  end

  def new
    @game = Game.new
  end

  def create
    if Game.last.nil?
      game_title = "Game #{1}"
    else
      game_title = "Game #{Game.last.id + 1}"
    end
    body = request.body.read
    parsed = JSON.parse(body)
    scores = []
    game = Game.new(title: game_title)
    if game.save
    parsed.each do |player|
      player = Player.create(name: player[1])
      points_area = 20
      while points_area > 14
          score = Score.create(player_id: player.id, game_id: game.id, hits: 0, region: points_area)
          scores << score
          points_area = points_area - 1
        end
        score = Score.create(player_id: player.id, game_id: game.id, hits: 0, region: 25)
        scores << score
      end
      render json: { message: "Players setup", game: game.id }
      else
        render json: { message: game.errors.full_messages }
      end
  end

  private

  def games_params
    params.require(:game).permit(:title)
  end
end
