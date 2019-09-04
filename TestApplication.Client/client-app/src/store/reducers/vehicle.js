import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const initialState = {
    vehicles: [],
    error: false
};


const setVehicles = (state,action) => {
    console.log("Reducer");
    console.log(action.payload);
    return updateObject(state, {
        vehicles: action.payload
    })
}

const fetchVehiclesFailed = (state,action) => {
    console.log("error");
    return updateObject(state, {error: true});
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.SET_VEHICLES: return setVehicles(state,action);
        case actionTypes.FETCH_VEHICLES_FAILED: return fetchVehiclesFailed(state,action)
        default: return state;
    }
};

export default reducer;