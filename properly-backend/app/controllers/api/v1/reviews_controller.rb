class Api::V1::ReviewsController < ApplicationController
    skip_before_action :authorized, only: [:index]
    
    def index
        reviews = Review.all

        render json: ReviewSerializer.new(reviews)
    end

end