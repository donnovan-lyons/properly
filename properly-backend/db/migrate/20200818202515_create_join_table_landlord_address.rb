class CreateJoinTableLandlordAddress < ActiveRecord::Migration[5.2]
  def change
    create_join_table :landlords, :addresses do |t|
      t.index [:landlord_id, :address_id]
      t.index [:address_id, :landlord_id]
    end
  end
end
