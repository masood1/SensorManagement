
import React, { Component } from 'react';
import './App.css';
import AppBar from "../AppBar";
// import DataSensor from "../DataSensor";
import Mysocket from "../Mysocket";

class App extends Component {
  render() {
    const AppContext = React.createContext();
    return (

      <div className="App">
        
        <AppContext.Provider value={{status:true}}>
        <AppBar/>
        <Mysocket/>
        </AppContext.Provider>

      </div>
    );
  }
}

export default App;

