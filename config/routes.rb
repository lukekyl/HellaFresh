Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :products
  resources :join_products, only: [:index, :show, :create, :destroy]
  resources :carts, only: [:index, :show, :create]
  resources :users do
    resources :orders
  end
  
end