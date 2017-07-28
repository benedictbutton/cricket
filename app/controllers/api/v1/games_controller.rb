class Api::V1::GamesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :destroy]
  protect_from_forgery unless: -> { request.format.json? }

  def index
    games = Game.where(user_id: current_user.id)
    render json: games
  end

  def show
    @game = Game.find(params[:id])
  end

  def new
    @game = Game.new
  end

  def create
    game_type = params[:gameType]
    game_title = ''
    if game_type == 'twoPlayer'
      game_title = "#{params[:playerOne]} vs. #{params[:playerTwo]}"
    else
      game_title = "#{params[:playerOne]}/#{params[:playerTwo]} vs. #{params[:playerThree]}/#{params[:playerFour]}"
    end
    body = request.body.read
    parsed = JSON.parse(body)
    scores = []
    game = Game.new(title: game_title, user_id: current_user.id, game_type: game_type)
    if game.save
    parsed.each do |player|
      if player[0] != 'gameType'
      player = Player.create(name: player[1])
      points_area = 20
      while points_area > 13
          score = Score.create(player_id: player.id, game_id: game.id, hits: 0, region: points_area)
          scores << score
          points_area = points_area - 1
        end
        # score = Score.create(player_id: player.id, game_id: game.id, hits: 0, region: 25)
        scores << score
      end
      end
      render json: { message: "Players setup", game: game.id }
      else
        render json: { message: game.errors.full_messages }
    end
  end

  def update
  end

  def destroy
    game = Game.find(params[:id])
    game.delete
    scores = game.scores
    scores.each do |score|
      score.delete
    end
    render json: { alert: "Game successfully deleted" }
  end

  private

  def games_params
    params.require(:game).permit(:title)
  end
end
