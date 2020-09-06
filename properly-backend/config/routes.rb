Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :landlords do
        # custom route collection
        collection do
          get 'search/:name', to: 'landlords#search'
        end
      end
      resources :addresses do
        collection do
          get 'search/:address', to: 'addresses#search'
        end
      end
      resources :users, only: [:create, :update]
      resources :addresses, only: [:show, :create]
      resources :landlords, only: [:show, :create]
      resources :reviews, only: [:create]
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
      get '/login_status', to: 'auth#login_status'
      delete 'logout', to: 'auth#destroy'
    end
  end
end
