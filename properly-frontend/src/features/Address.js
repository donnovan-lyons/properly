import React from 'react'

const Address = (address) => {
    return (
        <div>
            {address.house_number} {address.street}, {address.city}, {address.state}, {address.country} {address.zip}
        </div>
    )
}

export default Address;