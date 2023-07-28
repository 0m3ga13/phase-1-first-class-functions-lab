const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);
const returnLastTwoDrivers = (drivers) => drivers.slice(-2);
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = a => fare => fare * a;
const fareDoubler =  createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = (arrayOfDrivers, fn) =>  fn(arrayOfDrivers);

console.log(fareDoubler(15))