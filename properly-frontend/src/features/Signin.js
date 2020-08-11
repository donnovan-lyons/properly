import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import { selectToken } from './authSlice';



const Signin = () => {

    const token = useSelector(selectToken);

    const [inputValues, setInputValues] = useState({
        userInfo: '', password: '', redirectOnLogin: token ? true : false
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
    }

    return (
        <>
        {inputValues['redirectOnLogin'] && <Redirect to="/"/>}
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="signInInfo">
                    <Form.Label>Username or Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter username or email" value={inputValues['userInfo']} onChange={handleOnChange} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="signInPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={inputValues['password']} onChange={handleOnChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
        </>
    );
};

export default Signin;