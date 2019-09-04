import React,{ useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import "./Cars.css";


const Cars = props => {

    // const [values, setValues] = useState([]);

    useEffect(() => {
        props.onInitVehicles();
    }, [])


    // const loadValues = () => {
    //     console.log("getting values");
    //     axios.get('/api/values').then(r => {
    //         console.log(r.data);
    //         setValues(r.data);
    //     });
    // };

    const showValues = props.cars.map((v) => {
        return <div key={v.id} className="col-auto mb-3">
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

    return <div className="container-fluid mt-4">
        <div className="row justify-content-center">
            {showValues}
        </div>
    </div>

}

const mapStateToProps = state => {
    return {
        cars: state.vehicle.vehicles
    };
}

const mapDispatchToProps = dispatch =>{
    return {
        onInitVehicles: () => dispatch(actions.initVehicles()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
