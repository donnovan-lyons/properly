import React, { useState } from 'react';
import { useSelector} from 'react-redux';
import { selectDisplayedLandlord, selectLandlords, selectSelectedLandlord } from './landlordsSlice';
import LandlordProfileMini from './LandlordProfileMini';
import { Redirect } from 'react-router-dom'

const LandlordsContainer = () => {

    const [redirect, setRedirect] = useState(false)

    const landlord = useSelector(selectSelectedLandlord);
    

    const handleClick = (id) => {
        selectDisplayedLandlord(id)
        setRedirect(true)
    }

    const searchResults = useSelector(selectLandlords);

    const renderLandlords = () => searchResults.map((landlord, id) => <LandlordProfileMini key={id} {...landlord} handleClick={handleClick} />)
    
    const renderRedirect = () => {
        return (<Redirect to={{
            pathname: `/landlord`,
            state: { landlord: landlord }
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