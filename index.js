import { Calculator, fetchData, processData, userRoles } from './tools.js';

// Test Calculator class
const calc = new Calculator();
calc.add(5);
calc.subtract(2);
console.log('Calculator Result:', calc.getResult());

// Test fetchData function
processData();

// Test Map object
console.log('User Roles:');
userRoles.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
