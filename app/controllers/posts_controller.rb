class PostsController < ApplicationController

  def offer
    @post = Post.new(workday: params[:workday], start: params[:start_time], end: params[:end_time])
    @post.save
    redirect_to("/view/index")
  end
end
