import React, { useState, useEffect } from 'react'
import './App.css';
import SideBar from './components/SideBar';
import AppBar from './components/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  grid: {
    width: '600px',
    overflowX: 'hidden'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: theme.palette.success.light
  }
}))

function App() {
  const classes = useStyles();
  return (
    <>
         <SideBar/>
        
      
    </>
  );
}

export default App;
