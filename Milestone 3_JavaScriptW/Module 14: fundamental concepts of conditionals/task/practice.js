/***
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
// const expenses = 40;
// if (expenses >= 500) {
//     console.log("You have free drink ")
// } else {
//     console.log("You need to buy your drink at 30 tk")
// }

/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
function bmiCalculate(event) {
  event.preventDefault();

  const weight = parseFloat(document.getElementById('bmi1').value);
  const heightInInch = parseFloat(document.getElementById('bmi2').value);
  let message = '';

  if (isNaN(weight) || isNaN(heightInInch) || heightInInch === 0) {
    message = '⚠️ Please enter valid weight and height.';
  } else {
    const heightInMeter = heightInInch * 0.0254;
    const bmi = weight / (heightInMeter * heightInMeter);

    if (bmi < 18.5) {
      message = `🔍 You are underweight. BMI: ${bmi.toFixed(2)}`;
    } else if (bmi >= 18.5 && bmi < 25) {
      message = `✅ You are normal. BMI: ${bmi.toFixed(2)}`;
    } else if (bmi >= 25 && bmi < 30) {
      message = `⚠️ You are overweight. BMI: ${bmi.toFixed(2)}`;
    } else {
      message = `🚨 You are obese. BMI: ${bmi.toFixed(2)}`;
    }
  }

  document.getElementById('bmiResult').textContent = message;
}

/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
function calculateGPA(event) {
  event.preventDefault();

  const mark = parseFloat(document.getElementById('markinput').value);
  let result = '';

  if (isNaN(mark) || mark < 0 || mark > 100) {
    result = '⚠️ Please enter a valid mark between 0 and 100.';
  } else {
    let grade = '';
    if (mark >= 80) {
      grade = 'A+ (GPA 5.00)';
    } else if (mark >= 70) {
      grade = 'A (GPA 4.00)';
    } else if (mark >= 60) {
      grade = 'A- (GPA 3.50)';
    } else if (mark >= 50) {
      grade = 'B (GPA 3.00)';
    } else if (mark >= 40) {
      grade = 'C (GPA 2.00)';
    } else if (mark >= 33) {
      grade = 'D (GPA 1.00)';
    } else {
      grade = 'F (GPA 0.00)';
    }

    result = `🎓 Your Grade: ${grade}`;
  }

  document.getElementById('markResult').textContent = result;
}

/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

function markComparison(event) {
  event.preventDefault();

  const myMark = parseFloat(document.getElementById('myMark').value);
  const friendMark = parseFloat(document.getElementById('frendMark').value);
  let result = '';

  if (myMark > 80) {
    if (friendMark > 80) {
      result = "চলো লাঞ্চে যাই 🍽️";
    } else if (friendMark >= 60) {
      result = "বন্ধুকে বলো, next time ভালো করবে 😊";
    } else if (friendMark >= 40) {
      result = "বন্ধুর মেসেজ আনসিন করে দাও 😑";
    } else {
      result = "বন্ধুকে ব্লক করে দাও 🛑";
    }
  } else {
    result = "বাসায় ফিরে ঘুমাও এবং দুঃখের অভিনয় করো 😢";
  }

  document.getElementById('markResultt').textContent = result;
}
/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/