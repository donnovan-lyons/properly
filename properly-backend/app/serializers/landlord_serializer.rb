class LandlordSerializer
  include FastJsonapi::ObjectSerializer
  attributes :first_name, :last_name, :email, :phone
  has_many :reviews
end
