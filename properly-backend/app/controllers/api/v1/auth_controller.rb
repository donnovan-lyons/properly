class Api::V1::AuthController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def create
    @user = User.find_by(email: user_login_params[:email])
    if @user && @user.authenticate(user_login_params[:password])
      exp_time = Time.now.to_i + 3600 
      # encode token comes from ApplicationController
      token = encode_token({ user_id: @user.id, exp: exp_time })
      cookies.signed[:jwt] = {token:  token, httponly: true, expires: 1.hour.from_now}
      render json: { user: UserSerializer.new(@user), exp: exp_time}, status: :accepted
    else
      render json: { message: 'Invalid email or password' }, status: :unauthorized
    end
  end

  def destroy
    cookies.delete(:jwt)
  end

  private

  def user_login_params
    params.require(:user).permit(:email, :username, :password)
  end
end
