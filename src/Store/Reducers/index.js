/* Third Party Import Block */
import { combineReducers } from "redux";

/* Reducers */
import Users from './Users';
import Search from './Search';

/*
* Place all your reducers here
*/
export default combineReducers({
	Users,
	Search
});