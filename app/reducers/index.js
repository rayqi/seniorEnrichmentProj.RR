// `combineReducers` is not currently used, but eventually should be for modular code :D
// When you're ready to use it, un-comment the line below!
//  import {combineReducers} from 'redux'




import { combineReducers } from 'redux'
import CampusReducer from './CampusReducer';
import StudentReducer from './StudentReducer';

const rootReducer = combineReducers({
    campus: CampusReducer,
    student: StudentReducer,
});

export default rootReducer;

