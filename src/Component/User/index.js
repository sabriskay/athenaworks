import './Style.scss';

import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import { Capitalize } from '../../Utils/String';
import TextClipboard from '../TextClipboard';
import ListItem from '@material-ui/core/ListItem';
import ListItemTextClipboard from '../ListItemTextClipboard';
import ArrowDown from '@material-ui/icons/KeyboardArrowDown';

function User(props) {
  const [open, switchOpen] = React.useState(false);
  const { user } = props;
  let { date } = user.registered;
  const name = Capitalize(user.name.first, user.name.last);
  const { 
    email, 
    phone, 
    picture: { large }, 
    location: { city }, 
    login: { username } 
  } = user;

  date = new Date(date);

  let formatted_date = `${date.getMonth() + 1 + 1}/${date.getDate()}/${date.getFullYear()}`;

  return (
    <Card className={'user-card'}>
      <div className={'user-card-details'}>
        <CardContent className={'user-card-details-content'}>
          <Typography component="h5" variant="h5">
           {name}
          </Typography>
          <Typography className="user-card-with-clipboard" variant="subtitle1" color="textSecondary">
            <TextClipboard value={email}/> 
          </Typography>
          <ArrowDown className={`user-card-detail-collapse ${open && 'active'}`} onClick={() => switchOpen(!open)}/>
        </CardContent>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <CardContent>
            <ListItem className='user-card-detail-list-item-content'>
              <ListItemTextClipboard title={'User Name'} value={username} />
              <ListItemTextClipboard title={'User Since'} value={formatted_date} />
            </ListItem>
            <ListItem className='user-card-detail-list-item-content'>
              <ListItemTextClipboard title={'Contact Phone'} value={phone} />
              <ListItemTextClipboard title={'Location City'} value={city} />
            </ListItem>
          </CardContent>
        </Collapse>
      </div>
      
        
        <CardMedia
          className={`user-card-cover`}
          image={large}
        />
    </Card>
  );
}

export default User;
