//The first parameter should be the weight and the second should be the height.

function bmiCalculator (weight, height ){
    var height = Math.pow(height, 2);
    var weightAndHeight = Math.floor(weight / height);
    return Math.round (weightAndHeight);
}


 // If my weight is 65Kg and my height is 1.8m, I should be able to call function like this:

 var bmi = bmiCalculator(65, 1.8); 
console.log("Your BMI is " + bmi)

// bmi should equal 20 when it's rounded to the nearest whole number.

