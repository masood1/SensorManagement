import React from "react";
import { makeStyles, withStyles, lighten } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import LinearProgress from "@material-ui/core/LinearProgress";

const AppContext = React.createContext({ status: true });
const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: "#b2dfdb"
  },
  barColorPrimary: {
    backgroundColor: "#00695c"
  }
})(LinearProgress);

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    backgroundColor: "#EAF2F8",

    "-webkit-box-shadow": "3px 11px 16px 7px rgba(0,0,0,0.49)",
    "box-shadow": "3px 11px 16px 7px rgba(0,0,0,0.49)"
  },
  media: {
    height: 140
  },
  connectButton: {
    width: "100%"
  },
  numberCircle: {
    "border-radius": "25%",
    width: "40%",
    height: "40%",
    padding: "12px",
    background: "#FEF9E7",
    border: "2px solid #666",
    color: "#666m",
    "text-align": "center",
    font: "24px Arial, Orbitron",
    "letter-spacing": "7px"
  }
});

const progressStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

export default function SensorCard(props) {
  const classes = useStyles();
  const progClass = progressStyle();
  const arrsensor = props.sensor;
  var st;
  return (
    <div>
      <AppContext.Consumer>
        {context => (st = context.status)}
      </AppContext.Consumer>
      <Grid container spacing={5}>
        {arrsensor.map(function(snr, i) {
          let message = {
            id: snr.id,
            command: snr.connected ? "disconnect" : "connect"
          };

          if (true) {
            return (
              <Grid Key={i} item xs={4}>
                <Card Key={i} className={classes.card}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {snr.name}
                      </Typography>
                      <hr /> <br />
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        align="left"
                      >
                        <span className={classes.numberCircle}>
                          {" "}
                          {snr.value ? snr.value : 0} {snr.unit}{" "}
                        </span>
                      </Typography>
                      <br />
                      <Typography
                        align="right"
                        gutterBottom
                        variant="h6"
                        component="h6"
                      >
                        {snr.connected ? "Connected" : "Disconnected"}
                      </Typography>
                    </CardContent>
                    {/* <ColorLinearProgress  className={progClass.margin} style={snr.connected ? {display:"block"} : {display:"none"}}/> */}
                  </CardActionArea>
                  <CardActions>
                    <Button
                      onClick={() => props.sendMessage(message)}
                      variant="contained"
                      className={classes.connectButton}
                      color={snr.connected ? "secondary" : "primary"}
                    >
                      {snr.connected ? "Disconnect" : "Connect"}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          }
        })}
      </Grid>
    </div>
  );
}
