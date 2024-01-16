function toFahrenheit(celsius) {
 // Write your code here
	 if (celsius < -273.15 || celsius > 1.8e9) {
    return "Invalid input temperature";
  }
	 var fahrenheit = (celsius * 9/5) + 32;
  fahrenheit = fahrenheit.toFixed(2);

  return fahrenheit;
}

// Do not change the code below
const celsius = prompt("Enter Celsius:"); 
alert(toFahrenheit(Number(celsius)));