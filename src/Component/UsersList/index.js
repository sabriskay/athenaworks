import './Style.scss';

import * as React from 'react';
import UserContainer from '../../Container/User';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import SearchUser from '../../Container/SearchUser';
import { TableFooter } from '@material-ui/core';

class UsersList extends React.Component {
  state = {
    page: 0,
    rowsPerPage: 5,
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ page: 0, rowsPerPage: event.target.value });
  };

  render ()  {
    const rows = this.props.users;
    const { rowsPerPage, page } = this.state;

    return (
      <Table className={'table'}>
        
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="row" style={{display: 'grid', justifyContent: 'right'}}>
            <SearchUser/>
            </TableCell>
          </TableRow>
        </TableHead>
        
        
        <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(user_id => (
            <TableRow key={user_id} >
              <TableCell component="th" scope="row" style={{border: 'none'}}>
                <UserContainer id={user_id} key={user_id}/>
              </TableCell>
            </TableRow> 
          ))}
        </TableBody>
        <TableFooter>
        <TableRow>
        
        <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                native: true,
              }}
              onChangePage={this.handleChangePage}
              onChangeRowsPerPage={this.handleChangeRowsPerPage}
            />    
        
            </TableRow>
        </TableFooter>
      </Table>
    );
  }

} 

export default UsersList;