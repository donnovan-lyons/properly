class Api::V1::LandlordsController < ApplicationController
    skip_before_action :authorized, only: [:index]
    
    def index
        landlords = Landlord.all

        render json: LandlordSerializer.new(landlords)
    end

end
