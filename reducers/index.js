import { combineReducers } from 'redux';
import auth from './auth_reducer';
import jobs from './job_reducer';
import likedjobs from './likes_reducers';

export default combineReducers({
  auth, jobs, likedjobs
});
