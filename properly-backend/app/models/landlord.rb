class Landlord < ApplicationRecord
    has_and_belongs_to_many :addresses
    has_many :reviews

    def full_name
        first_name + " " + last_name
    end

    def self.search_by_name(search)
        query = search.downcase
        landlords = Landlord.all
        landlords.select {|landlord| "#{landlord.first_name} #{landlord.last_name}".downcase.include?(query) || "#{landlord.last_name} #{landlord.first_name}".downcase.include?(query)}
    end
    
end

# Landlord.where("upper(last_name) like upper(?)", "%Abern%")