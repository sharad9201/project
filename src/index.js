function calShortestTime(johnFloor, elevatorFloor, speeds) {
  debugger;
  const [
    elevetorPerFloorSpeed,
    elevetorDoorOpenSpeed,
    elevetorDoorCloseSpeed,
    johnWalkingPerFloorSpeed,
  ] = speeds;

  if (johnFloor == 0) return 0;
  const entryTime = elevetorDoorCloseSpeed + elevetorDoorOpenSpeed;

  const timeForElevetorArrival =
    Math.abs(elevatorFloor - johnFloor) * elevetorPerFloorSpeed;
  const timeForJohnToReachElevetorFloor =
    Math.abs(elevatorFloor - johnFloor) * johnWalkingPerFloorSpeed;

  const timeForJohnToReachGroundFloorViaWalkingToElevetor =
    timeForJohnToReachElevetorFloor +
    entryTime +
    elevatorFloor * elevetorPerFloorSpeed +
    elevetorDoorOpenSpeed;

  const timeToReachGroundFloorViaElevetor =
    timeForElevetorArrival +
    entryTime +
    johnFloor * elevetorPerFloorSpeed +
    elevetorDoorOpenSpeed;

  const timeToReachGroundFloorViaWalking = johnFloor * johnWalkingPerFloorSpeed;

  return Math.min(
    timeForJohnToReachGroundFloorViaWalkingToElevetor,
    timeToReachGroundFloorViaElevetor,
    timeToReachGroundFloorViaWalking
  );
}

// console.log(calShortestTime(4, 3, [2, 3, 4, 5]));

module.exports = calShortestTime;
