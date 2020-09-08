class AddressSerializer
 
  def initialize(address_object)
      @address = address_object
  end
 
  def to_serialized_json
      @address.to_json(
          :include => {
              :landlords => {
                  :only => [:id, :first_name, :last_name],
                  :include => {
                    :addresses => {
                        :only => [:house_number, :street, :city, :state, :country, :zip]
                    },
                    :reviews => {
                        :only => [:title, :rating, :review]
                    }
                  }
              }
      }, :except => [:created_at, :updated_at])
  end
  

end