import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { selectLandlord, selectLandlords} from './landlordsSlice';
import LandlordProfileMini from './LandlordProfileMini';
import { Redirect } from 'react-router-dom'

const LandlordsContainer = () => {

    const dispatch =  useDispatch();

    const [redirect, setRedirect] = useState(false)

    const handleClick = (landlord) => {
        dispatch(selectLandlord(landlord.id))
        setRedirect(true)
    }

    const searchResults = useSelector(selectLandlords);

    const renderLandlords = () => searchResults.map((landlord, id) => <LandlordProfileMini key={id} {...landlord} handleClick={handleClick} />)
    
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