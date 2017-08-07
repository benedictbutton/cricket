class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  protect_from_forgery unless: -> { request.format.json? }
  before_action :authenticate_user!

  def index
    @users = User.all
    @current_user = current_user
    render json: { users: @users, current_user: @current_user }
  end

  def show
    @user = User.find(params[:id])
    @current_user = current_user
    @player = Player.find_by(user_id: @user.id)
    if @user == current_user
      render json: { user: @user, current_user: @current_user, player: @player }
    else
      flash[:alert] = "You are not authorized to view this record."
      redirect_to root_path
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, player_attributes: [:name, :user_id])
  end
end
