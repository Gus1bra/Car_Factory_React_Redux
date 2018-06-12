import React, {Component} from 'react';
import { connect } from 'react-redux';
import Car from './car';
import {addCar} from './carActions';

class CarFactory extends Component {
  
   createCar = () => {
     this.props.addCar(this.refs.carName.value);
     this.refs.carName.value = '';
   }

  render() {
    return(
      <div>
        <input type='text' placeholder='Назовите машину' ref='carName'/>
        <button onClick={this.createCar}>Создать</button>
        { <div>
            {this.props.cars.map((car, index) => (
              <Car  
                key={index}
                index={index}
                car={car}
              />
            ))}
         </div> }
      </div>
    );
  }
}

 export default connect(
   state => ({
     cars: state
   }),
   {addCar}
 )(CarFactory);