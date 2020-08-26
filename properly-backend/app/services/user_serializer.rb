class UserSerializer
  include FastJsonapi::ObjectSerializer
  set_key_transform :camel_lower
  attributes :id, :first_name, :last_name, :email, :username, :avatar, :bio
end

class UserSerializer
 
  def initialize(user_object)
      @user = user_object
  end
 
  def to_serialized_json
      @user.to_json(:except => [:created_at, :updated_at])
  end
  

end