import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';

const drawerWidth = 325;



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
   
    },
    drawerPaper: {
      background: '#6441A4',
      width: drawerWidth,
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
    }
    },

    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.main,
      padding: theme.spacing(3),
    },
}));


export default function SideBar(props) {

    const classes = useStyles();
    return(
        <div className={classes.root}>
        <CssBaseline />
        
        <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >

      </Drawer>
      </div>
        

    )



}
      