import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import { selectExpiresAt, signUp } from './authSlice';

const Signup = () => {

    const expiresAt = useSelector(selectExpiresAt);

    const [inputValues, setInputValues] = useState({
        firstName: '' , lastName: '', email: '', password: '', passwordConfirmation: '', redirectOnLogin: expiresAt ? true : false
    });
      
    const handleOnChange = event => {
        console.log(event.target.name)
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
        console.log(inputValues)
    };

    const handleSubmit = e => {
        e.preventDefault();
        setInputValues({ ...inputValues, redirectOnLogin: true });
        signUp(inputValues)
    }

    return (
        <>
        {inputValues["redirectOnLogin"] && <Redirect to="/"/>}
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} controlId="signUpFirstName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control placeholder="First name" name="firstName" value={inputValues['firstName']} onChange={handleOnChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="signUpLastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control placeholder="Last name" name="lastName" value={inputValues['lastName']} onChange={handleOnChange} />
                    </Form.Group>
                </Form.Row>

                    <Form.Group controlId="signUpEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={inputValues['email']} onChange={handleOnChange} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>
                
                <Form.Row>
                    <Form.Group as={Col} controlId="signUpPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={inputValues['password']} onChange={handleOnChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="signUpPasswordConfirmation">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password confirmation" name="passwordConfirmation" value={inputValues['passwordConfirmation']} onChange={handleOnChange} />
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
        </>
    );
}

export default Signup;