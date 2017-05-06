Rails.application.routes.draw do

root to: 'home#index'
devise_for :users
resources :users, only: [:index, :show]
resources :games
resources :two_players

namespace :api do
  namespace :v1 do
    resources :users, only: [:show]
  end
end
end
