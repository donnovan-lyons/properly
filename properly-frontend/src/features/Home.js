import React, { useState } from 'react'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Home = () => {

    const [searchText, setSearchText] = useState('')

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
                    <Form.Control placeholder="Search for a Landlord or an Address" value={searchText} onChange={onChange} />
                    <ToggleButtonGroup type="checkbox" defaultValue={[1]} className="mb-2">
                        <ToggleButton value={1}>Find a Landlord</ToggleButton>
                        <ToggleButton value={2}>Search by Address</ToggleButton>
                    </ToggleButtonGroup>
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