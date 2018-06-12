import React, {Component} from 'react';
import { connect } from 'react-redux';
import { updateCar } from './carActions';

class Car extends Component {
  
  motorOn = () => {
    this.props.updateCar(this.props.index, this.props.car.set('engine', true));
  }

  motorOff = () => {
    this.props.updateCar(this.props.index, this.props.car.set('car', false).set('engine', false).set('wheels', false));
  }

  carDrive = () => {
    var engine = this.props.car.get( 'engine');
    if( engine === true){
      this.props.updateCar(this.props.index, this.props.car.set('car', true).set('wheels', true));  
    }   
  }

  carStay = () => {
    this.props.updateCar(this.props.index, this.props.car.set('car', false).set('wheels', false));
  }

  render() {
    var name = this.props.car.get( 'name' );
    var car = this.props.car.get( 'car' );
    var wheels = this.props.car.get( 'wheels' );
    var engine = this.props.car.get( 'engine' );
    var carStatus = car ? 'Едет': 'Стоит';
    var engineStatus = engine ? 'Заведён' : 'Заглушён';
    var wheelStatus = wheels ? 'Крутятся' : 'Стоят';    
    return(
      <div > 
        <dl>
          <dt>{name}</dt>
          <dd>{carStatus}</dd>
          <dt>Двигатель</dt>
          <dd>{engineStatus}</dd>
          <dt>Колеса</dt>
          <dd>{wheelStatus}</dd>
        </dl>
        <button onClick={this.motorOn}>Завести</button>
        <button onClick={this.motorOff}>Заглушить</button>
        <button onClick={this.carDrive}>Поехать</button>
        <button onClick={this.carStay}>Остановиться</button>   
    </div> 
    );
  }
}

export default connect(null, {updateCar})(Car);