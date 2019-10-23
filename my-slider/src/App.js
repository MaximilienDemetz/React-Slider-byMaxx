import React, {Component} from 'react';
import './App.css';
import SliderMax from './Slider/SliderRoot';
import data from './datas/datas';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        <SliderMax data={data}/>
      </div>
    );
  }
}
export default App;