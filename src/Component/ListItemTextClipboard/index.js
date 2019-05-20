import './Style.scss';

import * as React from 'react';
import Clipboard from 'react-clipboard.js';
import FileCopy from '@material-ui/icons/FileCopy';
import Check from '@material-ui/icons/Check';
import ListItemText from '@material-ui/core/ListItemText';

function ListItemTextClipboard (props) {
    const [ready, setReady] = React.useState(false);
    const showCheck = function (event) {
        event.preventDefault();
        event.stopPropagation();
        setReady(true);
        setTimeout(() => setReady(false), 2000);
    }
    const secondaryStyle = {
        style: {
          color: "black",
          fontSize: "1rem",
          marginTop: "-5px",
          textTransform: "capitalize"
        }
      }
      const primaryStyle = {
        style: {
          color: "gray",
          fontSize: "0.7rem",
          cursor: "default"
        }
      }

    return (
        <div className={'list-item-text-clipboard-wrap'}>
            <Clipboard onClick={showCheck} data-clipboard-text={props.value} className={'list-item-text-clipboard-element'}>
              <ListItemText 
                  primaryTypographyProps={primaryStyle}
                  secondaryTypographyProps={secondaryStyle}
                  primary={props.title} 
                  secondary={props.value}/>
                  {ready ? <Check style={{width: '10px'}} /> : <FileCopy style={{width: '10px'}} />}
            </Clipboard>
        </div>
    ); 
} 
    
export default ListItemTextClipboard;