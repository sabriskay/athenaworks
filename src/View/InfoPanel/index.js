import * as React from 'react';
import './Style.scss';


export default class InfoPanel extends React.Component  {

    render() {
        return (
            <div className={'info-component'}>
                <h3>Users</h3>
                <p>If you want to get contact information to specific user, just search by name, email or username and them select him from the list below</p>
            </div>
  
        );
    }
}