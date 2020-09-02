import React from 'react';
import { useSelector} from 'react-redux';
import { selectSelectedLandlord } from './landlordsSlice';

const LandlordProfile = () => {

    const landlord = useSelector(selectSelectedLandlord);

    return (
        <div>
            <h4>{landlord.first_name}  {landlord.last_name}</h4>
            The full page.
        </div>
    )

}

export default LandlordProfile;