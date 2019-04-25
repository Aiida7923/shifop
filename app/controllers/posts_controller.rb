class PostsController < ApplicationController

  def offer
    logger.debug(params[:start_time])
    @post = Post.new(workday: params[:workday], start: params[:start_time], end: params[:end_time],
      user_id: @current_user.id
    )
    logger.debug(params[:start_time])
    @post.save
    redirect_to("/view/index")
  end

end
