import React from "react";
import Websocket from "react-websocket";
import SensorCard from "../SensorCard";
import _ from "lodash";

class Mysocket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sensors: []
    };
  }
  

  handleData = data => {
    let result = JSON.parse(data);

//  var findObject =  resultObj => this.state.sensors.find(sensorObject => sensorObject.id === resultObj.id) || resultObj;
// let joinM = findObject(result);
// console.log("Joine ",joinM);
    // var joined = this.state.sensors.concat(joinM);
    // this.setState({ sensors: joinM });
    let check = [];
    check.push(result);


    function mergeById(arr) {
        return {
          with: function(arr2) {
            return _.map(arr, item => {
              return _.find(arr2, obj => obj.id === item.id) || item
            })
          }
        }
      }
if(_.some(this.state.sensors, function(sns) {
    return sns.id === result.id;})){
    var joined =  mergeById(this.state.sensors).with(check);
    this.setState({ sensors: joined });
    }
    else{
        var joined = _(this.state.sensors).differenceBy(check, 'id').concat(check).value();
        this.setState({ sensors: joined });
    }
   console.log(" joined joined",joined);

    console.log(this.state.sensors);
  };
  handleOpen() {
    console.log("Connected");
  }
  handleClose() {
    console.log("Disconnected");
  }

  sendMessage = (message) => {
    console.log("message    here   ,,,,, ", message);
  this.refWebSocket.sendMessage(JSON.stringify(message));
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <SensorCard
          sensor={this.state.sensors}
          sendMessage={this.sendMessage}
        />
        <Websocket
          url="ws://localhost:5000"
          onMessage={this.handleData}
          onOpen={this.handleOpen}
          onClose={this.handleClose}
          reconnect={true}
          debug={true}
          ref={Websocket => {
            this.refWebSocket = Websocket;
          }}
        />
      </div>
    );
  }
}

export default Mysocket;
