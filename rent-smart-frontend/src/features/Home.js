import React, { useState } from 'react'

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
            <h3>Renting is an investment.</h3>
            <h1>Rent Smart.</h1>
            <form onSubmit={e => handleOnSubmit(e)}>
                <input value={searchText} onChange={onChange}/>
                <input type="submit" value="Search" />
            </form>
        </div>
    );
};

export default Home;
