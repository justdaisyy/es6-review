class Calculator {
    constructor() {
      this.result = 0;
    }
    add(value) {
      this.result += value;
    }
    subtract(value) {
      this.result -= value;
    }
    getResult() {
      return this.result;
    }
  }
  const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data fetched!');
      }, 2000);
    });
  };
  
  const processData = async () => {
    try {
      const data = await fetchData();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  processData();
  const userRoles = new Map();
  userRoles.set('admin', 'Administrator');
  userRoles.set('user', 'Regular User');
  userRoles.set('guest', 'Guest User');
  
  userRoles.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });

  export { Calculator, fetchData, processData, userRoles };
