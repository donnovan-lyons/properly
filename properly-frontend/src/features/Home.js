import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import useOnclickOutside from "react-cool-onclickoutside";
import { Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { searchLandlord } from './landlordsSlice';

const Home = () => {

    const dispatch = useDispatch();

    const [option, setOption] = useState("landlord");
    const [redirectForSearch, setRedirectForSearch] = useState(false);


    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
      } = usePlacesAutocomplete({
        requestOptions: {
          /* Define search scope here */
          types: ['address']
        },
        debounce: 200,
      });

    const handleChange = (val) => { 
        setOption(val.currentTarget.dataset.rbEventKey);
    }

    const placeHolder = () => {
        return option === "landlord" ? "Search by landlord name" : "Search by address"
    } 

    const handleInput = (e) => {
        // Update the keyword of the input element
        setValue(e.target.value);
    };

    const renderRedirect = () => {
        if (option === "landlord") {
            dispatch(searchLandlord(value))
            return (<Redirect to={{
                pathname: `/landlords`,
                search: "?name=" + value,
                state: { name: value }
              }}/>)
        } else {
           return(<Redirect
            to={{
              pathname: "/locations",
              search: "?address=" + value,
              state: { address: value }
            }}
          />)
    }}

    
    const handleOnSubmit = event => {
        event.preventDefault();
        if (value.length >= 3) {
            setRedirectForSearch(true)
        }
    }

    const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
        clearSuggestions();
    });
    
    const handleSelect = ({ description }) => () => {
        // When user selects a place, we can replace the keyword without request data from API
        // by setting the second parameter to "false"
        setValue(description, false);
        clearSuggestions();
 
        // Get latitude and longitude via utility functions
        getGeocode({ address: description })
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
            console.log("📍 Coordinates: ", { lat, lng });
        })
        .catch((error) => {
            console.log("😱 Error: ", error);
        });
    };
    
    const renderSuggestions = () =>
        data.map((suggestion) => {
        const {
            id,
            structured_formatting: { main_text, secondary_text },
        } = suggestion;
        
        return (
        <div key={id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </div>
        );
    });
 

    return (
        <>
        {redirectForSearch ? renderRedirect() : null}
        <div ref={ref}>
            
            <h3>The only way to rent</h3>
            <h1>Properly</h1>
            <Form onSubmit={e => handleOnSubmit(e)}>
                <Form.Row>
                    <Col>
                    <Form.Control placeholder={placeHolder()} value={value} onChange={handleInput} disabled={!ready} />
                    {/* We can use the "status" to decide whether we should display the dropdown or not */}
                    {option === "address" && status === "OK" && <ul>{renderSuggestions()} <div className="logo">
                      <img
                        src="https://developers.google.com/maps/documentation/images/powered_by_google_on_white.png"
                        alt="Powered by Google"
                      />
                    </div></ul>}
                    <Nav variant="pills" defaultActiveKey={option}>
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
        </>
    );
};

export default Home;