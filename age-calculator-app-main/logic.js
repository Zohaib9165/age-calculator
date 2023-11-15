function ageCalculate() {
    // Get the user's input for day, month, and year
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
  
    // Validate the input
    // Uncomment this part if you want to add validation
    // if (isNaN(day) || isNaN(month) || isNaN(year)) {
    //   document.getElementById("result").innerHTML =
    //     "Please enter valid values for day, month, and year.";
    //   return;
    // }
  
    // Create a Date object for the birthdate
    var birthdate = new Date(year, month - 1, day);
    console.log(birthdate);
  
    // Get the current date
    var currentDate = new Date();
  
    // Calculate the age
    var ageInMilliseconds = currentDate - birthdate;
  
    // Convert milliseconds to seconds, minutes, hours, and days
    var ageInSeconds = ageInMilliseconds / 1000;
    var ageInMinutes = ageInSeconds / 60;
    var ageInHours = ageInMinutes / 60;
    var ageInDays = ageInHours / 24;
  
    // Calculate the age in years, months, and days
    var ageYears = Math.floor(ageInDays / 365);
    var ageMonths = Math.floor((ageInDays % 365) / 30.44); // Average days in a month
    var ageDays = Math.floor(ageInDays % 30.44); // Average days in a month
  
    // Display the result
    document.getElementById("resultYears").innerHTML = ageYears;
    document.getElementById("resultMonths").innerHTML = ageMonths;
    document.getElementById("resultDays").innerHTML = ageDays;
  }
  
