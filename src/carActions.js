export function addCar(carName) {
  return {type: 'ADD', payload: {name: carName}}
}

export function updateCar(carIndex, car) {
  return {type: 'UPDATE', payload: {index: carIndex, car: car}}
}