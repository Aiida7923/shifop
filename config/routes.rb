Rails.application.routes.draw do
  root "users#login_form"
  get "view/index"
  get "login" => "users#login_form"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
