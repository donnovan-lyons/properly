import React from 'react';
import { useSelector} from 'react-redux';
import { selectLandlordSearchResults } from './landlordsSlice';
import LandlordProfileMini from './LandlordProfileMini';

    

const LandlordsContainer = () => {

    const landlordSearchResults = useSelector(selectLandlordSearchResults);
    console.log(landlordSearchResults)
    const renderLandlords = () => landlordSearchResults.map((landlord, id) => <LandlordProfileMini key={id} {...landlord} />)
    
    return (
        <div>
            {renderLandlords()}
        </div>
    )
}

export default LandlordsContainer;