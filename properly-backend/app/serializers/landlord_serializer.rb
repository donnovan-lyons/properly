class LandlordSerializer
  include FastJsonapi::ObjectSerializer
  set_key_transform :camel_lower
  attributes :id, :first_name, :last_name, :email, :phone
  has_many :reviews
end
