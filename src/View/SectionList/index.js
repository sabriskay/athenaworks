import * as React from 'react';
import './Style.scss';

import InfoPanel from '../InfoPanel';
import SearchUser from '../../Container/SearchUser';
import UserListContainer from '../../Container/UserList'

export default class SectionList extends React.Component  {

    render() {
        return (
            <div className={'section-list-component'}>
                <InfoPanel/>
                <UserListContainer/>
            </div>
  
        );
    }
}