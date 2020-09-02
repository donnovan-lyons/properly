import React from 'react';

const LandlordProfileMini = (landlord) => {

    const selectLandlord = () => {
        landlord.handleClick(landlord)
    }

    return (
        <div onClick={selectLandlord}>
            <h4>{landlord.first_name} {landlord.last_name}</h4>
            <h5>{landlord.reviews.length} reviews</h5>
        </div>
    )
}

export default LandlordProfileMini;