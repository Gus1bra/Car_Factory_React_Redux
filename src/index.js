import React, { Component } from 'react';
import CarFactory from './carFactory';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import carReducer from './carReducer'
import ReactDOM from 'react-dom';

var store = createStore( carReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CarFactory/>
      </Provider>
    );
  }
}

ReactDOM.render(
  <div>
    <App />    
  </div>
  ,
  document.getElementById('root')
);
export default App;
