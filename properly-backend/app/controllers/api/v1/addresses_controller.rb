class Api::V1::AddressesController < ApplicationController
    skip_before_action :authorized, only: [:index]
    
    def index
        address = Address.all
        
        render json: AddressSerializer.new(address)
    end

end
