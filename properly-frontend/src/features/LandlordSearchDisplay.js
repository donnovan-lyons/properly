import React from 'react';
import { useLocation } from "react-router-dom";
import LandlordsContainer from "./LandlordsContainer";

const LandlordSearchDisplay = () => {

    const location = useLocation();

    return (
        <div>
            <h1>Search Results</h1>
            <p>{new URLSearchParams(location.search).get('name')}</p>
            <LandlordsContainer />
        </div>
    )
}

export default LandlordSearchDisplay;