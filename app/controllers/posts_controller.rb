class PostsController < ApplicationController

  def offer
    @shift = Shift.new(data: params[:data], start: params[:start_time], end: params[:end_time])
    @shift.save
    redirect_to("/view/index")
  end
end
