import React, { useState, useEffect, Fragment } from 'react';
import axios from "axios";
import "./Car.css";


const Car = props => {

    const [car, setCar] = useState(null);

    useEffect(() => {
        axios.get('/api/values/' + props.match.params.id)
            .then(res => {
                setCar(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [props.match.params.id])

    let displayContent = null;

    if (car) {
        displayContent = <div className="row">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-auto">
                    <h1>{car.make + " " + car.model}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-auto">
                        <p>Year: {car.year}</p>
                        <p>Price: £ {car.price}</p>
                    </div>
                    <div className="col-auto">
                        <img className="tb-car-img" alt="Car" src={car.imageLink}></img>
                    </div>
                </div>
            </div>
        </div>
    }

    return (
        <Fragment>
            {displayContent}
        </Fragment>
    )
}

export default Car;
