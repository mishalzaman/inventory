Rails.application.routes.draw do
  get 'item/index'
  post 'item/add'
  post 'item/edit'
  post 'item/destroy'
  post 'item/get_items'
  root 'item#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
