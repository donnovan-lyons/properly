class AddressSerializer
  include FastJsonapi::ObjectSerializer
  set_key_transform :camel_lower
  attributes :street, :city, :state, :zip, :country
  has_many :landlords
end
