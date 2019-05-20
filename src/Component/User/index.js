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

function User(props) {
  const [open, switchOpen] = React.useState(false);
  const { user } = props;
  const { date } = user.registered;
  const name = Capitalize(user.name.first, user.name.last);
  const { 
    email, 
    phone, 
    picture: { large }, 
    location: { city }, 
    login: { username } 
  } = user;

  return (
    <Card className={'user-card'} onClick={() => switchOpen(!open)}>
      <div className={'user-details'}>
        <CardContent className={'user-content'}>
          <Typography component="h5" variant="h5">
           {name}
          </Typography>
          <Typography className="with-clipboard" variant="subtitle1" color="textSecondary">
            <TextClipboard value={email}/>
          </Typography>
        </CardContent>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <CardContent>
            <ListItem style={{ display: 'grid', gridAutoFlow: 'column' }}>
              <ListItemTextClipboard title={'User Name'} value={username} />
              <ListItemTextClipboard title={'User Since'} value={date} />
            </ListItem>
          </CardContent>
        </Collapse>
      </div>
      <CardMedia
        className={'user-cover'}
        image={large}
      />
    </Card>
  );
}

export default User;
