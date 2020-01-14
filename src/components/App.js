import React,{Component} from 'react';
import './App.css';


import Count from './Count/Count';
import Event from './Event/eventtest';
class App extends Component {
  render(){
    return (
      <div className="App">
        
        <Count />
        <Event />
      </div>
    );
  }
}
export default App


