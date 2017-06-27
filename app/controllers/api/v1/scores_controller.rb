class Api::V1::ScoresController < ApplicationController
  skip_before_action :verify_authenticity_token
  protect_from_forgery unless: -> { request.format.json? }

  def show
    scores = []
    game = Game.find(params[:id])
      record = 0
      game.scores.each do |score|
      points = {}
      points[:id] = score.id
      points[:player_id] = score.player_id
      points[:player_name] = score.player.name
      points[:region] = score.region
      points[:hits] = score.hits
      points[:record] = record
      scores << points
      record = record + 1
      end
    render json: {game: scores}.to_json
  end

  def new
    @score = Score.new
  end

  def create
    score = Score.new(player_id: player_id, game_id: game_id, hits: hits, region: region)
      if score.save
        render json: { message: "Score setup" }
      else
        render json: { message: score.error.full_messages }
      end
    end

  def update
    @scores = []
    scores = params['_json']
    scores.each do |score|
     Score.find(score[:id]).update!(hits: score[:hits])
     score[:player_name] = Player.find(score[:player_id]).name
      @scores << score
      # Score.find(score[:id])
    end
    if @scores.length == 14
      flash[:notice] = "Game saved successfully"
    else
      flash[:alert] = "Apologies. There was an issue saving the game. Please try again."
    end
    render json: {scores: @scores, message: "Game saved successfully"}.to_json
  end

  private

  def score_params
    params.require(:score).permit(:id, :player_id, :game_id, :hits, :region)
  end
end
