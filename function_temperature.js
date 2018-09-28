function celsiusToFahrenheit(celsius){
    fahrenheit = celsius * 1.8 + 32
    console.log(celsius + "°C is " + fahrenheit + "°F")
}

function fahrenheitTocelsius(fahrenheit){
    celsius1 = (fahrenheit-32) / 1.8
    console.log(fahrenheit + "°F is " + celsius1 + "°C")
}
celsiusToFahrenheit(10)
fahrenheitTocelsius(10)