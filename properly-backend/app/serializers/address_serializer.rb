class AddressSerializer
  include FastJsonapi::ObjectSerializer
  attributes :street, :city, :state, :zip, :country
  has_many :landlords
end
