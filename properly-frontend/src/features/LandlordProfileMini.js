import React from 'react';

const LandlordProfileMini = (props) => {

    const handleClick = () => console.log("Clicked.")

    return (
        <div onClick={handleClick}>
            <h4>{props.attributes.first_name} {props.attributes.last_name}</h4>
        </div>
    )
}

export default LandlordProfileMini;