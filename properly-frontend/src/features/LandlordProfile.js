import React, { useState } from 'react'
import { useSelector} from 'react-redux';
import { selectSelectedLandlord } from './landlordsSlice';
import Address from './Address'
import Review from './Review'
import ReviewForm from './ReviewForm'
import Button from 'react-bootstrap/Button'

const LandlordProfile = () => {

    const landlord = useSelector(selectSelectedLandlord);

    const [formRequested, setFormRequested] = useState(false);

    const handleClick = () => formRequested ? setFormRequested(false) : setFormRequested(true)

    const renderAddresses = () => landlord.addresses.map((address, id) => <Address key={id} {...address} />)

    const renderReviews = () => landlord.reviews.map((review, id) => <Review key={id} {...review} />)
    
    const renderForm = () => <ReviewForm {...landlord} />

    return (
        <div>
            <h2>{landlord.first_name}  {landlord.last_name}</h2>
            <h5>Known Addresses</h5>
            {renderAddresses()}
            <Button variant="primary" type="submit" onClick={handleClick}>
                Write Review
            </Button>
            {formRequested && renderForm()}
            {renderReviews()}
        </div>
    )

}

export default LandlordProfile;