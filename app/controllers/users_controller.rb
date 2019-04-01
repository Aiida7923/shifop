class UsersController < ApplicationController

  def login_form

  end

  def login
    @user = User.find_by(email: params[:email], password: params[:password])
    logger.debug("ああああああああああああああああああああああああ")
    if @user
      flash[:notice] = "ログインしました"
      redirect_to("/view/index")
    else
      @error_message = "メールアドレスまたはパスワードが間違っています"
      @email = params[:email]
      @password = params[:password]

      render("users/login_form")
    end
  end
end
