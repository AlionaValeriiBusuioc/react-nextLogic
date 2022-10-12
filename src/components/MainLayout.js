import React, {useState, useEffect} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import { Grid } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PaidIcon from '@mui/icons-material/Paid';
import CancelIcon from '@mui/icons-material/Cancel';
import CreateIcon from '@mui/icons-material/Create';
import Fab from '@mui/material/Fab';
import GroupsIcon from '@mui/icons-material/Groups';
import DescriptionIcon from '@mui/icons-material/Description';
import LanguageIcon from '@mui/icons-material/Language';
import AddIcon from '@mui/icons-material/Add';

const useStyles = makeStyles(theme => ({
    tabContainer: {
        marginRight: "auto" 
      },
      tab: {
        ...theme.typography.tab, 
        minWidth: "10",
        marginLeft: "25px",
        color: "black !important"
      },
      icon: {
        color: "black !important"
      },
      appbar: {
        backgroundColor: "white !important"
      },
      greyColor: {
        color: "grey"
      },
      space: {
        marginTop: "10px !important"
      },
      spaceLeft: {
        marginLeft: "15px !important"
      },
      labelButton: {
        color: "black !important",
        backgroundColor: "#dbdde1 !important"
      },
      buttonStyle: {
        backgroundColor: "#dbdde1 !important"
      },
      fabStyle: {
        height: "3.2em !important"
      },
      minspaceLeft: {
        marginLeft: "7px !important"
      },
      descriptionIcon: {
        color: "black !important",
        width: "1.5em !important",
        height: "1.5em !important"
      }
}))

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function MainLayout() {
  const theme = useTheme();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClose = (e) => {
    setAnchorEl(null)
    setOpenMenu(false)
  }

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  }

  const routes = [{name: "Home", link: "/", activeIndex: 0}, 
  {name: "Services", link: "/services", activeIndex: 1, ariaOwns: anchorEl ? "simple-menu" : undefined, ariaPopup: anchorEl ? "true" : undefined,
  mouseOver: event => handleClick(event)}, 
  {name: "The Revolution", link: "/revolution", activeIndex: 2}, 
  {name: "About Us", link: "/about", activeIndex: 3}, 
  {name: "Contact Us", link: "/contact", activeIndex: 4}]

  useEffect(() =>{
    if(window.location.pathname ==="/overview" && value !== 0) {
      setValue(0)
    } else if(window.location.pathname ==="/activity" && value !== 1) {
      setValue(1)
    } else if(window.location.pathname ==="/logs" && value !== 2) {
      setValue(2)
    } else  if(window.location.pathname ==="/reports" && value !== 3) {
      setValue(3)
    } else if(window.location.pathname ==="/tasks" && value !== 4) {
      setValue(4)
    } else  if(window.location.pathname ==="/transactions" && value !== 5) {
      setValue(5)
    } else  if(window.location.pathname ==="/quatations" && value !== 6) {
        setValue(6)
    } else  if(window.location.pathname ==="/project" && value !== 7) {
        setValue(7)
    }
    })

    const tabs = (
    <React.Fragment>
     <Tabs value={value} onChange={handleChange}  className={classes.tabContainer}>
                <Tab className={classes.tab} component={Link} to="/overview" label="Overview" value={value} index={0}/>
                <Tab 
                aria-owns={anchorEl ? "simple-menu" : undefined} 
                aria-haspopup={anchorEl ? "true" : undefined}
                className={classes.tab} 
                component={Link}
                onMouseOver={event => handleClick(event)}
                to="/activity" label="Activity"  
                value={value} index={1}/>
                <Tab className={classes.tab} component={Link} to="/logs" label="Logs"  value={value} index={2}/>
                <Tab className={classes.tab} component={Link} to="/reports" label="Reports"  value={value} index={3}/>
                <Tab className={classes.tab} component={Link} to="/tasks" label="Tasks"  value={value} index={4}/>
                <Tab className={classes.tab} component={Link} to="/transactions" label="Transactions"  value={value} index={5}/>
                <Tab className={classes.tab} component={Link} to="/quatations" label="Quatations"  value={value} index={6}/>
                <Tab className={classes.tab} component={Link} to="/project" label="Project Tree"  value={value} index={7}/>
              </Tabs>
              <Avatar>J</Avatar>
              
    </React.Fragment>
  ) 

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} className={classes.appbar}>
        <Toolbar>
          <IconButton
            // color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon className={classes.icon}/>
          </IconButton>
           {tabs}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['DASHBOARD', 'PROJECTS', 'WORKS', 'SETTINGS', 'USERS AND PERMISSIONS'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <DashboardIcon /> : <FolderOpenIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Grid container direction="column">
         <Grid item>
            <Typography>LinkQuip <span className={classes.greyColor}>  #NXTL-LQP0922</span></Typography>
         </Grid>
         <br/>
         <Grid item>
            <Grid item>
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor leo vel.
                </Typography>
                <Typography>
                Semper risus in hendrerit gravida rutrum quisque non tellus.
                Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                </Typography>
            </Grid>
            <Grid item container direction="row">
            <Grid item className={classes.space}>
              <DateRangeIcon />
            </Grid>
            <Grid item className={[classes.spaceLeft, classes.space]}>
             <Typography><span className={classes.greyColor}>Start Date</span></Typography>
             <Typography>1 January 2020</Typography>
            </Grid>
            <Grid item className={[classes.spaceLeft, classes.space]}>
             <Typography><span className={classes.greyColor}>End Date</span></Typography>
             <Typography>31 December 2021</Typography>
            </Grid>
            <Grid className={classes.space}>
                <PaidIcon/>
            </Grid>
            <Grid item className={[classes.spaceLeft, classes.space]}>
             <Typography><span className={classes.greyColor}>Budget</span></Typography>
             <Typography>$1.000.000 <span className={classes.greyColor}>AUD</span></Typography>
            </Grid>
            <Grid item className={[classes.spaceLeft, classes.space]}>
             <Typography><span className={classes.greyColor}>Contingency</span></Typography>
             <Typography>15%<span className={classes.greyColor}>($150.000 AUD)</span></Typography>
            </Grid>
            <Grid item className={[classes.spaceLeft, classes.space]}>
             <Typography><span className={classes.greyColor}>Billing</span></Typography>
             <Typography>Recurrent<span className={classes.greyColor}>(every 1st of the month)</span></Typography>
            </Grid>
            </Grid>
         </Grid>
         <Grid item container direction="row" className={classes.space}>
            <Grid item>
            <Button className={classes.labelButton}>
                <Typography>Label 1</Typography>
                <CancelIcon/>
            </Button>
            </Grid>
            <Grid item className={classes.spaceLeft}>
            <Button className={classes.labelButton}>
                <Typography>Label 2</Typography>
                <CancelIcon/>
            </Button>
            </Grid>
            <Grid item className={classes.spaceLeft}>
            <Button className={classes.labelButton}>
                <Typography>Label 3</Typography>
                <CancelIcon/>
            </Button>
            </Grid>
            <Grid item className={classes.spaceLeft}>
            <Button className={classes.labelButton}>
                <Typography>Label 4</Typography>
                <CancelIcon/>
            </Button>
            </Grid>
            <Grid item className={classes.spaceLeft}>
            <Button className={classes.labelButton}>
                <Typography>Label 5</Typography>
                <CancelIcon/>
            </Button>
            </Grid>
         </Grid>
         <br />
        <Grid item container direction="row" justifyContent="space-between" className={classes.space}>
         <Grid item>Members</Grid>
         <Grid item>
           <CreateIcon /> Manage
         </Grid>
        </Grid>
        <br />
        <Grid item container direction="row">
         <Grid item>
         <Button className={classes.buttonStyle}>
         <Avatar>J</Avatar> 
         <Grid item container direction='column'>
         <Typography className={classes.icon}>Jeffrey Cathart</Typography>
         <Typography className={classes.greyColor}>Requester</Typography>
         </Grid>
        </Button>
         </Grid>
         <Grid item className={classes.minspaceLeft}>
         <Button className={classes.buttonStyle}>
         <Avatar>J</Avatar> 
         <Grid item container direction='column'>
         <Typography className={classes.icon}>Jeffrey's Fiance</Typography>
         <Typography className={classes.greyColor}>Superviser</Typography>
         </Grid>
        </Button>
         </Grid>
         <Grid item className={classes.minspaceLeft}>
         <Button className={classes.buttonStyle}>
         <Fab disabled aria-label="like" className={classes.fabStyle}>
        <GroupsIcon />
        </Fab>
         <Grid item container direction='column'>
         <Typography className={classes.icon}>NextLogic SRL</Typography>
         <Typography className={classes.greyColor}>Provider</Typography>
         </Grid>
        </Button>
         </Grid>
        </Grid>
        <br />
        <Grid item container direction="row" justifyContent="space-between" className={classes.space}>
         <Grid item>Attachments</Grid>
         <Grid item>
           <CreateIcon /> Manage
         </Grid>
        </Grid>
        <Grid item container direction="row">
        <Grid item>
         <Button className={classes.buttonStyle}>
         <DescriptionIcon className={classes.descriptionIcon}/>
         <Grid item container direction='column'>
         <Typography className={classes.icon}>Document name</Typography>
         <Typography className={classes.greyColor}>PDF</Typography>
         </Grid>
        </Button>
         </Grid>
         <Grid item className={classes.minspaceLeft}>
         <Button className={classes.buttonStyle}>
         <DescriptionIcon className={classes.descriptionIcon}/>
         <Grid item container direction='column'>
         <Typography className={classes.icon}>Document name</Typography>
         <Typography className={classes.greyColor}>XLS</Typography>
         </Grid>
        </Button>
         </Grid>
         <Grid item className={classes.minspaceLeft}>
         <Button className={classes.buttonStyle}>
         <DescriptionIcon className={classes.descriptionIcon}/>
         <Grid item container direction='column'>
         <Typography className={classes.icon}>Document name</Typography>
         <Typography className={classes.greyColor}>DOCX</Typography>
         </Grid>
        </Button>
         </Grid>
         <Grid item className={classes.minspaceLeft}>
         <Button className={classes.buttonStyle}>
         <LanguageIcon className={classes.descriptionIcon}/>
         <Grid item container direction='column'>
         <Typography className={classes.icon}>Online resource</Typography>
         <Typography className={classes.greyColor}>https://home.website.url</Typography>
         </Grid>
        </Button>
         </Grid>
         <Grid item className={classes.minspaceLeft}>
         <Button>
         <AddIcon className={classes.descriptionIcon}/>
         <Grid item container direction='column'>
         <Typography className={classes.icon}>Add new</Typography>
         </Grid>
        </Button>
         </Grid>
        </Grid>
        <br />
        <Grid item>Activity and logs (past 7 days)</Grid>
        </Grid>
      </Main>
    </Box>
  );
}
