import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
const AppContext = React.createContext({ status: true });

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    backgroundColor: "#EAF2F8"
  },
  media: {
    height: 140
  },
  numberCircle : {
    'border-radius': '50%',
    width: '24px',
    height: '24px',
    padding: '8px',
    background: '#fff',
    border: '2px solid #666',
    color: '#666m',
    'text-align': 'center',
    font: '12px Arial, sans-serif'
}
});

export default function SensorCard(props) {
  const classes = useStyles();
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
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Sensor id is {snr.id} Sensor Value is  <span className = {classes.numberCircle}> {snr.value? snr.value : 0 }{" "} {snr.unit} </span>
               
                      </Typography>

                      <Typography gutterBottom variant="h6" component="h3">
                        Status : {snr.connected ? "Connected" : "Disconnected"}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      onClick={() => props.sendMessage(message)}
                      variant="contained"
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
