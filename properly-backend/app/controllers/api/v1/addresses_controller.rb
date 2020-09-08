class Api::V1::AddressesController < ApplicationController
    skip_before_action :authorized, only: [:index]
    
    def index
        addresses = Address.all
        
        render json: AddressSerializer.new(addresses).to_serialized_json
    end

    def search
        address = Geocoder.search(params[:address])[0]

        if address != nil
            database_address = Address.find_or_create_by(house_number: address.house_number, street: address.street, city: address.city, state: address.state, zip: address.postal_code, country: address.country)
        else
            database_address = nil
        end
 
        render json: AddressSerializer.new(database_address).to_serialized_json
    end

end
