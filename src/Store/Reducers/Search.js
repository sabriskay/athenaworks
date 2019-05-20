import { SEARCHUSER } from "../Actions/ASearchUser";

/*
*
*/
const actions = {
    [SEARCHUSER]: (state, action) => action.payload
}; 

const initialState = '';

export default (state = initialState, action) => {
    const action_type = action.type;

    if (actions[action_type]) {
        const action_handler = actions[action_type];
        const new_state = action_handler(state, action);

        return new_state;
    }
    
    return state;
};