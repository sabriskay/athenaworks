import * as React from 'react';
import './Style.scss';

//component views
import SectionList from '../SectionList';

export default class Home extends React.Component  {
    render() {
        return (
            <div className={'container'}>
                <SectionList/>
            </div>
  
        );
    }
}