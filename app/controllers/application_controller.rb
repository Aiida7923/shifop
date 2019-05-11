require 'line/bot'

class ApplicationController < ActionController::Base
  before_action :set_current_user
  before_action :validate_signature

  protect_from_forgery with: :null_session

  def validate_signature
    body = request.body.read
    signature = request.env['HTTP_X_LINE_SIGNATURE']
    unless client.validate_signature(body, signature)
      error 400 do 'Bad Request' end
    end
  end

  def client
    @client ||= Line::Bot::Client.new { |config|
      config.channel_secret = ENV["LINE_CHANNEL_SECRET"]
      config.channel_token = ENV["LINE_CHANNEL_TOKEN"]
      # ローカルで動かすだけならベタ打ちでもOK
      # config.channel_secret = "your channel secret"
      # config.channel_token = "your channel token"
    }
  end

  def set_current_user
   @current_user = User.find_by(id: session[:user_id])
  end

  def authenticate_user
    if @current_user == nil
      redirect_to("/login")
    end
  end
end
