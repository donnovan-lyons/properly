class Api::V1::AuthController < ApplicationController
  skip_before_action :authorized, only: [:create, :login_status]

  def create
    @user = User.find_by(email: user_login_params[:email])
    if @user && @user.authenticate(user_login_params[:password])
      exp_time = Time.now.to_i + 3600 
      # encode token comes from ApplicationController
      token = encode_token({ user_id: @user.id, exp: exp_time })
      session[:jwt] = token
      # byebug
      render json: { user: UserSerializer.new(@user).to_serialized_json, exp_time: exp_time}, status: :accepted
    else
      render json: { message: 'Invalid email or password' }, status: :unauthorized
    end
  end

  def login_status
    if current_user
      render json: { user: UserSerializer.new(current_user) }, status: :accepted
    else
      render json: { message: 'Please login to continue' }, status: :unauthorized
    end
  end

  def destroy
    session.clear
  end

  private

  def user_login_params
    params.require(:user).permit(:email, :username, :password)
  end
end
