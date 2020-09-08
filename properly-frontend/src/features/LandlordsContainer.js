import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { selectLandlord, selectLandlords} from './landlordsSlice';
import { selectAddress } from './addressSlice';
import LandlordProfileMini from './LandlordProfileMini';
import { Redirect } from 'react-router-dom'

const LandlordsContainer = (props) => {

    const dispatch =  useDispatch();

    const [redirect, setRedirect] = useState(false)

    const handleClick = (landlord) => {
        dispatch(selectLandlord(landlord))
        setRedirect(true)
    }

    const address = useSelector(selectAddress)

    const searchResults = useSelector(selectLandlords)

    const determineResults = () => {
        if (props.type === "landlord") {
            return searchResults
        } else if (address.landlords) {
            return address.landlords
        } else {
            return []
        }
    }


    const renderLandlords = () => {
        const landlords = determineResults()
        return landlords.map((landlord, id) => <LandlordProfileMini key={id} {...landlord} handleClick={handleClick} />)
    } 
    
    const renderRedirect = () => {
        return (<Redirect to={{
            pathname: `/landlord`
        }}/>)
    }
    
    return (
        <>
        {redirect && renderRedirect()}
        <div>
            {renderLandlords()}
        </div>
        </>
    )
}

export default LandlordsContainer;