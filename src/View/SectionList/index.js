import * as React from 'react';
import './Style.scss';

import InfoPanel from '../InfoPanel';
import UserListContainer from '../../Container/UserList'

export default class SectionList extends React.Component  {

    render() {
        return (
            <div className={'section-list-view'}>
                <InfoPanel/>
                <UserListContainer/>
            </div>
  
        );
    }
}