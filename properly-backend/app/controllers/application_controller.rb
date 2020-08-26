class ApplicationController < ActionController::API
  include ActionController::Cookies
  include ActionController::RequestForgeryProtection
    before_action :authorized
    before_action :set_csrf_cookie
    require 'json'

    def encode_token(payload)
      # should store secret in env variable
      JWT.encode(payload, 'my_s3cr3t')
    end
  
    def decoded_token
      begin
        token = session[:jwt]
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

    private

    def set_csrf_cookie
      cookies["CSRF-TOKEN"] = form_authenticity_token
    end
end
