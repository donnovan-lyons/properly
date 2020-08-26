class Api::V1::LandlordsController < ApplicationController
    skip_before_action :authorized, only: [:index, :search]
    
    def index
        landlords = Landlord.all

        render json: LandlordSerializer.new(landlords).to_serialized_json
    end

    def search
        landlord = Landlord.search_by_name(params[:name])

        render json: LandlordSerializer.new(landlord).to_serialized_json
    end

end
