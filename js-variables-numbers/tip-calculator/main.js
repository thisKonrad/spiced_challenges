
const mealPrice = 25.55;
const tipAmount = 10;

function totalBillCalc(){

    const mealPricePercentage = (mealPrice / 100);

    let tipPercentage = mealPricePercentage * tipAmount;

    let totalBill =  mealPrice + tipPercentage;

    console.log(`Your total Bill is about ${totalBill.toFixed(2)}€.`);
}

totalBillCalc();
