import * as React from 'react';
import './Style.scss';


export default class Profile extends React.Component  {

    render() {
        return (
            <div className={'info-component'}>
                <h3>Users</h3>
                <p>If you wantto get contact information to specific user, just select group and them select him from the list below</p>
            </div>
  
        );
    }
}