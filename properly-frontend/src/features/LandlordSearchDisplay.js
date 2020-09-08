import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import LandlordsContainer from "./LandlordsContainer";
import { searchLandlords } from './landlordsSlice';
import { useDispatch } from 'react-redux';

const LandlordSearchDisplay = () => {

    const dispatch = useDispatch()
    const location = useLocation();

    useEffect(() => {
        const name = new URLSearchParams(location.search).get('name')
        dispatch(searchLandlords(name))
    });

    return (
        <div>
            <h1>Search Results</h1>
            <p>{new URLSearchParams(location.search).get('name')}</p>
            <LandlordsContainer type={"landlord"} />
        </div>
    )
}

export default LandlordSearchDisplay;