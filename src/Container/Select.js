import * as React from 'react';
import SelectComponent from '../Component/Select';
import { connect } from 'react-redux';

function SelectContainer (props) {
    
    return (
        <SelectComponent users={props.users}/>
    );
} 

const mapStateToProps = function(state, props) {
    return {
        users: state.Users
    }
};

export default connect(mapStateToProps, {})(
    SelectContainer
);