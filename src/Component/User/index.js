import './Style.scss';

import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import { Capitalize } from '../../Utils/String';
import Clipboard from '../Clipboard';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import moment from 'moment';

function User(props) {
  const [open, switchOpen] = React.useState(false);
  const { user } = props;
  const { email } = user;
  const { city } = user.location;
  const { phone } = user;
  const { username } = user.login;
  const { date } = moment(user.registered).format('');
  const { picture: { large } } = user;
  const name = Capitalize(user.name.first, user.name.last);

  const secondaryStyle = {
    style: {
      color: "red"
    }
  }

  return (
    <Card className={'user-card'} onClick={() => switchOpen(!open)}>
      <div className={'user-details'}>
        <CardContent className={'user-content'}>
          <Typography component="h5" variant="h5">
           {name}
          </Typography>
          <Typography className="with-clipboard" variant="subtitle1" color="textSecondary">
            {email} <Clipboard value={email}/>
          </Typography>
        </CardContent>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <CardContent>
            <ListItem>
              <ListItemText secondaryTypographyProps={secondaryStyle} primary='User name' secondary={username}/>
              <ListItemText primary='User since' secondary={date}/>
            </ListItem>
            <ListItem>
              <ListItemText primary='City' secondary={city}/>
              <ListItemText primary='Phone' secondary={phone}/>
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
