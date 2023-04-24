Rails.application.routes.draw do

devise_for :users, path: 'auth', path_names: { sign_in: 'login', sign_out: 'logout', password: 'secret', confirmation: 'verification', unlock: 'unblock', registration: 'register', sign_up: 'cmon_let_me_in' },
controllers: {omniauth_callbacks: 'omniauth_callbacks'}

   # 'users/omniauth_callbacks' }
# omniauth_callbacks: 'google' }

# ,

root to: 'home#index'

resources :users
resources :players
resources :games do
end

namespace :api do
  namespace :v1 do
    resources :users
    resources :games
    resources :players
    resources :scores
    resources :home

      end
    end
  end
