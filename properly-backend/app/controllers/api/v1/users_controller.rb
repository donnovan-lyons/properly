class Api::V1::UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]
    
    def profile
        render json: { user: UserSerializer.new(current_user) }, status: :accepted
    end
    
    def create
        @user = User.create(user_params)
        if @user.valid?
            exp_time = Time.now.to_i + 3600 
            # encode token comes from ApplicationController
            @token = encode_token(user_id: @user.id, exp: exp_time )
            session[:jwt] = token
            render json: { user: UserSerializer.new(@user).to_serialized_json, exp: exp_time }, status: :created
        else
            render json: { error: 'failed to create user' }, status: :not_acceptable
        end
    end
    
    private
    
    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :username, :password, :bio, :avatar)
    end
end