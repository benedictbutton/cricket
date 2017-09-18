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
    error_messages = []
    body = request.body.read
    parsed = JSON.parse(body)
    game_type = params[:gameType]
    game_title = create_game_title(game_type, params)
    game = Game.new(title: game_title, user_id: current_user.id, game_type: game_type)
    if game_type == 'twoPlayer'
      parsed.delete('playerThree')
      parsed.delete('playerFour')
    end
    if game.save
    parsed.each do |player|
      unless player[0] == 'gameType'
        if player[1].is_a?(String)
          player = Player.create(name: player[1])
        else
          player = Player.find(player[1])
        end
        if player.save
          build_score(player, game)
        # else
        #   error = "Player name #{player.name} " + "#{player.errors.messages[:name][0]}"
        #   error_messages << error
        end
        if !player.errors.messages.empty?
          error_messages << player.errors.messages[:name][0]
        end
      # points_area = 20
      # while points_area > 13
      #     score = Score.create(player_id: player.id, game_id: game.id, hits: 0, region: points_area)
      #     scores << score
      #     points_area = points_area - 1
      #   end
        # score = Score.create(player_id: player.id, game_id: game.id, hits: 0, region: 25)
        # scores << score
      end
      end
    end
      if error_messages.empty?
        render json: { game: game.id }
      else
        game.delete
        render json: { message: error_messages }
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

  def build_score(player, game)
    scores = []
    points_area = 20
    while points_area > 13
        score = Score.create(player_id: player.id, game_id: game.id, hits: 0, region: points_area)
        scores << score
        points_area = points_area - 1
    end
      scores
  end

    def create_game_title(game_type, params)
      game_title = ''
      params.each do |player|
        if !params[player].is_a?(String) && player.include?('player')
         params[player] = Player.find(params[player]).name
        end
     end
    if game_type == 'twoPlayer'
      game_title = "#{params[:playerOne]} vs. #{params[:playerTwo]}"
      else
        game_title = "#{params[:playerOne]}/#{params[:playerTwo]} vs. #{params[:playerThree]}/#{params[:playerFour]}"
    end
      game_title
    end

  private

  def games_params
    params.require(:game).permit(:title)
  end
end
