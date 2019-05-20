import './Style.scss';

import * as React from 'react';
import Clipboard from 'react-clipboard.js';
import FileCopy from '@material-ui/icons/FileCopy';
import Check from '@material-ui/icons/Check';

function ClipboardComponent (props) {
    const [ready, setReady] = React.useState(false);
    const showCheck = function (event) {
        event.preventDefault();
        event.stopPropagation();
        setReady(true);
        setTimeout(() => setReady(false), 2000);
    }

    return (
        <div className="wrap">
            <Clipboard onClick={showCheck} data-clipboard-text={props.value} className={'element'}>
                {ready ? <Check style={{width: '10px'}} /> : <FileCopy style={{width: '10px'}} />}
            </Clipboard>
        </div>
    ); 
} 
    
export default ClipboardComponent;