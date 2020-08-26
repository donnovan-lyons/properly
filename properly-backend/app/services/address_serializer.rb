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
                      :reviews => {
                      :only => [:title, :rating]
                    }
                  }
              }
      }, :except => [:created_at, :updated_at])
  end
  

end