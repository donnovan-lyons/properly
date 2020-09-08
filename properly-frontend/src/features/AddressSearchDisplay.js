import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { searchAddresses } from './addressSlice';
import LandlordsContainer from "./LandlordsContainer";
import MapContainer from "./MapContainer";

const AddressSearchDisplay = () => {

    const dispatch = useDispatch()
    const location = useLocation();

    useEffect(() => {
        const address = new URLSearchParams(location.search).get('address')
        dispatch(searchAddresses(address))
    });

    return (
        <div>
            <p>{new URLSearchParams(location.search).get('address')}</p>
            {console.log(location)}
            <LandlordsContainer />
            <MapContainer location={location.state.location} address={location.state.address} />
        </div>
    )
}

export default AddressSearchDisplay;