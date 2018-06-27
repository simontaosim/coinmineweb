import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';


import List from '@material-ui/core/List';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  
});

class SideNavList extends React.Component {

  state = {
    open: false,
    anchor: 'left',
  };


  render() {
    const {classes} = this.props;
    const testIcon = {
        icon: <InboxIcon />,
    }
    return (
      <List className={classes.root}>
        <Router>
            <NavLink  exact to="login" style={{textDecoration: 'none'}}>

            <ListItem button onClick={this.props.onClick}>
            
                <ListItemIcon>
                    {testIcon.icon}
                </ListItemIcon>
            
                <ListItemText primary="Inbox" />
            
            </ListItem>
            </NavLink>

        </Router>
            <ListItem button>
            <ListItemIcon>
                <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Starred" />
            </ListItem>
            <ListItem button>
            <ListItemIcon>
                <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Send mail" />
            </ListItem>
            <ListItem button>
            <ListItemIcon>
                <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
            </ListItem>
            <ListItem button>
            <ListItemIcon>
                <MailIcon />
            </ListItemIcon>
            <ListItemText primary="All mail" />
            </ListItem>
            <ListItem button>
            <ListItemIcon>
                <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary="Trash" />
            </ListItem>
            <ListItem button>
            <ListItemIcon>
                <ReportIcon />
            </ListItemIcon>
            <ListItemText primary="Spam" />
            </ListItem>
            </List>
    );
  }
}

SideNavList.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SideNavList);