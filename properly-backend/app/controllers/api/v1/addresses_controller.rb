class Api::V1::AddressesController < ApplicationController
    skip_before_action :authorized, only: [:index]
    
    def index
        addresses = Address.all
        
        render json: AddressSerializer.new(addresses).to_serialized_json
    end

    def search
        address = Address.search_by_name(params[:street_number], params[:street], params[:city], params[:state], params[:country])

        render json: AddressSerializer.new(address).to_serialized_json
    end

end
