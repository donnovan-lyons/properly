class LandlordSerializer
 
  def initialize(landlord_object)
      @landlord = landlord_object
  end
 
  def to_serialized_json
      @landlord.to_json(
          :include => {
              :addresses => {
                  :only => [:house_number, :street, :city, :state, :country]
              },
              :reviews => {
                  :only => [:title, :review, :rating]
              }
      }, :except => [:updated_at])
  end
  

end