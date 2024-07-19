let user = {
    name: "Car",
    age: 30
  };
  
  // Перебираємо значення
  for (let value of Object.values(user)) {
    alert(value); // Car, тоді 30
  }
