class ApplicationController < ActionController::API
  include ::ActionController::Cookies
    before_action :authorized

    def encode_token(payload)
      # should store secret in env variable
      JWT.encode(payload, 'my_s3cr3t')
    end
  
    def decoded_token
      begin
        token = cookies.signed[:jwt]
        leeway = 59
        JWT.decode(token, 'my_s3cr3t', true, { exp_leeway: leeway, algorithm: 'HS256' })
      rescue JWT::DecodeError
        nil
      end
    end
  
    def current_user
      if decoded_token
        user_id = decoded_token[0]['user_id']
        @user = User.find_by(id: user_id)
      end
    end
  
    def logged_in?
      !!current_user
    end
  
    def authorized
      render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
    end
end
