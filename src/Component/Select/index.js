import * as React from 'react';
import './Style.scss';

function Select ({ users = {} }) {

    function getPosition () {
        let groups = new Set();

        for (const id in users) {
            const group = users[id].group;
            groups.add(group);
        }
        
        return groups;
    }

    function createOptions () {
        const groups = getPosition();
        let options = [];

        for (let item of groups) {
            options.push(<option value={item} key={item}> 
                {item}
            </option>)
        }
        return options;
    }
	
	return (
        <select className={'select'}>
            {createOptions()}
        </select>

	);
} 

export default Select;