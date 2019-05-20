import * as React from 'react';
import './Style.scss';

function Button (props) {

    return (
        <button
            type={props.type}
            variant="contained"
            className={'button'}
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
} 

export default Button;