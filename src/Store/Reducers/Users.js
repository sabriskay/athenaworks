import { SETUSERSDATA } from "../Actions/ASetUsersData";

const actions = {
    [SETUSERSDATA]: (state, {payload}) => ({
        ...state, 
        ...payload
        .filter(user => !!user.id.value)
        .reduce((memo, user) => {
            return { ...memo, [user.id.value]: user }
        }, {})
    })
}; 

const initialState = {};

/*
*
*/
export default (state = initialState, action) => {

    if (actions[action.type]) {
        return actions[action.type](state, action);
    }
    
    return state;
};