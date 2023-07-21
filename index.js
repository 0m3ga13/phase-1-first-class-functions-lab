const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);
const returnLastTwoDrivers = (drivers) => drivers.slice(-2);
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = (multiplier) => fareMultiplier = () => multiplier*multiplier;
const fareDoubler = (fare) => fare*2;
const fareTripler = (fare) => fare*3;
const selectDifferentDrivers = (arrayOfDrivers, fn) =>  fn(arrayOfDrivers);