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

  def update
    @posts = Post.find_by(params[:workday],params[:start],params[:end])
    @posts.start = params[:start]
    @posts.end = params[:end]
    logger.debug("====================")
    logger.debug(@posts.start)
    logger.debug("====================")
    logger.debug(@posts.end)
    logger.debug("====================")
    logger.debug(@posts)
    logger.debug("====================")
    @post.save
    redirect_to("view/index")
  end

  def destroy
    @post = Post.find_by(params[:workday])
    logger.debug("---------------")
    logger.debug(params[:workday])
    logger.debug("---------------")
    @post.destroy
    redirect_to("/view/index")
  end
end
