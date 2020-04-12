Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :menu_items

  # This is makeshift
  resources :users
  resources :carts

  # This is how we want the cart to display eventually
  # resources :users do
  #   resources :carts
  # end
  
end
