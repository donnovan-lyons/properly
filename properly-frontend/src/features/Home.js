import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Home = () => {

    const [searchText, setSearchText] = useState('')
    const [value, setValue] = useState("landlord");

    const handleChange = (val) => { 
        setValue(val.currentTarget.dataset.rbEventKey);
    }

    const placeHolder = () => {
        return value === "landlord" ? "Search by landlord name" : "Search by address"
    } 

    const onChange = e => setSearchText(e.target.value)

    
    const handleOnSubmit = event => {
        event.preventDefault();
        console.log("Submitted")
        setSearchText('')
    }

    return (
        <div>
            <h3>The only way to rent</h3>
            <h1>Properly</h1>
            <Form onSubmit={e => handleOnSubmit(e)}>
                <Form.Row>
                    <Col>
                    <Form.Control placeholder={placeHolder()} value={searchText} onChange={onChange} />
                    <Nav variant="pills" defaultActiveKey={value}>
                        <Nav.Item>
                            <Nav.Link eventKey="landlord" onClick={handleChange}>Find a Landlord</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="address" onClick={handleChange}>Search by Address</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col xs="auto">
                    <Button type="submit" className="mb-2">
                        Search
                    </Button>
                    </Col>
                </Form.Row>
            </Form>
        </div>
    );
};

export default Home;