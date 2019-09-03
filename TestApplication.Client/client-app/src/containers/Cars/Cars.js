import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Cars.css";


const Home = props => {

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

    const showValues = values.map((v) => {
        return <div key={v.id} class="col-auto mb-3">
            <div className="card tb-card">
                <img className="card-img-top tb-card-img" src={v.imageLink} alt="Card cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{v.make + " " + v.model}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" className="btn btn-primary">Go to details</button>
                </div>
            </div>
        </div>
    })

    return <div class="container-fluid mt-4">
        <div class="row justify-content-center">
            {showValues}
        </div>
    </div>

}

export default Home;
