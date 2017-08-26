import { LIKE_JOB,CLEAR_LIKED_JOBS} from '../actions/types';
import _ from 'lodash';
import { REHYDRATE } from 'redux-persist/constants';

export default function (state = [],action) {
    switch (action.type){
        case REHYDRATE:
            debugger
            //return {...state,persistedState:action.payload}
            return state || [];

            case CLEAR_LIKED_JOBS:

            return [];
        case LIKE_JOB:

            return _.uniqBy([
                action.payload,...state
            ],'jobkey');
        default:
            return state;
    }
}
