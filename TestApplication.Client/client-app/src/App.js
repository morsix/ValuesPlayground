import React, { useState, useEffect} from 'react';
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

    const showValues = <div>
        {values.map((v, idx) => <p key={idx}> {v} </p>)}
        </div>
       
    return (
        <BrowserRouter>
            <div className="App">
                <div>The values are:</div>
                {showValues}
            </div>
        </BrowserRouter>
    );
}

export default App;
