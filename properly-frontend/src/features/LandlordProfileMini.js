import React from 'react';

const LandlordProfileMini = (props) => {

    const handleClick = () => console.log("Clicked.")

    return (
        <div onClick={handleClick}>
            <h4>{props.attributes.firstName} {props.attributes.lastName}</h4>
        </div>
    )
}

export default LandlordProfileMini;