function calculateBMI() {
  // Get the user's height and weight.
  height = parseFloat(prompt("Enter your height in meters: "));
  weight = parseFloat(prompt("Enter your weight in kilograms: "));

  // Calculate the BMI.
  bmi = weight / (height ** 2);
  console.log("Your BMI is: " + bmi);
  // Return the BMI.
  return bmi;

    
}

// Function to interpret values of BMI.
function interpretBMI(bmi) {
  if (bmi < 18.5) {
    console.log("Underweight");
  } else if (18.5 <= bmi < 25) {
    console.log("Normal weight");
  } else if (25 <= bmi < 30) {
    console.log("Overweight");
  } else {
    console.log("Obese");
  }
}



   bmi = calculateBMI();
   interpretBMI(bmi);
