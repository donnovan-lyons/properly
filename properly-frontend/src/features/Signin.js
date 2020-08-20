import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoggedIn, logIn } from './authSlice';


const Signin = () => {

    const dispatch = useDispatch();

    const isLoggedIn = useSelector(selectIsLoggedIn);

    const [inputValues, setInputValues] = useState({
        userInfo: '', password: '', redirectOnLogin: isLoggedIn ? true : false
    });
      
    const handleOnChange = event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        const credentials = {user: {email: inputValues['userInfo'], password: inputValues['password']}}
        dispatch(logIn(credentials))
        setInputValues({ ...inputValues, redirectOnLogin: true })
    }

    return (
        <>
        {inputValues['redirectOnLogin'] && <Redirect to="/"/>}
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="signInInfo">
                    <Form.Label>Username or Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter username or email" name="userInfo" value={inputValues['userInfo']} onChange={handleOnChange} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="signInPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={inputValues['password']} onChange={handleOnChange} />
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