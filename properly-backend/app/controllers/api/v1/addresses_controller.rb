class Api::V1::AddressesController < ApplicationController
    skip_before_action :authorized, only: [:index]
    
    def index
        address = Address.all
        options = {
            include: [:landlords]
        }
        render json: { address: AddressSerializer.new(address, options) }
    end

end
