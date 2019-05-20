import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import './Style.scss';

function CustomizedInputBase(props) {
  return (
    <Paper className='container-search-root' elevation={1}>
      <InputBase 
        className='input'
        placeholder="Search User" 
        onChange={event => props.onSearch(event.target.value)} 
      />
      <IconButton className='iconButton' aria-label="Search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default CustomizedInputBase;
