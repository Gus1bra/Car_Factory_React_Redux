import Immutable from 'immutable';

var initialState =  Immutable.fromJS([
])

export default function carReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      var newCar = Immutable.Map({
        name: action.payload.name,
        car: false,
        engine: false,
        wheels: false,
      })
      return state.push(newCar);
    case 'UPDATE':
      return state.set(action.payload.index, action.payload.car)
    default:
        return state
  }
}