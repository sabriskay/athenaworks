import React from 'react';
import {connect} from 'react-redux';
import ASearchUser from '../Store/Actions/ASearchUser';
import ComponentSearchUser from '../Component/SearchUser';

function SearchUser ({ search }) {
    return (
        <ComponentSearchUser onSearch={search} />
    );
}
 
const mapStateToProps = state => {
  return {users: state.users};
}

const mapDispatchToProps = (dispatch) => ({
  search: filters => dispatch(ASearchUser(filters))  
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(SearchUser);