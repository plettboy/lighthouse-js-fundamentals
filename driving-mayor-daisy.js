function carPassing(cars, speed) {
  const carsArray = cars;
  const nextPassingCar = {
    time: Date.now(),
    speed: speed
  };
  carsArray.push(nextPassingCar);
  return carsArray;
} 