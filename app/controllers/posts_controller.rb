class PostsController < ApplicationController

  def offer
    @post = Post.new(workday: params[:workday], start: params[:start_time], end: params[:end_time],
      user_id: @current_user.id
    )
    if @post.save
      redirect_to("/view/index")
    else
      redirect_to("/view/index")
    end
  end

  def update
    @posts = Post.find_by(workday: params[:workday])
    @posts.start = params[:start_time]
    @posts.end = params[:end_time]
    @posts.save
    redirect_to("/view/index")
  end

  def destroy
    @post = Post.find_by(workday: params[:workday])
    @post.destroy
    redirect_to("/view/index")
  end

  def index
    @posts = Post.where(user_id: @current_user.id)
  end
end
