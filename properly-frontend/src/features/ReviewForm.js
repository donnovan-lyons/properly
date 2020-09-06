import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { selectUserInfo } from './authSlice';
import { useSelector } from 'react-redux';
import { addReview } from './landlordsSlice';
import { useDispatch } from 'react-redux';

const ReviewForm = (landlord) => {

    const dispatch = useDispatch();

    const user = JSON.parse(useSelector(selectUserInfo));

    const [formValues, setFormValues] = useState({
        rating: '' , title: '', review: '', landLordId: landlord.id, userId: user.id
    });

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(addReview(formValues))
        landlord.handleSubmit()
        setFormValues({ ...formValues, title: '', rating: '', content: ''});
    }

    const handleChange = event => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value });
    }
    
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="reviewFormRating">
                    <Form.Label >
                        Please rate:
                    </Form.Label>
                    <br />

                    {[1,2,3,4,5].map( (value, idx) => (
                        <Form.Check key={idx} inline type="radio" label={value} name='rating' id={`rating`} value={idx} onChange={handleChange} />
                    ))}
                </Form.Group>

                <Form.Group as={Row} controlId="reviewFormTitle">
                    <Form.Label column sm={2}>Title:</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" name='title' value={formValues['title']} sm={10} onChange={handleChange} />
                    </Col>
                </Form.Group>

                <Form.Group controlId="reviewFormContent">
                <Form.Label>Review:</Form.Label>
                    <Form.Control as="textarea" name='review' value={formValues['review']} onChange={handleChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit Review
                </Button>
            </Form>
        </div>
    )
}

export default ReviewForm;