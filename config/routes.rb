Rails.application.routes.draw do

  root "users#login_form"
  get "view/index"

  #LineBotに関する記述
  post '/callback', to: 'linebot#callback'

  get "login" => "users#login_form"
  post "login" => "users#login"
  post "logout" => "users#logout"
  post "posts/offer" => "posts#offer"
  get "posts/index"
  post "/update" => "posts#update"
  post "/destroy" => "posts#destroy"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
