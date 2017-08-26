import { FETCH_JOBS,CLEAR_LIKED_JOBS } from '../actions/types';
import { REHYDRATE } from 'redux-persist/constants';
const INITIAL_STATE = {
    results:[]
}

export default function(state = INITIAL_STATE,action){
    switch (action.type) {

        case FETCH_JOBS:
            return action.payload;


        default:
            return state;
    }
}
