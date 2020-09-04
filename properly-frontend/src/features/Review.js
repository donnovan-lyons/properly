import React from 'react'

const Review = (review) => {
    return (
        <div>
            <h5>Rating: {review.rating}</h5>
            <h5>{review.title}</h5>
            <p>{review.review}</p>
        </div>
    )
}

export default Review;