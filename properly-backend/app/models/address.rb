class Address < ApplicationRecord
  has_and_belongs_to_many :landlords

  scope :search, -> (house_number, street, city, state, zip) do
    where("(addresses.house_number = ? AND addresses.street = ? AND addresses.city = ? AND addresses.state = ? AND addresses.zip = ?)", house_number, street, city, state, zip)
  end
end
