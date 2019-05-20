import * as React from 'react';
import UserComponent from '../Component/User';
import { connect } from 'react-redux';
import { getUserListState } from '../selector';

function UserContainer (props) {
    return (
        <UserComponent user={props.user}/>
    );
} 

const mapStateToProps = function(state, props) {
    return {
        user: state.Users[props.id]
    }
};

export default connect(mapStateToProps, {})(
    UserContainer
);