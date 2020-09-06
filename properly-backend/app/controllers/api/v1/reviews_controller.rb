class Api::V1::ReviewsController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
        landlord = Landlord.find(review_params[:landLordId])
        user = User.find(review_params[:userId])
        user.reviews.create(title: review_params[:title], review: review_params[:review], rating: review_params[:rating], landlord_id: landlord.id)
        
        render json: LandlordSerializer.new(landlord).to_serialized_json
    end

    private

    def review_params
        params.require(:review).permit(:rating, :review, :title, :landLordId, :userId)
    end

end