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
    unless @user == current_user || current_user.admin?
      flash[:alert] = "You are not authorized to view this record."
      redirect_to root_path
    end
    render json: { user: @user, current_user: @current_user }
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
