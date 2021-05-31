import React, {useState} from 'react';
import Checkbox from '@material-ui/core/Checkbox'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import {makeStyles, createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root:{
        color: '#F2F3F4',
    },
    listItemText: {
        fontSize: '30px'
    }
})

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#F2F3F4'
        }
    }
})

export default function Checkboxes() {
    const classes = useStyles()
    const [checked, setChecked] = useState([])

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
    
        setChecked(newChecked);
    };

    return(
        <ThemeProvider theme={theme}>
            <List className={classes.root}>
            {
                ['Games', 'IRL', 'Music', 'Esports'].map((value) => {
                const labelId = `checkbox-list-label-${value}`;

                    return (
                        <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                            <ListItemIcon>
                                <Checkbox
                                edge="start"
                                checked={checked.indexOf(value) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                                size='medium'
                                color='primary'
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={value} classes={{primary:classes.listItemText}}/>
                        </ListItem>
                    );
                })
            }
            </List>
        </ThemeProvider>
    )
}