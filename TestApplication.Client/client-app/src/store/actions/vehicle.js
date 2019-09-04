import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setVehicles = (payload) => {
    return  {
        type: actionTypes.SET_VEHICLES,
        payload: payload
    };
}

export const fetchVehiclesFailed = () => {
    return {
        type: actionTypes.FETCH_VEHICLES_FAILED
    }
}

export const initVehicles = () => {
    return dispatch => {
        axios.get('/api/values')
        .then(res => {
            dispatch(setVehicles(res.data));
        })
        .catch(err =>{
            dispatch(fetchVehiclesFailed());
        })
    }
}