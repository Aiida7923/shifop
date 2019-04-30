Rails.application.routes.draw do

  root "users#login_form"
  get "view/index"

  get "login" => "users#login_form"
  post "login" => "users#login"
  post "logout" => "users#logout"
  post "posts/offer" => "posts#offer"
  get "posts/index"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
