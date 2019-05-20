import * as React from 'react';
import UsersListComponent from '../Component/UsersList';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import AListUsers  from '../Store/Actions/AListUsers';
import { getUserListState } from '../selector';

class UsersListContainer extends React.Component {


    render () {
        const props = this.props;
        
        return (
            <UsersListComponent users={Object.keys(props.users)}/>
        );
    }

    componentDidMount() {
        this.props.getUserList();
    }

} 

const mapStateToProps = function(state) {
    return {
        users: getUserListState(state)
    }
};

const mapDispatchToProps = function (dispatch) {
    return {
        getUserList: () => dispatch(AListUsers())
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(
    UsersListContainer
);