import React from 'react';
import { useLocation } from "react-router-dom";

const MapSearchDisplay = () => {

    const location = useLocation();

    return (
        <div>
            <p>{new URLSearchParams(location.search).get('address')}</p>
        </div>
    )
}

export default MapSearchDisplay;