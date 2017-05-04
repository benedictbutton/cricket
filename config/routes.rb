Rails.application.routes.draw do

  devise_for :users
  root to: 'home#index'

  resources :users
  resources :two_players
  resources :games
  resources :teams

end
