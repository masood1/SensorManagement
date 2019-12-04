import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
const AppContext = React.createContext({status:true});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(2),

},
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  var connected;
  const handleChange = event => {
       setAuth(event.target.checked);
        connected = event.target.checked;
        console.log("Sitch ..... ",connected);

  };
  

  return (
    <div className={classes.root}>
      
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6"  className={classes.title}>
            Sensor Management
          </Typography>
          <FormGroup align="right">
        <FormControlLabel
        className={classes.menuButton}
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Show Connected' : 'Show All'}
        />
                <AppContext.Provider value={{status:connected}}>

            </AppContext.Provider>

      </FormGroup>
        </Toolbar>
      </AppBar>
    </div>
  );
}
