import React from 'react';
import { useLocation } from "react-router-dom";

const LandlordSearchDisplay = () => {

    const location = useLocation();

    return (
        <div>
            <p>{new URLSearchParams(location.search).get('name')}</p>
        </div>
    )
}

export default LandlordSearchDisplay;