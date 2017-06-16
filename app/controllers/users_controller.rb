class UsersController < ApplicationController
  before_action :authenticate_user!

  def index
  end

  def show
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, player_attributes: [:name, :user_id])
  end

end
