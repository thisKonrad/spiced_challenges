

const mealPrice = 25.55;
const tipAmount = 10;

function totalBillCalc(){

    const mealPricePercentage = (mealPrice / 100);

    let tipPercentage = mealPricePercentage * tipAmount;

    let totalBill =  mealPrice + tipPercentage;

    console.log(`Your total Bill is about ${totalBill.toFixed(2)}€.`);
}

totalBillCalc();
=======
/* tipp calculator */

let result = document.querySelector('#result');

let mealCost = 25.89;

let tipPercentage = 9;

function tipMealCalculation(){

    let mealCoastPercent = mealCost / 100;

    /* to fixed() Method number with two or less digits after float: */
    let tipTotal = mealCoastPercent.toFixed(2) * tipPercentage;

    let totalCost = mealCost + tipTotal;

    console.log(`Your total bill is about ${totalCost}€.`);

    result.innerText = `Your total bill is about ${totalCost}€.`;

}
tipMealCalculation();
