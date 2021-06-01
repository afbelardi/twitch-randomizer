import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Checkboxes from './CheckBoxes'
import Slider from './Slider'
import RandomButton from './RandomButton'
import { makeStyles, useTheme } from '@material-ui/core/styles';


const drawerWidth = 380;
const mobileDrawerWidth = 240;



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.down('sm')]: {
        width: mobileDrawerWidth
    },
    background: '#6441A4'
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
    categories: {
        fontWeight: '400',
        fontSize: '50px',
        color: '#F2F3F4',
        marginLeft: '3%',
        marginBottom: '3%',
        [theme.breakpoints.down('sm')]:{
            fontSize: '35px',
            marginLeft: '5.5%'
        },
        
  },
  follower: {
    fontWeight: '400',
    fontSize: '50px',
    color: '#F2F3F4',
    marginLeft: '4%',
    marginTop: '15%',
    marginBottom: '3%',
    [theme.breakpoints.down('sm')]:{
        fontSize: '35px',
        marginLeft: '5.5%'
    }
  },
  divider: {
      background: '#F2F3F4',
      width: '230px',
      marginTop: '-10px',
      [theme.breakpoints.down('sm')]:{
        width: '160px'
      }
  },
  followerDivider: {
    background: '#F2F3F4',
    marginTop: '2px',
    width: '330px',
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]:{
      width: '125px',
      marginLeft: '15px'
    }
    
  }
}));

export default function ResponsiveDrawer(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme()
    const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Typography variant='h2' className={classes.categories}>Categories</Typography>
      <Divider className={classes.divider} variant='middle'/>
      <Checkboxes />
      <Typography variant='h3' className={classes.follower}>Viewer Amount</Typography>
      <Divider className={classes.followerDivider} variant='middle'/>
      <Slider/>
      <RandomButton />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon fontSize='large' style={{color: '#6441A4', marginLeft: 10}}/>
        </IconButton>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      
    </div>
  );
}


