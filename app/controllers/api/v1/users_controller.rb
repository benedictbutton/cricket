class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  end


  # def show
  #   @user = []
  #   user = User.find(params[:id])
  #   user_info = {}
  #   user_info[:id] = user.id
  #   user_info[:first_name] = user.first_name
  #   user_info[:last_name] = user.last_name
  #   user_info[:username] = user.username
  #   user_info[:email] = user.email
  #   render json: user.username
  #   @user << user_info
  # end
  # render json: { user: @user }
