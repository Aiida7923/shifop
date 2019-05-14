class PostsController < ApplicationController

  def offer
    @post = Post.new(workday: params[:workday], start: params[:start_time], end: params[:end_time],
      user_id: @current_user.id
    )
    @post.save
    redirect_to("/view/index")
  end

  def index
    @posts = Post.where(user_id: @current_user.id)
  end

  def destroy
    @post = Post.find_by(id: prams[:id])
    @post.destroy

    redirect_to("/view/index")
  end
end
