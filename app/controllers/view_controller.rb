class ViewController < ApplicationController
  before_action :authenticate_user,{only: [:index]}

  def index
    @posts = Post.where(user_id: @current_user.id)
    gon.posts = @posts
  end

end
