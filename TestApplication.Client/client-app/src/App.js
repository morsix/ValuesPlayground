import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import axios from 'axios';

function App() {

    const [values, setValues] = useState([]);

    useEffect(() => {
        loadValues();
    }, [])


    const loadValues = () => {
        console.log("getting values");
        axios.get('/api/values').then(r => {
            console.log(r.data);
            setValues(r.data);
        });
    };

    const showValues = values.map((v, idx) => {
        return <div key={idx} class="card">
            <img class="card-img-top" src="..." alt="Card cap"></img>
            <div class="card-body">
                <h5 class="card-title">{v}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button type="button" class="btn btn-primary">Go somewhere</button>
            </div>
        </div>
    })

    return (
        <BrowserRouter>
            <div className="App container">
                <div className="card-deck">
                    {showValues}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
