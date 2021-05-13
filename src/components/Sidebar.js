import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import GamesIcon from '@material-ui/icons/Games';
import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

import CssBaseline from '@material-ui/core/CssBaseline';

const drawerWidth = 420;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    drawerPaper: {
      width: drawerWidth,
      background: '#6441A4',
      overflowY: 'scroll',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
        transition: '1s'
      },
      [theme.breakpoints.down('md')]: {
        width: 300,
        transition: '1s'
      },
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    wrapper: {
      
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
      // justifyContent: 'center',
      // alignItems: 'center',
      // flexWrap: 'wrap'
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.main,
      padding: theme.spacing(3),
    },
    button: {
      margin: 20

    }
}));





export default function SideBar(props) {


    const classes = useStyles();
    return(
        <>
        <CssBaseline />
        
        <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <h1 id="categories">Categories</h1>
        <div className={classes.wrapper}>
          
          <Divider light />
          <Button className={classes.button} variant="contained" size='large' startIcon={<GamesIcon />}>Games</Button>
          <Button className={classes.button} variant="contained" size='large' startIcon={<SettingsVoiceIcon />}>IRL</Button>
          <Button className={classes.button} variant="contained" size='large' startIcon={<MusicNoteIcon />}>Music</Button>
          <Button className={classes.button} variant="contained" size='large' startIcon={<SportsEsportsIcon />}>Esports</Button>
         
          
        </div>

      </Drawer>
      </>
        

    )



}
      